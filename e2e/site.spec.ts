import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const paginas = ["/", "/privacidade/", "/acessibilidade/"];

for (const caminho of paginas) {
  test(`sem falhas de acessibilidade em ${caminho}`, async ({ page }) => {
    await page.goto(caminho);
    const { violations } = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(violations.map((v) => v.id)).toEqual([]);
  });

  test(`sem rolagem lateral em 320 px em ${caminho}`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 700 });
    await page.goto(caminho);
    const sobra = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(sobra).toBeLessThanOrEqual(0);
  });
}

test("o rodapé identifica a empresa", async ({ page }) => {
  await page.goto("/");
  const rodape = page.getByRole("contentinfo");
  await expect(rodape).toContainText("AF Carneiro Engenharia e Empreendimentos Sustentáveis Ltda");
  await expect(rodape).toContainText("07.829.044/0001-78");
  await expect(rodape.getByRole("img", { name: "Símbolo de acessibilidade" })).toBeVisible();
});

test("o simulador recalcula a estimativa", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#economia")).toHaveText(/R\$\s10\.800 a R\$\s14\.400/);
  await expect(page.locator("#potencia")).toHaveText("12,0 kWp");
  await page.locator("#conta").fill("3000");
  await expect(page.locator("#conta-valor")).toHaveText(/R\$\s3\.000/);
  await expect(page.locator("#economia")).toHaveText(/R\$\s21\.600 a R\$\s28\.800/);
  await expect(page.locator("#potencia")).toHaveText("24,0 kWp");
});

test("os botões de contato levam ao WhatsApp da empresa", async ({ page }) => {
  await page.goto("/");
  const contato = page.locator("#contato").getByRole("link", { name: /WhatsApp/ });
  await expect(contato).toHaveAttribute("href", /^https:\/\/wa\.me\/5599984500656/);
});

test("o site de testes fica fora da busca", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex");
});

test("o menu do celular abre e leva às seções", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Só no celular");
  await page.goto("/");
  await page.getByText("Menu", { exact: true }).click();
  await page
    .getByRole("navigation", { name: "Principal no celular" })
    .getByRole("link", { name: "Simulador solar" })
    .click();
  await expect(page).toHaveURL(/#simulador$/);
  await expect(page.getByRole("navigation", { name: "Principal no celular" })).toBeHidden();
});

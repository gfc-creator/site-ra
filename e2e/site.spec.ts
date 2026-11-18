import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { temVitrine, vitrine } from "../src/lib/vitrine.ts";

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

test("o logo aparece no topo e no rodapé", async ({ page }) => {
  await page.goto("/");
  for (const area of ["banner", "contentinfo"] as const) {
    const logo = page.getByRole(area).getByRole("img", { name: "RA Tech Energia" });
    await expect(logo).toBeVisible();
    await expect.poll(() => logo.evaluate((i: HTMLImageElement) => i.naturalWidth > 0)).toBe(true);
  }
});

test("o rodapé identifica a empresa", async ({ page }) => {
  await page.goto("/");
  const rodape = page.getByRole("contentinfo");
  await expect(rodape).toContainText("AF Carneiro Engenharia e Empreendimentos Sustentáveis Ltda");
  await expect(rodape).toContainText("07.829.044/0001-78");
  await expect(rodape.getByRole("img", { name: "Símbolo de acessibilidade" })).toBeVisible();
});

test("o simulador recalcula a estimativa pela ligação", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#conta-depois")).toHaveText(/R\$\s276/);
  await expect(page.locator("#economia")).toHaveText(/R\$\s14\.685/);
  await expect(page.locator("#potencia")).toHaveText("9,7 kWp");
  await page.locator("#conta").fill("300");
  await page.locator("#ligacao").selectOption("trifasica");
  await expect(page.locator("#conta-valor")).toHaveText(/R\$\s300/);
  await expect(page.locator("#conta-depois")).toHaveText(/R\$\s123/);
  await expect(page.locator("#economia")).toHaveText(/R\$\s2\.119/);
  await expect(page.locator("#potencia")).toHaveText("1,2 kWp");
});

test("os botões de contato levam ao WhatsApp da empresa", async ({ page }) => {
  await page.goto("/");
  const contato = page.locator("#contato").getByRole("link", { name: /WhatsApp/ });
  await expect(contato).toHaveAttribute("href", /^https:\/\/wa\.me\/5599984500656/);
});

test("a seção de parceiros e clientes mostra os nomes e as imagens", async ({ page }) => {
  await page.goto("/");
  const secao = page.locator("#parceiros-e-clientes");
  if (!temVitrine) {
    await expect(secao).toHaveCount(0);
    await expect(page.locator('a[href="/#parceiros-e-clientes"]')).toHaveCount(0);
    return;
  }
  await expect(secao).toBeVisible();
  for (const { nome } of [...vitrine.clientes, ...vitrine.parceiros]) {
    await expect(secao).toContainText(nome);
  }
  await secao.scrollIntoViewIfNeeded();
  const imagens = secao.locator("img");
  for (const imagem of await imagens.all()) {
    await imagem.scrollIntoViewIfNeeded();
    await expect
      .poll(() => imagem.evaluate((i: HTMLImageElement) => i.complete && i.naturalWidth > 0))
      .toBe(true);
  }
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

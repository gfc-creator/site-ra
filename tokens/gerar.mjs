// Gera src/styles/tokens.css a partir de tokens/marca.tokens.json.
import StyleDictionary from "style-dictionary";

const dicionario = new StyleDictionary({
  usesDtcg: true,
  source: ["tokens/marca.tokens.json"],
  hooks: {
    transforms: {
      "cor/hex": {
        type: "value",
        filter: (token) => token.$type === "color",
        transform: (token) => token.$value.hex,
      },
    },
  },
  platforms: {
    css: {
      transforms: ["name/kebab", "cor/hex"],
      buildPath: "src/styles/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: { outputReferences: false },
        },
      ],
    },
  },
});

await dicionario.buildAllPlatforms();

import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "assets/**",
      "public/**",
      "test-results/**",
      "playwright-report/**",
    ],
  },
  {
    rules: {
      // Page markup keeps plain <img> elements and exact copy.
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    files: ["components/fx/**"],
    rules: {
      // Untyped page scripts; linting them adds noise, not safety.
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "prefer-const": "off",
    },
  },
];

export default config;

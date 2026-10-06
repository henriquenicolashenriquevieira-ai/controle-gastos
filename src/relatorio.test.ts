import { describe, expect, it } from "vitest";
import { descricaoCategoria } from "./relatorio";

describe("descricaoCategoria", () => {
  it("retorna Alimentação com a acentuação correta", () => {
    expect(descricaoCategoria("alimentação")).toBe("Alimentação");
  });

  it("retorna Transporte", () => {
    expect(descricaoCategoria("transporte")).toBe("Transporte");
  });

  it("retorna Lazer", () => {
    expect(descricaoCategoria("lazer")).toBe("Lazer");
  });

  it("retorna Moradia", () => {
    expect(descricaoCategoria("moradia")).toBe("Moradia");
  });
});

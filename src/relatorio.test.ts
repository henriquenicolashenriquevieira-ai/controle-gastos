import { describe, expect, it } from "vitest";
import { descricaoCategoria, formatarRelatorio, matrizCategoriaMes } from "./relatorio";
import type { Despesa } from "./tipos";

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

describe("matrizCategoriaMes", () => {
  it("soma despesas distribuídas entre categorias e meses", () => {
    const despesas: Despesa[] = [
      { id: 1, descricao: "Mercado", valor: 50, categoria: "alimentação", mes: 1 },
      { id: 2, descricao: "Feira", valor: 20, categoria: "alimentação", mes: 1 },
      { id: 3, descricao: "Ônibus", valor: 35, categoria: "transporte", mes: 3 },
      { id: 4, descricao: "Cinema", valor: 40, categoria: "lazer", mes: 12 },
      { id: 5, descricao: "Aluguel", valor: 800, categoria: "moradia", mes: 3 }
    ];

    const matriz = matrizCategoriaMes(despesas);

    expect(matriz).toHaveLength(4);
    expect(matriz.every((linha) => linha.length === 12)).toBe(true);
    expect(matriz[0][0]).toBe(70);
    expect(matriz[1][2]).toBe(35);
    expect(matriz[2][11]).toBe(40);
    expect(matriz[3][2]).toBe(800);
    expect(matriz[0][1]).toBe(0);
  });

  it("retorna uma matriz de zeros para um array vazio", () => {
    const matriz = matrizCategoriaMes([]);

    expect(matriz).toHaveLength(4);
    expect(matriz.every((linha) => linha.length === 12)).toBe(true);
    expect(matriz.flat().every((valor) => valor === 0)).toBe(true);
  });
});

describe("formatarRelatorio", () => {
  it("formata título, totais por categoria, total geral e maior despesa", () => {
    const despesas: Despesa[] = [
      { id: 1, descricao: "Mercado", valor: 50, categoria: "alimentação", mes: 1 },
      { id: 2, descricao: "Feira", valor: 20, categoria: "alimentação", mes: 1 },
      { id: 3, descricao: "Ônibus", valor: 35, categoria: "transporte", mes: 3 },
      { id: 4, descricao: "Cinema", valor: 40, categoria: "lazer", mes: 12 },
      { id: 5, descricao: "Aluguel", valor: 800, categoria: "moradia", mes: 3 }
    ];

    const relatorio = formatarRelatorio(despesas);

    expect(relatorio).toContain("RELATÓRIO DE GASTOS");
    expect(relatorio).toContain("Alimentação     | R$ 70.00");
    expect(relatorio).toContain("Transporte      | R$ 35.00");
    expect(relatorio).toContain("Lazer           | R$ 40.00");
    expect(relatorio).toContain("Moradia         | R$ 800.00");
    expect(relatorio).toContain("Total geral: R$ 945.00");
    expect(relatorio).toContain("Maior despesa: Aluguel (R$ 800.00)");
  });

  it("formata totais zerados e ausência de maior despesa para uma lista vazia", () => {
    const relatorio = formatarRelatorio([]);

    expect(relatorio).toContain("RELATÓRIO DE GASTOS");
    expect(relatorio).toContain("Alimentação     | R$ 0.00");
    expect(relatorio).toContain("Total geral: R$ 0.00");
    expect(relatorio).toContain("Maior despesa: Nenhuma");
  });
});

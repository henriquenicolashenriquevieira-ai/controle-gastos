import { describe, it, expect } from "vitest";
import { adicionarDespesa } from "./despesas";
import type { Despesa } from "./tipos";

const despesaBase: Despesa = {
  id: 1,
  descricao: "Almoço",
  valor: 30,
  categoria: "alimentação",
  mes: 10
};

describe("adicionarDespesa", () => {
  it("retorna novo array com a despesa adicionada", () => {
    const despesas = [despesaBase];

    const nova: Despesa = {
      id: 2,
      descricao: "Cinema",
      valor: 25,
      categoria: "lazer",
      mes: 10
    };

    const resultado = adicionarDespesa(despesas, nova);

    expect(resultado).toEqual([despesaBase, nova]);
    expect(resultado).not.toBe(despesas);
  });

  it("lança erro se valor <= 0", () => {
    const despesas: Despesa[] = [];

    const valorZero: Despesa = {
      ...despesaBase,
      valor: 0
    };

    const valorNegativo: Despesa = {
      ...despesaBase,
      valor: -10
    };

    expect(() => adicionarDespesa(despesas, valorZero)).toThrow();
    expect(() => adicionarDespesa(despesas, valorNegativo)).toThrow();
  });

  it("lança erro se mes fora de 1 a 12", () => {
    const despesas: Despesa[] = [];

    const mesZero: Despesa = {
      ...despesaBase,
      mes: 0
    };

    const mesTreze: Despesa = {
      ...despesaBase,
      mes: 13
    };

    expect(() => adicionarDespesa(despesas, mesZero)).toThrow();
    expect(() => adicionarDespesa(despesas, mesTreze)).toThrow();
  });

  it("não altera o array original", () => {
    const despesas = [despesaBase];
    const tamanhoAntes = despesas.length;

    // A função deve retornar um novo array para preservar o array recebido.
    adicionarDespesa(despesas, {
      id: 2,
      descricao: "Cinema",
      valor: 25,
      categoria: "lazer",
      mes: 10
    });

    expect(despesas.length).toBe(tamanhoAntes);
    expect(despesas).toEqual([despesaBase]);
  });
});
import { CATEGORIAS, type Categoria, type Despesa } from "./tipos";
import { despesasDaCategoria, maiorDespesa, totalGasto } from "./despesas";

export function descricaoCategoria(categoria: Categoria): string {
  switch (categoria) {
    case "alimentação":
      return "Alimentação";
    case "transporte":
      return "Transporte";
    case "lazer":
      return "Lazer";
    case "moradia":
      return "Moradia";
  }
}

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  const matriz: number[][] = [];

  for (let indiceCategoria = 0; indiceCategoria < CATEGORIAS.length; indiceCategoria++) {
    const linha: number[] = [];

    for (let indiceMes = 0; indiceMes < 12; indiceMes++) {
      linha.push(0);
    }

    matriz.push(linha);
  }

  for (let indiceDespesa = 0; indiceDespesa < despesas.length; indiceDespesa++) {
    const despesa = despesas[indiceDespesa];

    if (despesa.mes >= 1 && despesa.mes <= 12) {
      for (let indiceCategoria = 0; indiceCategoria < CATEGORIAS.length; indiceCategoria++) {
        if (CATEGORIAS[indiceCategoria] === despesa.categoria) {
          matriz[indiceCategoria][despesa.mes - 1] += despesa.valor;
          break;
        }
      }
    }
  }

  return matriz;
}

export function formatarRelatorio(despesas: Despesa[]): string {
  const linhas: string[] = [
    "Relatório de gastos".toUpperCase(),
    "Categoria       | Total anual"
  ];

  for (let indiceCategoria = 0; indiceCategoria < CATEGORIAS.length; indiceCategoria++) {
    const categoria = CATEGORIAS[indiceCategoria];
    const nomeCategoria = descricaoCategoria(categoria).padEnd(15);
    const totalCategoria = totalGasto(despesasDaCategoria(despesas, categoria));

    linhas.push(`${nomeCategoria} | R$ ${totalCategoria.toFixed(2)}`);
  }

  linhas.push(`Total geral: R$ ${totalGasto(despesas).toFixed(2)}`);

  const maior = maiorDespesa(despesas);
  if (maior === undefined) {
    linhas.push("Maior despesa: Nenhuma");
  } else {
    linhas.push(`Maior despesa: ${maior.descricao} (R$ ${maior.valor.toFixed(2)})`);
  }

  return linhas.join("\n");
}

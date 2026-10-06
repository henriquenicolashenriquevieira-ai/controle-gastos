import {
  adicionarDespesa,
  despesasDaCategoria,
  maiorDespesa,
  removerDespesa,
  totalGasto
} from "./despesas";
import { descricaoCategoria, formatarRelatorio, matrizCategoriaMes } from "./relatorio";
import type { Despesa } from "./tipos";

const despesasIniciais: Despesa[] = [
  { id: 1, descricao: "Mercado", valor: 245.5, categoria: "alimentação", mes: 1 },
  { id: 2, descricao: "Feira", valor: 82.3, categoria: "alimentação", mes: 2 },
  { id: 3, descricao: "Ônibus", valor: 96, categoria: "transporte", mes: 1 },
  { id: 4, descricao: "Combustível", valor: 180, categoria: "transporte", mes: 3 },
  { id: 5, descricao: "Cinema", valor: 54, categoria: "lazer", mes: 2 },
  { id: 6, descricao: "Restaurante", valor: 120, categoria: "lazer", mes: 4 },
  { id: 7, descricao: "Aluguel", valor: 1200, categoria: "moradia", mes: 1 }
];

const despesas = adicionarDespesa(despesasIniciais, {
  id: 8,
  descricao: "Conta de luz",
  valor: 168.75,
  categoria: "moradia",
  mes: 3,
  observacao: "Vencimento mensal"
});

console.log(formatarRelatorio(despesas));

const totalTransporte = totalGasto(despesasDaCategoria(despesas, "transporte"));
console.log(`\nTotal em ${descricaoCategoria("transporte")}: R$ ${totalTransporte.toFixed(2)}`);

const maior = maiorDespesa(despesas);
console.log(`Maior despesa registrada: ${maior?.descricao ?? "Nenhuma"}`);
console.log(`Matriz categoria/mês: ${JSON.stringify(matrizCategoriaMes(despesas))}`);
console.log(`Despesas após remover o exemplo 8: ${removerDespesa(despesas, 8).length}`);

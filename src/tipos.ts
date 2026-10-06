// Union type: restringe a categoria aos quatro valores permitidos.
export type Categoria = "alimentação" | "transporte" | "lazer" | "moradia";

export interface Despesa {
  // readonly: o identificador não deve mudar após a criação da despesa.
  readonly id: number;
  descricao: string;
  valor: number;
  categoria: Categoria;
  mes: number; // Mês do ano, validado entre 1 e 12 ao adicionar uma despesa.
  observacao?: string; // Opcional porque muitas despesas não precisam de observação.
}

// A ordem também define a ordem das categorias nos relatórios.
export const CATEGORIAS: Categoria[] = [
  "alimentação",
  "transporte",
  "lazer",
  "moradia"
];

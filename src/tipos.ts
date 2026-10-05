// Union type: restringe a categoria aos 4 valores permitidos, e o
// compilador recusa qualquer outro texto.
export type Categoria = "alimentacao" | "transporte" | "lazer" | "moradia";

export interface Despesa {
  // readonly: o identificador nunca muda depois que a despesa é criada.
  readonly id: number;
  descricao: string;
  valor: number;
  categoria: Categoria;
  mes: number; // 1 a 12 (validado em adicionarDespesa)
  observacao?: string; // Opcional porque nem toda despesa precisa de uma observação.
}

// Ordem das linhas da matriz do relatório.
export const CATEGORIAS: Categoria[] = [
  "alimentacao",
  "transporte",
  "lazer",
  "moradia"
];

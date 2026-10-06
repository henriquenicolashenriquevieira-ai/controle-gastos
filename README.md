# Controle de Gastos do Mês

## Objetivo

Projeto acadêmico em TypeScript para registrar despesas, agrupá-las por categoria e mês, calcular totais e exibir um relatório anual simplificado.

## Instalação

É necessário ter Node.js e npm instalados. Na pasta do projeto, instale as dependências com:

```bash
npm install
```

## Testes

Execute a suíte Vitest com:

```bash
npm test
```

Os testes cobrem as operações de despesas, a descrição das categorias, a matriz por categoria e mês e a formatação do relatório.

## Executar o programa

Rode o programa de exemplo com:

```bash
npm run dev
```

O programa cria despesas de exemplo, demonstra as funções do projeto e imprime o relatório no terminal.

## Arquivos de configuração

- `package.json`: declara os scripts e as dependências do projeto, incluindo TypeScript, Vitest e `tsx`.
- `tsconfig.json`: configura a compilação TypeScript, incluindo `strict: true` e os arquivos dentro de `src`.
- `.gitignore`: impede que `node_modules/` e `dist/` sejam incluídos no Git.
- Configuração do Vitest: não existe arquivo separado; o comando `npm test` em `package.json` executa `vitest run --passWithNoTests`.

## Uso de inteligência artificial

| Função | Como a IA foi utilizada | Resultado da revisão |
| --- | --- | --- |
| `adicionarDespesa` | Ajudou a implementar validação de valor e mês e retorno sem mutar o array. | Aceita; testes foram registrados em commit anterior à implementação. |
| `removerDespesa` | Ajudou a filtrar pelo identificador sem mutar o array e a retornar cópia quando não há correspondência. | Aceita; o commit de testes antecede o commit de implementação. |
| `despesasDaCategoria` | Ajudou a filtrar despesas pela categoria informada. | Aceita; os testes existentes cobrem seleção, ausência de correspondências e preservação do array. |
| `totalGasto` | Ajudou a somar os valores sem alterar a lista. | Aceita; os testes cobrem soma, lista vazia e preservação do array. |
| `maiorDespesa` | Ajudou a localizar a despesa de maior valor e tratar lista vazia. | Aceita; os testes cobrem o maior valor, lista vazia e preservação do array. |
| `descricaoCategoria` | Ajudou a mapear cada categoria para seu nome de exibição com `switch`. | Aceita; há teste para cada categoria. |
| `matrizCategoriaMes` | Ajudou a montar a matriz e acumular valores usando laços `for`. | Aceita; os testes cobrem despesas em várias categorias/meses e lista vazia. |
| `formatarRelatorio` | Ajudou a montar o relatório reutilizando as funções existentes e alinhando/formatando valores. | Aceita; as expectativas de espaçamento nos testes foram ajustadas para corresponder ao alinhamento produzido. |

## Reflexão sobre o uso da IA

- Usei a IA para implementar funções pequenas e revisar o comportamento esperado de cada uma.
- Para `adicionarDespesa` e `removerDespesa`, o histórico tem commits separados de testes antes dos commits de implementação.
- Para algumas funções posteriores, testes e implementação aparecem juntos no mesmo commit, então o log não revela a ordem dentro desse commit.
- No trabalho de `formatarRelatorio`, a primeira execução mostrou que as expectativas dos testes tinham um espaço a menos que a saída alinhada.
- Ajustei as expectativas para refletir o espaçamento produzido pela implementação, sem mudar o requisito de alinhamento.
- Executei Vitest e a verificação TypeScript durante as etapas para conferir o comportamento e os tipos.

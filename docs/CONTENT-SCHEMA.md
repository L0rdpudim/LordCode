# Esquema de conteúdo do Lord Code

Os currículos ficam em `data/html.js`, `data/css.js`, `data/javascript.js` e `data/c.js`. Cada arquivo registra um objeto em `window.LORDCODE_COURSES`. O conteúdo é separado da interface para que uma nova aula seja cadastrada sem reescrever navegação ou correção.

## Hierarquia

`curso → módulo → aula → conteúdo → exercícios`

Um curso tem `id`, `title`, `description`, `color`, `level` e `modules`. Módulos têm `id`, `title`, `description` e `lessons`. Aulas têm ID estável, título, descrição, estimativa de tempo, tipo (`lesson`, `practice` ou `project`), objetivos, parágrafos de conteúdo, exemplo de código, erro comum, resumo e lista de exercícios.

IDs não dependem da posição no array. Use, por exemplo, `html-m1-l1` para uma aula e `html-m1-l1-e1` para um exercício.

## Tipos de exercício suportados

- `multiple-choice`: opções com `id` e `text`, mais `answer` com o ID correto.
- `code-reading`: trecho de código, opções e interpretação correta.
- `predict-output`: trecho, `answer` e lista `accepted` para resultados aceitos.
- `fill-code`: trecho com lacuna (`___`), `answer` e `accepted`.
- `ordering`: `items` com IDs estáveis e `answerOrder` com a ordem correta.
- `practical`: campo de código livre, critérios em `requirements` e `solution` de referência. Cada critério usa `contains` ou `anyOf`. HTML e CSS podem usar `preview: "html"` ou `preview: "css"`; a prévia roda em um `iframe` sem permissões de sandbox. JavaScript e C não são executados por esse tipo de atividade.

Cada aula deve ter pelo menos cinco exercícios. Eles aparecem um por vez e cada resposta enviada é definitiva nessa tentativa. A aula só é aprovada quando todas as questões foram respondidas e pelo menos 60% estão corretas: com cinco questões, são necessários três acertos. A aprovação acontece automaticamente ao terminar a quinta questão; uma tentativa abaixo da meta pode ser refeita. A revisão de uma aula aprovada limpa somente as respostas daquela aula e não religa etapas anteriores nem duplica XP. O campo `required` é mantido por compatibilidade, mas todos os exercícios cadastrados são contabilizados.

## Exemplo reduzido

```js
(window.LORDCODE_COURSES = window.LORDCODE_COURSES || []).push({
  id: "html",
  title: "HTML",
  description: "Estruture páginas web.",
  color: "#e87955",
  level: "Iniciante",
  modules: [{
    id: "html-m1",
    title: "Primeiros passos",
    description: "Fundamentos.",
    lessons: [{
      id: "html-m1-l1",
      title: "Minha aula",
      description: "Primeiro contato.",
      minutes: 5,
      kind: "lesson",
      objectives: ["Entender o conceito."],
      content: ["Uma explicação direta do assunto."],
      example: { language: "HTML", code: "<h1>Olá</h1>", explanation: ["h1 cria o título principal."] },
      commonMistake: "Não confunda o título com o nome da aba.",
      summary: ["h1 representa o título principal."],
      exercises: [{
        id: "html-m1-l1-e1",
        type: "multiple-choice",
        title: "Confira a ideia",
        prompt: "Qual elemento cria um título principal?",
        options: [{ id: "a", text: "h1" }, { id: "b", text: "p" }],
        answer: "a",
        explanation: "h1 representa o título principal.",
        solution: "h1"
      }]
    }]
  }]
});
```

Ao alterar o conteúdo, rode `node tests/validate-content.js`. O validador confere IDs, limites do currículo, pelo menos cinco questões por aula, presença dos seis tipos de exercícios e se as soluções cadastradas passam pela lógica de correção.

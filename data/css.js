(window.LORDCODE_COURSES = window.LORDCODE_COURSES || []).push({
  "id": "css",
  "title": "CSS",
  "description": "Estilize conteúdos e crie interfaces com seletores, layouts e responsividade.",
  "color": "#65a4ff",
  "level": "Iniciante",
  "modules": [
    {
      "id": "css-m1",
      "title": "Conceitos e seletores",
      "description": "Conheça as regras, os seletores e a ligação com HTML.",
      "lessons": [
        {
          "id": "css-m1-l1",
          "title": "O papel do CSS",
          "description": "Descubra como separar conteúdo e apresentação.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender o papel do css.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "CSS descreve como elementos HTML devem aparecer: cores, fontes, espaçamento e layout. Separar CSS do HTML facilita a manutenção e permite alterar o visual sem reescrever o conteúdo."
          ],
          "example": {
            "language": "CSS",
            "code": "p {\n  color: #dbeafe;\n  background-color: #0b1020;\n}",
            "explanation": [
              "CSS define estilos visuais, como cores, fontes, espaçamento e posicionamento."
            ]
          },
          "commonMistake": "HTML define o que o conteúdo é; CSS define como ele aparece na tela.",
          "summary": [
            "O papel do CSS",
            "CSS define estilos visuais, como cores, fontes, espaçamento e posicionamento."
          ],
          "exercises": [
            {
              "id": "css-m1-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual é a principal função do CSS?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "Controlar a apresentação visual dos elementos"
                },
                {
                  "id": "c",
                  "text": "Substituir todos os elementos da página ou do programa automaticamente."
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "b",
              "explanation": "CSS define estilos visuais, como cores, fontes, espaçamento e posicionamento.",
              "solution": "Controlar a apresentação visual dos elementos",
              "required": true
            },
            {
              "id": "css-m1-l1-e2",
              "type": "code-reading",
              "title": "Leia o código",
              "required": true,
              "prompt": "Qual conceito a aula demonstra neste trecho?",
              "code": "p {\n  color: #dbeafe;\n  background-color: #0b1020;\n}",
              "options": [
                {
                  "id": "a",
                  "text": "O trecho serve apenas para apagar dados."
                },
                {
                  "id": "b",
                  "text": "O papel do CSS"
                },
                {
                  "id": "c",
                  "text": "O trecho define o sistema operacional do computador."
                },
                {
                  "id": "d",
                  "text": "O trecho não possui relação com o assunto estudado."
                }
              ],
              "answer": "b",
              "explanation": "O exemplo foi escolhido para ilustrar este conceito: o papel do CSS",
              "solution": "O papel do CSS"
            },
            {
              "id": "css-m1-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre o papel do css?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "CSS define estilos visuais, como cores, fontes, espaçamento e posicionamento."
                },
                {
                  "id": "c",
                  "text": "Os nomes de elementos, propriedades e funções podem ser escolhidos aleatoriamente."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "b",
              "explanation": "Correto. CSS define estilos visuais, como cores, fontes, espaçamento e posicionamento.",
              "solution": "CSS define estilos visuais, como cores, fontes, espaçamento e posicionamento.",
              "required": true
            },
            {
              "id": "css-m1-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com o papel do css?",
              "options": [
                {
                  "id": "a",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "b",
                  "text": "Alterar nomes e símbolos aleatoriamente, sem conferir a documentação."
                },
                {
                  "id": "c",
                  "text": "HTML define o que o conteúdo é; CSS define como ele aparece na tela."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "c",
              "explanation": "Correto. HTML define o que o conteúdo é; CSS define como ele aparece na tela.",
              "solution": "HTML define o que o conteúdo é; CSS define como ele aparece na tela.",
              "required": true
            },
            {
              "id": "css-m1-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre o papel do css?",
              "options": [
                {
                  "id": "a",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "b",
                  "text": "Criar uma função que substitui toda a linguagem estudada."
                },
                {
                  "id": "c",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                },
                {
                  "id": "d",
                  "text": "Compreender o papel do css."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Compreender o papel do css.",
              "solution": "Compreender o papel do css.",
              "required": true
            }
          ]
        },
        {
          "id": "css-m1-l2",
          "title": "Regras, propriedades e valores",
          "description": "Leia e escreva uma regra CSS simples.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender regras, propriedades e valores.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Uma regra CSS combina um seletor com um bloco de declarações. Cada declaração contém uma propriedade, dois-pontos e um valor, e normalmente termina com ponto e vírgula. As chaves delimitam o bloco."
          ],
          "example": {
            "language": "CSS",
            "code": "p {\n  color: blue;\n  font-size: 16px;\n}",
            "explanation": [
              "O seletor identifica quais elementos receberão as declarações do bloco."
            ]
          },
          "commonMistake": "Uma propriedade sem valor válido pode ser ignorada pelo navegador. Confira os dois-pontos, as chaves e os pontos e vírgulas.",
          "summary": [
            "Regras, propriedades e valores",
            "O seletor identifica quais elementos receberão as declarações do bloco."
          ],
          "exercises": [
            {
              "id": "css-m1-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "O que aparece à esquerda das chaves em uma regra CSS?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "Substituir todos os elementos da página ou do programa automaticamente."
                },
                {
                  "id": "c",
                  "text": "O seletor"
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "c",
              "explanation": "O seletor identifica quais elementos receberão as declarações do bloco.",
              "solution": "O seletor",
              "required": true
            },
            {
              "id": "css-m1-l2-e2",
              "type": "predict-output",
              "title": "Preveja o resultado",
              "required": true,
              "prompt": "Qual será a cor do texto dos parágrafos?",
              "code": "p { color: blue; }",
              "answer": "azul",
              "accepted": [
                "azul"
              ],
              "explanation": "A propriedade color define a cor do texto do parágrafo.",
              "solution": "azul"
            },
            {
              "id": "css-m1-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre regras, propriedades e valores?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "Os nomes de elementos, propriedades e funções podem ser escolhidos aleatoriamente."
                },
                {
                  "id": "c",
                  "text": "O seletor identifica quais elementos receberão as declarações do bloco."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "c",
              "explanation": "Correto. O seletor identifica quais elementos receberão as declarações do bloco.",
              "solution": "O seletor identifica quais elementos receberão as declarações do bloco.",
              "required": true
            },
            {
              "id": "css-m1-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com regras, propriedades e valores?",
              "options": [
                {
                  "id": "a",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "b",
                  "text": "Alterar nomes e símbolos aleatoriamente, sem conferir a documentação."
                },
                {
                  "id": "c",
                  "text": "Evitar testar o código em exemplos diferentes."
                },
                {
                  "id": "d",
                  "text": "Uma propriedade sem valor válido pode ser ignorada pelo navegador. Confira os dois-pontos, as chaves e os pontos e vírgulas."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Uma propriedade sem valor válido pode ser ignorada pelo navegador. Confira os dois-pontos, as chaves e os pontos e vírgulas.",
              "solution": "Uma propriedade sem valor válido pode ser ignorada pelo navegador. Confira os dois-pontos, as chaves e os pontos e vírgulas.",
              "required": true
            },
            {
              "id": "css-m1-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre regras, propriedades e valores?",
              "options": [
                {
                  "id": "a",
                  "text": "Compreender regras, propriedades e valores."
                },
                {
                  "id": "b",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "c",
                  "text": "Criar uma função que substitui toda a linguagem estudada."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "a",
              "explanation": "Correto. Compreender regras, propriedades e valores.",
              "solution": "Compreender regras, propriedades e valores.",
              "required": true
            }
          ]
        },
        {
          "id": "css-m1-l3",
          "title": "Seletores básicos",
          "description": "Escolha elementos por tag, classe ou identificador.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender seletores básicos.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "O seletor de elemento, como p, seleciona tags desse tipo. A classe começa com ponto e pode ser reutilizada; o id começa com # e identifica um elemento específico na página."
          ],
          "example": {
            "language": "CSS",
            "code": "h1 { color: white; }\n.card { padding: 1rem; }\n#principal { max-width: 60rem; }",
            "explanation": [
              "O ponto antes do nome indica que card é uma classe."
            ]
          },
          "commonMistake": "Classes são úteis para estilos reutilizáveis. Use ids principalmente para identificadores únicos e alvos específicos.",
          "summary": [
            "Seletores básicos",
            "O ponto antes do nome indica que card é uma classe."
          ],
          "exercises": [
            {
              "id": "css-m1-l3-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual seletor CSS corresponde à classe card?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "Substituir todos os elementos da página ou do programa automaticamente."
                },
                {
                  "id": "c",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                },
                {
                  "id": "d",
                  "text": ".card"
                }
              ],
              "answer": "d",
              "explanation": "O ponto antes do nome indica que card é uma classe.",
              "solution": ".card",
              "required": true
            },
            {
              "id": "css-m1-l3-e2",
              "type": "fill-code",
              "title": "Complete o trecho",
              "required": true,
              "prompt": "Substitua ___ pela parte que completa corretamente o código. Digite apenas o trecho ausente.",
              "code": "p { ___: blue; }",
              "answer": "color",
              "accepted": [
                "color"
              ],
              "explanation": "O trecho correto é color; ele completa a sintaxe mostrada.",
              "solution": "color"
            },
            {
              "id": "css-m1-l3-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre seletores básicos?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "Os nomes de elementos, propriedades e funções podem ser escolhidos aleatoriamente."
                },
                {
                  "id": "c",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                },
                {
                  "id": "d",
                  "text": "O ponto antes do nome indica que card é uma classe."
                }
              ],
              "answer": "d",
              "explanation": "Correto. O ponto antes do nome indica que card é uma classe.",
              "solution": "O ponto antes do nome indica que card é uma classe.",
              "required": true
            },
            {
              "id": "css-m1-l3-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com seletores básicos?",
              "options": [
                {
                  "id": "a",
                  "text": "Classes são úteis para estilos reutilizáveis. Use ids principalmente para identificadores únicos e alvos específicos."
                },
                {
                  "id": "b",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "c",
                  "text": "Alterar nomes e símbolos aleatoriamente, sem conferir a documentação."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "a",
              "explanation": "Correto. Classes são úteis para estilos reutilizáveis. Use ids principalmente para identificadores únicos e alvos específicos.",
              "solution": "Classes são úteis para estilos reutilizáveis. Use ids principalmente para identificadores únicos e alvos específicos.",
              "required": true
            },
            {
              "id": "css-m1-l3-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre seletores básicos?",
              "options": [
                {
                  "id": "a",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "b",
                  "text": "Compreender seletores básicos."
                },
                {
                  "id": "c",
                  "text": "Criar uma função que substitui toda a linguagem estudada."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "b",
              "explanation": "Correto. Compreender seletores básicos.",
              "solution": "Compreender seletores básicos.",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "id": "css-m2",
      "title": "Estilo e caixa",
      "description": "Ajuste cor, texto e espaço das caixas.",
      "lessons": [
        {
          "id": "css-m2-l1",
          "title": "Conectando CSS ao HTML",
          "description": "Carregue uma folha de estilos externa.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender conectando css ao html.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "A forma comum de organizar um site é colocar o CSS em um arquivo separado e conectá-lo no head do HTML com link rel=\"stylesheet\". Assim, diversas páginas podem compartilhar o mesmo arquivo de estilos."
          ],
          "example": {
            "language": "CSS",
            "code": "<head>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>",
            "explanation": [
              "O elemento link de estilos deve ficar no head do documento HTML."
            ]
          },
          "commonMistake": "Confira o caminho em href e o nome do arquivo: um caminho incorreto impede o carregamento dos estilos.",
          "summary": [
            "Conectando CSS ao HTML",
            "O elemento link de estilos deve ficar no head do documento HTML."
          ],
          "exercises": [
            {
              "id": "css-m2-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Onde normalmente colocamos o link para a folha de estilos?",
              "options": [
                {
                  "id": "a",
                  "text": "Dentro do head"
                },
                {
                  "id": "b",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "c",
                  "text": "Substituir todos os elementos da página ou do programa automaticamente."
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "a",
              "explanation": "O elemento link de estilos deve ficar no head do documento HTML.",
              "solution": "Dentro do head",
              "required": true
            },
            {
              "id": "css-m2-l1-e2",
              "type": "ordering",
              "title": "Coloque em ordem",
              "required": true,
              "prompt": "Use os botões para colocar as instruções em uma sequência válida.",
              "items": [
                {
                  "id": "selector",
                  "text": "p"
                },
                {
                  "id": "open",
                  "text": "{"
                },
                {
                  "id": "declaration",
                  "text": "color: blue;"
                },
                {
                  "id": "close",
                  "text": "}"
                }
              ],
              "answerOrder": [
                "selector",
                "open",
                "declaration",
                "close"
              ],
              "solution": "p\n{\ncolor: blue;\n}",
              "explanation": "A ordem correta acompanha a estrutura sintática e a dependência entre as instruções."
            },
            {
              "id": "css-m2-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre conectando css ao html?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "Os nomes de elementos, propriedades e funções podem ser escolhidos aleatoriamente."
                },
                {
                  "id": "c",
                  "text": "O elemento link de estilos deve ficar no head do documento HTML."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "c",
              "explanation": "Correto. O elemento link de estilos deve ficar no head do documento HTML.",
              "solution": "O elemento link de estilos deve ficar no head do documento HTML.",
              "required": true
            },
            {
              "id": "css-m2-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com conectando css ao html?",
              "options": [
                {
                  "id": "a",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "b",
                  "text": "Alterar nomes e símbolos aleatoriamente, sem conferir a documentação."
                },
                {
                  "id": "c",
                  "text": "Evitar testar o código em exemplos diferentes."
                },
                {
                  "id": "d",
                  "text": "Confira o caminho em href e o nome do arquivo: um caminho incorreto impede o carregamento dos estilos."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Confira o caminho em href e o nome do arquivo: um caminho incorreto impede o carregamento dos estilos.",
              "solution": "Confira o caminho em href e o nome do arquivo: um caminho incorreto impede o carregamento dos estilos.",
              "required": true
            },
            {
              "id": "css-m2-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre conectando css ao html?",
              "options": [
                {
                  "id": "a",
                  "text": "Compreender conectando css ao html."
                },
                {
                  "id": "b",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "c",
                  "text": "Criar uma função que substitui toda a linguagem estudada."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "a",
              "explanation": "Correto. Compreender conectando css ao html.",
              "solution": "Compreender conectando css ao html.",
              "required": true
            }
          ]
        },
        {
          "id": "css-m2-l2",
          "title": "Cores e fundos",
          "description": "Aplique cores de texto e de fundo com contraste.",
          "minutes": 7,
          "kind": "practice",
          "objectives": [
            "Compreender cores e fundos.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "As propriedades color e background-color definem a cor do texto e do fundo. Cores podem ser expressas por nomes, hexadecimal, rgb ou hsl. Escolha combinações com contraste suficiente para leitura."
          ],
          "example": {
            "language": "CSS",
            "code": "body {\n  color: #f8fafc;\n  background-color: #0b1020;\n}\n.card { background-color: #151c30; }",
            "explanation": [
              "A propriedade color define a cor de primeiro plano, normalmente usada no texto."
            ]
          },
          "commonMistake": "Não dependa apenas da cor para comunicar erros, estados ou informações importantes.",
          "summary": [
            "Cores e fundos",
            "A propriedade color define a cor de primeiro plano, normalmente usada no texto."
          ],
          "exercises": [
            {
              "id": "css-m2-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual propriedade muda a cor do texto?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "color"
                },
                {
                  "id": "c",
                  "text": "Substituir todos os elementos da página ou do programa automaticamente."
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "b",
              "explanation": "A propriedade color define a cor de primeiro plano, normalmente usada no texto.",
              "solution": "color",
              "required": true
            },
            {
              "id": "css-m2-l2-e2",
              "type": "practical",
              "title": "Pratique o conceito",
              "required": true,
              "prompt": "Escreva uma regra para um cartão com cor de fundo, cor de texto e espaçamento interno.",
              "requirements": [
                {
                  "label": "Defina uma cor de fundo",
                  "contains": "background-color"
                },
                {
                  "label": "Defina a cor do texto",
                  "contains": "color:"
                },
                {
                  "label": "Defina o espaçamento interno",
                  "contains": "padding"
                }
              ],
              "solution": ".card {\n  background-color: #151c30;\n  color: #f8fafc;\n  padding: 1rem;\n}",
              "explanation": "Compare sua solução com cada critério indicado. A correção desta tarefa verifica padrões definidos no conteúdo; o código JavaScript e C não é executado nesta versão.",
              "preview": "css"
            },
            {
              "id": "css-m2-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre cores e fundos?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "Os nomes de elementos, propriedades e funções podem ser escolhidos aleatoriamente."
                },
                {
                  "id": "c",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                },
                {
                  "id": "d",
                  "text": "A propriedade color define a cor de primeiro plano, normalmente usada no texto."
                }
              ],
              "answer": "d",
              "explanation": "Correto. A propriedade color define a cor de primeiro plano, normalmente usada no texto.",
              "solution": "A propriedade color define a cor de primeiro plano, normalmente usada no texto.",
              "required": true
            },
            {
              "id": "css-m2-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com cores e fundos?",
              "options": [
                {
                  "id": "a",
                  "text": "Não dependa apenas da cor para comunicar erros, estados ou informações importantes."
                },
                {
                  "id": "b",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "c",
                  "text": "Alterar nomes e símbolos aleatoriamente, sem conferir a documentação."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "a",
              "explanation": "Correto. Não dependa apenas da cor para comunicar erros, estados ou informações importantes.",
              "solution": "Não dependa apenas da cor para comunicar erros, estados ou informações importantes.",
              "required": true
            },
            {
              "id": "css-m2-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre cores e fundos?",
              "options": [
                {
                  "id": "a",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "b",
                  "text": "Compreender cores e fundos."
                },
                {
                  "id": "c",
                  "text": "Criar uma função que substitui toda a linguagem estudada."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "b",
              "explanation": "Correto. Compreender cores e fundos.",
              "solution": "Compreender cores e fundos.",
              "required": true
            }
          ]
        },
        {
          "id": "css-m2-l3",
          "title": "Tipografia e legibilidade",
          "description": "Configure tamanho, família e espaçamento do texto.",
          "minutes": 7,
          "kind": "lesson",
          "objectives": [
            "Compreender tipografia e legibilidade.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "A propriedade font-family escolhe a família tipográfica; font-size define o tamanho; font-weight controla o peso; line-height regula a altura entre linhas. Uma tipografia consistente melhora a legibilidade."
          ],
          "example": {
            "language": "CSS",
            "code": "body {\n  font-family: Inter, sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n}\nh1 { font-weight: 800; }",
            "explanation": [
              "line-height define a altura da linha e influencia o espaço vertical do texto."
            ]
          },
          "commonMistake": "Use unidades e tamanhos que permaneçam legíveis em diferentes dispositivos. Evite linhas de texto excessivamente longas.",
          "summary": [
            "Tipografia e legibilidade",
            "line-height define a altura da linha e influencia o espaço vertical do texto."
          ],
          "exercises": [
            {
              "id": "css-m2-l3-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual propriedade controla a altura entre as linhas?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "Substituir todos os elementos da página ou do programa automaticamente."
                },
                {
                  "id": "c",
                  "text": "line-height"
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "c",
              "explanation": "line-height define a altura da linha e influencia o espaço vertical do texto.",
              "solution": "line-height",
              "required": true
            },
            {
              "id": "css-m2-l3-e2",
              "type": "code-reading",
              "title": "Leia o código",
              "required": true,
              "prompt": "Qual conceito a aula demonstra neste trecho?",
              "code": "body {\n  font-family: Inter, sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n}\nh1 { font-weight: 800; }",
              "options": [
                {
                  "id": "a",
                  "text": "O trecho serve apenas para apagar dados."
                },
                {
                  "id": "b",
                  "text": "O trecho define o sistema operacional do computador."
                },
                {
                  "id": "c",
                  "text": "Tipografia e legibilidade"
                },
                {
                  "id": "d",
                  "text": "O trecho não possui relação com o assunto estudado."
                }
              ],
              "answer": "c",
              "explanation": "O exemplo foi escolhido para ilustrar este conceito: tipografia e legibilidade",
              "solution": "Tipografia e legibilidade"
            },
            {
              "id": "css-m2-l3-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre tipografia e legibilidade?",
              "options": [
                {
                  "id": "a",
                  "text": "line-height define a altura da linha e influencia o espaço vertical do texto."
                },
                {
                  "id": "b",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "c",
                  "text": "Os nomes de elementos, propriedades e funções podem ser escolhidos aleatoriamente."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "a",
              "explanation": "Correto. line-height define a altura da linha e influencia o espaço vertical do texto.",
              "solution": "line-height define a altura da linha e influencia o espaço vertical do texto.",
              "required": true
            },
            {
              "id": "css-m2-l3-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com tipografia e legibilidade?",
              "options": [
                {
                  "id": "a",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "b",
                  "text": "Use unidades e tamanhos que permaneçam legíveis em diferentes dispositivos. Evite linhas de texto excessivamente longas."
                },
                {
                  "id": "c",
                  "text": "Alterar nomes e símbolos aleatoriamente, sem conferir a documentação."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "b",
              "explanation": "Correto. Use unidades e tamanhos que permaneçam legíveis em diferentes dispositivos. Evite linhas de texto excessivamente longas.",
              "solution": "Use unidades e tamanhos que permaneçam legíveis em diferentes dispositivos. Evite linhas de texto excessivamente longas.",
              "required": true
            },
            {
              "id": "css-m2-l3-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre tipografia e legibilidade?",
              "options": [
                {
                  "id": "a",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "b",
                  "text": "Criar uma função que substitui toda a linguagem estudada."
                },
                {
                  "id": "c",
                  "text": "Compreender tipografia e legibilidade."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Compreender tipografia e legibilidade.",
              "solution": "Compreender tipografia e legibilidade.",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "id": "css-m3",
      "title": "Construindo layouts",
      "description": "Organize conteúdos e adapte layouts.",
      "lessons": [
        {
          "id": "css-m3-l1",
          "title": "Modelo de caixa",
          "description": "Entenda conteúdo, padding, borda e margem.",
          "minutes": 7,
          "kind": "lesson",
          "objectives": [
            "Compreender modelo de caixa.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Cada elemento é representado por uma caixa. O conteúdo fica dentro do padding, depois vem a borda e, por fora, a margem. box-sizing: border-box torna width e height mais previsíveis ao incluir padding e borda nas dimensões declaradas."
          ],
          "example": {
            "language": "CSS",
            "code": "* { box-sizing: border-box; }\n.card {\n  width: 300px;\n  padding: 20px;\n  border: 1px solid #27304a;\n  margin: 16px;\n}",
            "explanation": [
              "padding é o espaço interno da caixa, ao redor do conteúdo."
            ]
          },
          "commonMistake": "A margem cria espaço externo; o padding cria espaço entre o conteúdo e a borda.",
          "summary": [
            "Modelo de caixa",
            "padding é o espaço interno da caixa, ao redor do conteúdo."
          ],
          "exercises": [
            {
              "id": "css-m3-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual propriedade cria espaço entre o conteúdo e a borda?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "Substituir todos os elementos da página ou do programa automaticamente."
                },
                {
                  "id": "c",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                },
                {
                  "id": "d",
                  "text": "padding"
                }
              ],
              "answer": "d",
              "explanation": "padding é o espaço interno da caixa, ao redor do conteúdo.",
              "solution": "padding",
              "required": true
            },
            {
              "id": "css-m3-l1-e2",
              "type": "predict-output",
              "title": "Preveja o resultado",
              "required": true,
              "prompt": "Qual valor de espaçamento interno será aplicado a .card?",
              "code": ".card { padding: 12px; }",
              "answer": "12px",
              "accepted": [
                "12px"
              ],
              "explanation": "A declaração aplica 12 pixels de espaçamento interno ao elemento .card.",
              "solution": "12px"
            },
            {
              "id": "css-m3-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre modelo de caixa?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "Os nomes de elementos, propriedades e funções podem ser escolhidos aleatoriamente."
                },
                {
                  "id": "c",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                },
                {
                  "id": "d",
                  "text": "padding é o espaço interno da caixa, ao redor do conteúdo."
                }
              ],
              "answer": "d",
              "explanation": "Correto. padding é o espaço interno da caixa, ao redor do conteúdo.",
              "solution": "padding é o espaço interno da caixa, ao redor do conteúdo.",
              "required": true
            },
            {
              "id": "css-m3-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com modelo de caixa?",
              "options": [
                {
                  "id": "a",
                  "text": "A margem cria espaço externo; o padding cria espaço entre o conteúdo e a borda."
                },
                {
                  "id": "b",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "c",
                  "text": "Alterar nomes e símbolos aleatoriamente, sem conferir a documentação."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "a",
              "explanation": "Correto. A margem cria espaço externo; o padding cria espaço entre o conteúdo e a borda.",
              "solution": "A margem cria espaço externo; o padding cria espaço entre o conteúdo e a borda.",
              "required": true
            },
            {
              "id": "css-m3-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre modelo de caixa?",
              "options": [
                {
                  "id": "a",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "b",
                  "text": "Compreender modelo de caixa."
                },
                {
                  "id": "c",
                  "text": "Criar uma função que substitui toda a linguagem estudada."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "b",
              "explanation": "Correto. Compreender modelo de caixa.",
              "solution": "Compreender modelo de caixa.",
              "required": true
            }
          ]
        },
        {
          "id": "css-m3-l2",
          "title": "Mini projeto: layout com Flexbox",
          "description": "Alinhe elementos em uma dimensão usando Flexbox.",
          "minutes": 7,
          "kind": "project",
          "objectives": [
            "Compreender mini projeto: layout com flexbox.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Flexbox é útil para alinhar e distribuir itens em uma linha ou coluna. Ao aplicar display: flex ao contêiner, propriedades como gap, justify-content, align-items e flex-wrap controlam espaçamento e alinhamento."
          ],
          "example": {
            "language": "CSS",
            "code": "<div class=\"row\">...</div>\n\n.row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}",
            "explanation": [
              "Depois de ativar o Flexbox, as propriedades de alinhamento organizam os filhos diretos do contêiner."
            ]
          },
          "commonMistake": "Flexbox atua no contêiner e organiza seus filhos diretos. Verifique qual elemento deve receber display: flex.",
          "summary": [
            "Mini projeto: layout com Flexbox",
            "Depois de ativar o Flexbox, as propriedades de alinhamento organizam os filhos diretos do contêiner."
          ],
          "exercises": [
            {
              "id": "css-m3-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual declaração ativa o Flexbox para um contêiner?",
              "options": [
                {
                  "id": "a",
                  "text": "display: flex"
                },
                {
                  "id": "b",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "c",
                  "text": "Substituir todos os elementos da página ou do programa automaticamente."
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "a",
              "explanation": "Depois de ativar o Flexbox, as propriedades de alinhamento organizam os filhos diretos do contêiner.",
              "solution": "display: flex",
              "required": true
            },
            {
              "id": "css-m3-l2-e2",
              "type": "fill-code",
              "title": "Complete o trecho",
              "required": true,
              "prompt": "Substitua ___ pela parte que completa corretamente o código. Digite apenas o trecho ausente.",
              "code": ".card { ___: 1rem; }",
              "answer": "padding",
              "accepted": [
                "padding"
              ],
              "explanation": "O trecho correto é padding; ele completa a sintaxe mostrada.",
              "solution": "padding"
            },
            {
              "id": "css-m3-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre mini projeto: layout com flexbox?",
              "options": [
                {
                  "id": "a",
                  "text": "Depois de ativar o Flexbox, as propriedades de alinhamento organizam os filhos diretos do contêiner."
                },
                {
                  "id": "b",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "c",
                  "text": "Os nomes de elementos, propriedades e funções podem ser escolhidos aleatoriamente."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "a",
              "explanation": "Correto. Depois de ativar o Flexbox, as propriedades de alinhamento organizam os filhos diretos do contêiner.",
              "solution": "Depois de ativar o Flexbox, as propriedades de alinhamento organizam os filhos diretos do contêiner.",
              "required": true
            },
            {
              "id": "css-m3-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com mini projeto: layout com flexbox?",
              "options": [
                {
                  "id": "a",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "b",
                  "text": "Flexbox atua no contêiner e organiza seus filhos diretos. Verifique qual elemento deve receber display: flex."
                },
                {
                  "id": "c",
                  "text": "Alterar nomes e símbolos aleatoriamente, sem conferir a documentação."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "b",
              "explanation": "Correto. Flexbox atua no contêiner e organiza seus filhos diretos. Verifique qual elemento deve receber display: flex.",
              "solution": "Flexbox atua no contêiner e organiza seus filhos diretos. Verifique qual elemento deve receber display: flex.",
              "required": true
            },
            {
              "id": "css-m3-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre mini projeto: layout com flexbox?",
              "options": [
                {
                  "id": "a",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "b",
                  "text": "Criar uma função que substitui toda a linguagem estudada."
                },
                {
                  "id": "c",
                  "text": "Compreender mini projeto: layout com flexbox."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Compreender mini projeto: layout com flexbox.",
              "solution": "Compreender mini projeto: layout com flexbox.",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "id": "css-m4",
      "title": "Projeto guiado",
      "description": "Estilize um componente com responsividade.",
      "lessons": [
        {
          "id": "css-m4-l1",
          "title": "Grid e design responsivo",
          "description": "Organize elementos em linhas e colunas adaptáveis.",
          "minutes": 7,
          "kind": "lesson",
          "objectives": [
            "Compreender grid e design responsivo.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "CSS Grid facilita layouts em duas dimensões. Com grid-template-columns, você define as colunas; media queries permitem alterar o layout conforme a largura do dispositivo. Combine Grid, medidas flexíveis e limites de largura para evitar estouro."
          ],
          "example": {
            "language": "CSS",
            "code": ".cards {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n@media (max-width: 640px) {\n  .cards { grid-template-columns: 1fr; }\n}",
            "explanation": [
              "Uma media query ativa regras quando uma condição, como max-width, é atendida."
            ]
          },
          "commonMistake": "Teste larguras pequenas e não use uma largura fixa maior que a tela para os contêineres principais.",
          "summary": [
            "Grid e design responsivo",
            "Uma media query ativa regras quando uma condição, como max-width, é atendida."
          ],
          "exercises": [
            {
              "id": "css-m4-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual recurso permite aplicar estilos conforme a largura da tela?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "Media query com @media"
                },
                {
                  "id": "c",
                  "text": "Substituir todos os elementos da página ou do programa automaticamente."
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "b",
              "explanation": "Uma media query ativa regras quando uma condição, como max-width, é atendida.",
              "solution": "Media query com @media",
              "required": true
            },
            {
              "id": "css-m4-l1-e2",
              "type": "ordering",
              "title": "Coloque em ordem",
              "required": true,
              "prompt": "Use os botões para colocar as instruções em uma sequência válida.",
              "items": [
                {
                  "id": "media",
                  "text": "@media (max-width: 640px)"
                },
                {
                  "id": "open",
                  "text": "{"
                },
                {
                  "id": "selector",
                  "text": ".cards { grid-template-columns: 1fr; }"
                },
                {
                  "id": "close",
                  "text": "}"
                }
              ],
              "answerOrder": [
                "media",
                "open",
                "selector",
                "close"
              ],
              "solution": "@media (max-width: 640px)\n{\n.cards { grid-template-columns: 1fr; }\n}",
              "explanation": "A ordem correta acompanha a estrutura sintática e a dependência entre as instruções."
            },
            {
              "id": "css-m4-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre grid e design responsivo?",
              "options": [
                {
                  "id": "a",
                  "text": "Uma media query ativa regras quando uma condição, como max-width, é atendida."
                },
                {
                  "id": "b",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "c",
                  "text": "Os nomes de elementos, propriedades e funções podem ser escolhidos aleatoriamente."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "a",
              "explanation": "Correto. Uma media query ativa regras quando uma condição, como max-width, é atendida.",
              "solution": "Uma media query ativa regras quando uma condição, como max-width, é atendida.",
              "required": true
            },
            {
              "id": "css-m4-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com grid e design responsivo?",
              "options": [
                {
                  "id": "a",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "b",
                  "text": "Teste larguras pequenas e não use uma largura fixa maior que a tela para os contêineres principais."
                },
                {
                  "id": "c",
                  "text": "Alterar nomes e símbolos aleatoriamente, sem conferir a documentação."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "b",
              "explanation": "Correto. Teste larguras pequenas e não use uma largura fixa maior que a tela para os contêineres principais.",
              "solution": "Teste larguras pequenas e não use uma largura fixa maior que a tela para os contêineres principais.",
              "required": true
            },
            {
              "id": "css-m4-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre grid e design responsivo?",
              "options": [
                {
                  "id": "a",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "b",
                  "text": "Criar uma função que substitui toda a linguagem estudada."
                },
                {
                  "id": "c",
                  "text": "Compreender grid e design responsivo."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Compreender grid e design responsivo.",
              "solution": "Compreender grid e design responsivo.",
              "required": true
            }
          ]
        },
        {
          "id": "css-m4-l2",
          "title": "Projeto: cartão responsivo",
          "description": "Monte um cartão com hierarquia, espaçamento e adaptação a telas pequenas.",
          "minutes": 12,
          "kind": "project",
          "objectives": [
            "Planejar a estrutura do projeto.",
            "Combinar os conceitos vistos na trilha.",
            "Revisar o resultado com critérios verificáveis."
          ],
          "content": [
            "Crie um cartão de apresentação com título, texto e ação. Use fundo contrastante, padding, borda arredondada e uma regra de layout que se adapte à tela. Mantenha os seletores simples e reutilizáveis."
          ],
          "example": {
            "language": "CSS",
            "code": "<article class=\"card\">\n  <h2>Meu projeto</h2>\n  <p>Uma breve descrição.</p>\n  <a href=\"#detalhes\">Ver detalhes</a>\n</article>\n\n.card { padding: 1.25rem; border-radius: 12px; }",
            "explanation": [
              "O espaçamento e o contraste ajudam na leitura, enquanto regras responsivas fazem o componente se adaptar ao espaço disponível."
            ]
          },
          "commonMistake": "Estilize primeiro o cartão em uma largura pequena e depois amplie a janela para conferir o comportamento.",
          "summary": [
            "Projeto: cartão responsivo",
            "O espaçamento e o contraste ajudam na leitura, enquanto regras responsivas fazem o componente se adaptar ao espaço disponível."
          ],
          "exercises": [
            {
              "id": "css-m4-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual combinação ajuda a criar um cartão legível e adaptável?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "Substituir todos os elementos da página ou do programa automaticamente."
                },
                {
                  "id": "c",
                  "text": "Espaçamento interno, cores com contraste e layout responsivo"
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "c",
              "explanation": "O espaçamento e o contraste ajudam na leitura, enquanto regras responsivas fazem o componente se adaptar ao espaço disponível.",
              "solution": "Espaçamento interno, cores com contraste e layout responsivo",
              "required": true
            },
            {
              "id": "css-m4-l2-e2",
              "type": "practical",
              "title": "Pratique o conceito",
              "required": true,
              "prompt": "Escreva uma regra para um cartão adaptável. Use Grid ou Flexbox, espaçamento entre itens e uma regra mobile com @media.",
              "requirements": [
                {
                  "label": "Ative Grid ou Flexbox",
                  "anyOf": [
                    "display: grid",
                    "display: flex"
                  ]
                },
                {
                  "label": "Defina o espaçamento entre itens",
                  "contains": "gap:"
                },
                {
                  "label": "Inclua uma media query",
                  "contains": "@media"
                }
              ],
              "solution": ".cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }\n@media (max-width: 640px) { .cards { grid-template-columns: 1fr; } }",
              "explanation": "Compare sua solução com cada critério indicado. A correção desta tarefa verifica padrões definidos no conteúdo; o código JavaScript e C não é executado nesta versão.",
              "preview": "css"
            },
            {
              "id": "css-m4-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre projeto: cartão responsivo?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "O espaçamento e o contraste ajudam na leitura, enquanto regras responsivas fazem o componente se adaptar ao espaço disponível."
                },
                {
                  "id": "c",
                  "text": "Os nomes de elementos, propriedades e funções podem ser escolhidos aleatoriamente."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "b",
              "explanation": "Correto. O espaçamento e o contraste ajudam na leitura, enquanto regras responsivas fazem o componente se adaptar ao espaço disponível.",
              "solution": "O espaçamento e o contraste ajudam na leitura, enquanto regras responsivas fazem o componente se adaptar ao espaço disponível.",
              "required": true
            },
            {
              "id": "css-m4-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com projeto: cartão responsivo?",
              "options": [
                {
                  "id": "a",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "b",
                  "text": "Alterar nomes e símbolos aleatoriamente, sem conferir a documentação."
                },
                {
                  "id": "c",
                  "text": "Estilize primeiro o cartão em uma largura pequena e depois amplie a janela para conferir o comportamento."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Estilize primeiro o cartão em uma largura pequena e depois amplie a janela para conferir o comportamento.",
              "solution": "Estilize primeiro o cartão em uma largura pequena e depois amplie a janela para conferir o comportamento.",
              "required": true
            },
            {
              "id": "css-m4-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre projeto: cartão responsivo?",
              "options": [
                {
                  "id": "a",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "b",
                  "text": "Criar uma função que substitui toda a linguagem estudada."
                },
                {
                  "id": "c",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                },
                {
                  "id": "d",
                  "text": "Planejar a estrutura do projeto."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Planejar a estrutura do projeto.",
              "solution": "Planejar a estrutura do projeto.",
              "required": true
            }
          ]
        }
      ]
    }
  ]
});

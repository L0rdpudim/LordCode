(window.LORDCODE_COURSES = window.LORDCODE_COURSES || []).push({
  "id": "javascript",
  "title": "JavaScript",
  "description": "Aprenda lógica, dados, decisões, repetições e comportamento interativo.",
  "color": "#e6cf55",
  "level": "Iniciante",
  "modules": [
    {
      "id": "javascript-m1",
      "title": "Primeiros comandos",
      "description": "Conheça a linguagem e os primeiros comandos.",
      "lessons": [
        {
          "id": "javascript-m1-l1",
          "title": "O papel do JavaScript",
          "description": "Entenda como JavaScript acrescenta comportamento às páginas.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender o papel do javascript.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "JavaScript é uma linguagem de programação usada no navegador para reagir a eventos, manipular dados e atualizar interfaces. Ela complementa a estrutura HTML e a apresentação CSS."
          ],
          "example": {
            "language": "JavaScript",
            "code": "console.log(\"Olá, mundo!\");",
            "explanation": [
              "JavaScript pode responder a eventos, calcular valores e atualizar o conteúdo da página."
            ]
          },
          "commonMistake": "O código deste exemplo escreve uma mensagem no console de desenvolvimento.",
          "summary": [
            "O papel do JavaScript",
            "JavaScript pode responder a eventos, calcular valores e atualizar o conteúdo da página."
          ],
          "exercises": [
            {
              "id": "javascript-m1-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Para que JavaScript é frequentemente usado em uma página web?",
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
                  "text": "Adicionar lógica e comportamento interativo"
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "c",
              "explanation": "JavaScript pode responder a eventos, calcular valores e atualizar o conteúdo da página.",
              "solution": "Adicionar lógica e comportamento interativo",
              "required": true
            },
            {
              "id": "javascript-m1-l1-e2",
              "type": "code-reading",
              "title": "Leia o código",
              "required": true,
              "prompt": "Qual conceito a aula demonstra neste trecho?",
              "code": "console.log(\"Olá, mundo!\");",
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
                  "text": "O papel do JavaScript"
                },
                {
                  "id": "d",
                  "text": "O trecho não possui relação com o assunto estudado."
                }
              ],
              "answer": "c",
              "explanation": "O exemplo foi escolhido para ilustrar este conceito: o papel do JavaScript",
              "solution": "O papel do JavaScript"
            },
            {
              "id": "javascript-m1-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre o papel do javascript?",
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
                  "text": "JavaScript pode responder a eventos, calcular valores e atualizar o conteúdo da página."
                }
              ],
              "answer": "d",
              "explanation": "Correto. JavaScript pode responder a eventos, calcular valores e atualizar o conteúdo da página.",
              "solution": "JavaScript pode responder a eventos, calcular valores e atualizar o conteúdo da página.",
              "required": true
            },
            {
              "id": "javascript-m1-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com o papel do javascript?",
              "options": [
                {
                  "id": "a",
                  "text": "O código deste exemplo escreve uma mensagem no console de desenvolvimento."
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
              "explanation": "Correto. O código deste exemplo escreve uma mensagem no console de desenvolvimento.",
              "solution": "O código deste exemplo escreve uma mensagem no console de desenvolvimento.",
              "required": true
            },
            {
              "id": "javascript-m1-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre o papel do javascript?",
              "options": [
                {
                  "id": "a",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "b",
                  "text": "Compreender o papel do javascript."
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
              "explanation": "Correto. Compreender o papel do javascript.",
              "solution": "Compreender o papel do javascript.",
              "required": true
            }
          ]
        },
        {
          "id": "javascript-m1-l2",
          "title": "Console e saída de dados",
          "description": "Mostre mensagens e acompanhe os resultados do código.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender console e saída de dados.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "console.log() escreve valores no console, sendo muito útil para aprender e depurar programas. Textos ficam entre aspas; números podem ser usados diretamente em expressões."
          ],
          "example": {
            "language": "JavaScript",
            "code": "console.log(\"Olá, mundo!\");\nconsole.log(2 + 3);",
            "explanation": [
              "O operador + soma os números e console.log mostra o valor resultante."
            ]
          },
          "commonMistake": "O segundo comando calcula a soma antes de mostrar o resultado.",
          "summary": [
            "Console e saída de dados",
            "O operador + soma os números e console.log mostra o valor resultante."
          ],
          "exercises": [
            {
              "id": "javascript-m1-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "O que console.log(2 + 3) mostra no console?",
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
                  "text": "5"
                }
              ],
              "answer": "d",
              "explanation": "O operador + soma os números e console.log mostra o valor resultante.",
              "solution": "5",
              "required": true
            },
            {
              "id": "javascript-m1-l2-e2",
              "type": "predict-output",
              "title": "Preveja o resultado",
              "required": true,
              "prompt": "Qual é a saída esperada do trecho? Responda com o resultado, sem aspas externas desnecessárias.",
              "code": "console.log(\"Olá, mundo!\");",
              "answer": "Olá, mundo!",
              "accepted": [
                "Olá, mundo!"
              ],
              "explanation": "console.log mostra o texto entre aspas.",
              "solution": "Olá, mundo!"
            },
            {
              "id": "javascript-m1-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre console e saída de dados?",
              "options": [
                {
                  "id": "a",
                  "text": "O operador + soma os números e console.log mostra o valor resultante."
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
              "explanation": "Correto. O operador + soma os números e console.log mostra o valor resultante.",
              "solution": "O operador + soma os números e console.log mostra o valor resultante.",
              "required": true
            },
            {
              "id": "javascript-m1-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com console e saída de dados?",
              "options": [
                {
                  "id": "a",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "b",
                  "text": "O segundo comando calcula a soma antes de mostrar o resultado."
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
              "explanation": "Correto. O segundo comando calcula a soma antes de mostrar o resultado.",
              "solution": "O segundo comando calcula a soma antes de mostrar o resultado.",
              "required": true
            },
            {
              "id": "javascript-m1-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre console e saída de dados?",
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
                  "text": "Compreender console e saída de dados."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Compreender console e saída de dados.",
              "solution": "Compreender console e saída de dados.",
              "required": true
            }
          ]
        },
        {
          "id": "javascript-m1-l3",
          "title": "Variáveis e constantes",
          "description": "Guarde valores em nomes usando let e const.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender variáveis e constantes.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Uma variável associa um nome a um valor. Use const quando a referência não precisar ser reatribuída e let quando o valor for mudar. Escolha nomes que indiquem o significado dos dados."
          ],
          "example": {
            "language": "JavaScript",
            "code": "const nome = \"Ana\";\nlet pontos = 0;\npontos = pontos + 1;",
            "explanation": [
              "const impede a reatribuição do identificador; o valor pode ainda ser mutável se for um objeto ou array."
            ]
          },
          "commonMistake": "JavaScript diferencia maiúsculas de minúsculas: nome e Nome são identificadores diferentes.",
          "summary": [
            "Variáveis e constantes",
            "const impede a reatribuição do identificador; o valor pode ainda ser mutável se for um objeto ou array."
          ],
          "exercises": [
            {
              "id": "javascript-m1-l3-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual palavra-chave é indicada quando o nome não será reatribuído?",
              "options": [
                {
                  "id": "a",
                  "text": "const"
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
              "explanation": "const impede a reatribuição do identificador; o valor pode ainda ser mutável se for um objeto ou array.",
              "solution": "const",
              "required": true
            },
            {
              "id": "javascript-m1-l3-e2",
              "type": "fill-code",
              "title": "Complete o trecho",
              "required": true,
              "prompt": "Substitua ___ pela parte que completa corretamente o código. Digite apenas o trecho ausente.",
              "code": "const total = 2 ___ 3;",
              "answer": "+",
              "accepted": [
                "+"
              ],
              "explanation": "O trecho correto é +; ele completa a sintaxe mostrada.",
              "solution": "+"
            },
            {
              "id": "javascript-m1-l3-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre variáveis e constantes?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "const impede a reatribuição do identificador; o valor pode ainda ser mutável se for um objeto ou array."
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
              "explanation": "Correto. const impede a reatribuição do identificador; o valor pode ainda ser mutável se for um objeto ou array.",
              "solution": "const impede a reatribuição do identificador; o valor pode ainda ser mutável se for um objeto ou array.",
              "required": true
            },
            {
              "id": "javascript-m1-l3-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com variáveis e constantes?",
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
                  "text": "JavaScript diferencia maiúsculas de minúsculas: nome e Nome são identificadores diferentes."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "c",
              "explanation": "Correto. JavaScript diferencia maiúsculas de minúsculas: nome e Nome são identificadores diferentes.",
              "solution": "JavaScript diferencia maiúsculas de minúsculas: nome e Nome são identificadores diferentes.",
              "required": true
            },
            {
              "id": "javascript-m1-l3-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre variáveis e constantes?",
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
                  "text": "Compreender variáveis e constantes."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Compreender variáveis e constantes.",
              "solution": "Compreender variáveis e constantes.",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "id": "javascript-m2",
      "title": "Lógica de programação",
      "description": "Trabalhe com valores, decisões e repetições.",
      "lessons": [
        {
          "id": "javascript-m2-l1",
          "title": "Tipos e operações",
          "description": "Combine números, textos e expressões com intenção.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender tipos e operações.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Textos são representados por strings; números usam number; true e false são booleanos. Operadores aritméticos fazem contas, enquanto + também concatena strings. Conhecer o tipo do dado ajuda a prever o resultado."
          ],
          "example": {
            "language": "JavaScript",
            "code": "const subtotal = 12;\nconst taxa = 3;\nconsole.log(subtotal + taxa);\nconsole.log(\"Total: \" + (subtotal + taxa));",
            "explanation": [
              "Boolean é o tipo lógico que representa true ou false."
            ]
          },
          "commonMistake": "Ao misturar números e strings, preste atenção à conversão e use parênteses para deixar clara a ordem da conta.",
          "summary": [
            "Tipos e operações",
            "Boolean é o tipo lógico que representa true ou false."
          ],
          "exercises": [
            {
              "id": "javascript-m2-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual é o tipo de dado de true?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "Boolean"
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
              "explanation": "Boolean é o tipo lógico que representa true ou false.",
              "solution": "Boolean",
              "required": true
            },
            {
              "id": "javascript-m2-l1-e2",
              "type": "ordering",
              "title": "Coloque em ordem",
              "required": true,
              "prompt": "Use os botões para colocar as instruções em uma sequência válida.",
              "items": [
                {
                  "id": "declare",
                  "text": "const idade = 20;"
                },
                {
                  "id": "if",
                  "text": "if (idade >= 18) {"
                },
                {
                  "id": "action",
                  "text": "console.log(\"Maior de idade\");"
                },
                {
                  "id": "close",
                  "text": "}"
                }
              ],
              "answerOrder": [
                "declare",
                "if",
                "action",
                "close"
              ],
              "solution": "const idade = 20;\nif (idade >= 18) {\nconsole.log(\"Maior de idade\");\n}",
              "explanation": "A ordem correta acompanha a estrutura sintática e a dependência entre as instruções."
            },
            {
              "id": "javascript-m2-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre tipos e operações?",
              "options": [
                {
                  "id": "a",
                  "text": "Boolean é o tipo lógico que representa true ou false."
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
              "explanation": "Correto. Boolean é o tipo lógico que representa true ou false.",
              "solution": "Boolean é o tipo lógico que representa true ou false.",
              "required": true
            },
            {
              "id": "javascript-m2-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com tipos e operações?",
              "options": [
                {
                  "id": "a",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "b",
                  "text": "Ao misturar números e strings, preste atenção à conversão e use parênteses para deixar clara a ordem da conta."
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
              "explanation": "Correto. Ao misturar números e strings, preste atenção à conversão e use parênteses para deixar clara a ordem da conta.",
              "solution": "Ao misturar números e strings, preste atenção à conversão e use parênteses para deixar clara a ordem da conta.",
              "required": true
            },
            {
              "id": "javascript-m2-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre tipos e operações?",
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
                  "text": "Compreender tipos e operações."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Compreender tipos e operações.",
              "solution": "Compreender tipos e operações.",
              "required": true
            }
          ]
        },
        {
          "id": "javascript-m2-l2",
          "title": "Condições com if e else",
          "description": "Execute caminhos diferentes de acordo com uma condição.",
          "minutes": 7,
          "kind": "practice",
          "objectives": [
            "Compreender condições com if e else.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "if executa um bloco quando a condição é verdadeira. else permite definir o que acontece quando ela é falsa. Operadores como ===, > e <= ajudam a comparar valores; use chaves para deixar os blocos claros."
          ],
          "example": {
            "language": "JavaScript",
            "code": "const idade = 18;\nif (idade >= 18) {\n  console.log(\"Maior de idade\");\n} else {\n  console.log(\"Menor de idade\");\n}",
            "explanation": [
              "O bloco else é o caminho alternativo quando a condição do if não é verdadeira."
            ]
          },
          "commonMistake": "Prefira comparação estrita === quando precisar comparar sem conversão automática de tipos.",
          "summary": [
            "Condições com if e else",
            "O bloco else é o caminho alternativo quando a condição do if não é verdadeira."
          ],
          "exercises": [
            {
              "id": "javascript-m2-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual bloco roda quando a condição do if é falsa?",
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
                  "text": "else"
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "c",
              "explanation": "O bloco else é o caminho alternativo quando a condição do if não é verdadeira.",
              "solution": "else",
              "required": true
            },
            {
              "id": "javascript-m2-l2-e2",
              "type": "practical",
              "title": "Pratique o conceito",
              "required": true,
              "prompt": "Escreva uma condição que verifique se idade é maior ou igual a 18 e tenha caminhos if e else.",
              "requirements": [
                {
                  "label": "Use uma condição if",
                  "contains": "if"
                },
                {
                  "label": "Compare a idade com 18",
                  "anyOf": [
                    ">= 18",
                    ">=18"
                  ]
                },
                {
                  "label": "Inclua o caminho alternativo",
                  "contains": "else"
                }
              ],
              "solution": "if (idade >= 18) {\n  console.log(\"Maior de idade\");\n} else {\n  console.log(\"Menor de idade\");\n}",
              "explanation": "Compare sua solução com cada critério indicado. A correção desta tarefa verifica padrões definidos no conteúdo; o código JavaScript e C não é executado nesta versão."
            },
            {
              "id": "javascript-m2-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre condições com if e else?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "O bloco else é o caminho alternativo quando a condição do if não é verdadeira."
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
              "explanation": "Correto. O bloco else é o caminho alternativo quando a condição do if não é verdadeira.",
              "solution": "O bloco else é o caminho alternativo quando a condição do if não é verdadeira.",
              "required": true
            },
            {
              "id": "javascript-m2-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com condições com if e else?",
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
                  "text": "Prefira comparação estrita === quando precisar comparar sem conversão automática de tipos."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Prefira comparação estrita === quando precisar comparar sem conversão automática de tipos.",
              "solution": "Prefira comparação estrita === quando precisar comparar sem conversão automática de tipos.",
              "required": true
            },
            {
              "id": "javascript-m2-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre condições com if e else?",
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
                  "text": "Compreender condições com if e else."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Compreender condições com if e else.",
              "solution": "Compreender condições com if e else.",
              "required": true
            }
          ]
        },
        {
          "id": "javascript-m2-l3",
          "title": "Repetições com loops",
          "description": "Repita tarefas sem escrever o mesmo comando várias vezes.",
          "minutes": 7,
          "kind": "lesson",
          "objectives": [
            "Compreender repetições com loops.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Um laço for costuma ser útil quando você conhece a contagem de repetições. Ele possui inicialização, condição e atualização. while repete enquanto a condição for verdadeira. Garanta que a condição possa deixar de ser verdadeira para evitar um loop infinito."
          ],
          "example": {
            "language": "JavaScript",
            "code": "for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}",
            "explanation": [
              "O contador assume 1, 2 e 3; ao chegar a 4, a condição i <= 3 deixa de ser verdadeira."
            ]
          },
          "commonMistake": "A atualização i++ incrementa o contador em um. Se o contador não mudar, a condição pode nunca terminar.",
          "summary": [
            "Repetições com loops",
            "O contador assume 1, 2 e 3; ao chegar a 4, a condição i <= 3 deixa de ser verdadeira."
          ],
          "exercises": [
            {
              "id": "javascript-m2-l3-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Quantas vezes o laço do exemplo executa o console.log?",
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
                  "text": "3"
                }
              ],
              "answer": "d",
              "explanation": "O contador assume 1, 2 e 3; ao chegar a 4, a condição i <= 3 deixa de ser verdadeira.",
              "solution": "3",
              "required": true
            },
            {
              "id": "javascript-m2-l3-e2",
              "type": "code-reading",
              "title": "Leia o código",
              "required": true,
              "prompt": "Qual conceito a aula demonstra neste trecho?",
              "code": "for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}",
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
                  "text": "O trecho não possui relação com o assunto estudado."
                },
                {
                  "id": "d",
                  "text": "Repetições com loops"
                }
              ],
              "answer": "d",
              "explanation": "O exemplo foi escolhido para ilustrar este conceito: repetições com loops",
              "solution": "Repetições com loops"
            },
            {
              "id": "javascript-m2-l3-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre repetições com loops?",
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
                  "text": "O contador assume 1, 2 e 3; ao chegar a 4, a condição i <= 3 deixa de ser verdadeira."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "c",
              "explanation": "Correto. O contador assume 1, 2 e 3; ao chegar a 4, a condição i <= 3 deixa de ser verdadeira.",
              "solution": "O contador assume 1, 2 e 3; ao chegar a 4, a condição i <= 3 deixa de ser verdadeira.",
              "required": true
            },
            {
              "id": "javascript-m2-l3-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com repetições com loops?",
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
                  "text": "A atualização i++ incrementa o contador em um. Se o contador não mudar, a condição pode nunca terminar."
                }
              ],
              "answer": "d",
              "explanation": "Correto. A atualização i++ incrementa o contador em um. Se o contador não mudar, a condição pode nunca terminar.",
              "solution": "A atualização i++ incrementa o contador em um. Se o contador não mudar, a condição pode nunca terminar.",
              "required": true
            },
            {
              "id": "javascript-m2-l3-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre repetições com loops?",
              "options": [
                {
                  "id": "a",
                  "text": "Compreender repetições com loops."
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
              "explanation": "Correto. Compreender repetições com loops.",
              "solution": "Compreender repetições com loops.",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "id": "javascript-m3",
      "title": "Coleções e funções",
      "description": "Armazene coleções e crie funções.",
      "lessons": [
        {
          "id": "javascript-m3-l1",
          "title": "Arrays e coleções",
          "description": "Armazene vários valores em uma lista.",
          "minutes": 7,
          "kind": "lesson",
          "objectives": [
            "Compreender arrays e coleções.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Um array guarda uma sequência de valores. Seus índices começam em zero; length informa a quantidade de itens. Métodos como push adicionam valores ao final, enquanto for...of permite percorrer os itens."
          ],
          "example": {
            "language": "JavaScript",
            "code": "const linguagens = [\"HTML\", \"CSS\", \"JavaScript\"];\nconsole.log(linguagens[0]);\nconsole.log(linguagens.length);",
            "explanation": [
              "Os arrays são indexados a partir de zero, então o índice 0 contém o primeiro item."
            ]
          },
          "commonMistake": "O primeiro elemento fica no índice 0, não no índice 1. Acessar um índice inexistente pode retornar undefined.",
          "summary": [
            "Arrays e coleções",
            "Os arrays são indexados a partir de zero, então o índice 0 contém o primeiro item."
          ],
          "exercises": [
            {
              "id": "javascript-m3-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "O que linguagens[0] retorna no exemplo?",
              "options": [
                {
                  "id": "a",
                  "text": "HTML"
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
              "explanation": "Os arrays são indexados a partir de zero, então o índice 0 contém o primeiro item.",
              "solution": "HTML",
              "required": true
            },
            {
              "id": "javascript-m3-l1-e2",
              "type": "predict-output",
              "title": "Preveja o resultado",
              "required": true,
              "prompt": "Qual é o primeiro valor exibido no console?",
              "code": "const valores = [\"HTML\", \"CSS\"];\nconsole.log(valores[0]);",
              "answer": "HTML",
              "accepted": [
                "HTML"
              ],
              "explanation": "O primeiro item de um array está no índice zero.",
              "solution": "HTML"
            },
            {
              "id": "javascript-m3-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre arrays e coleções?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "Os arrays são indexados a partir de zero, então o índice 0 contém o primeiro item."
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
              "explanation": "Correto. Os arrays são indexados a partir de zero, então o índice 0 contém o primeiro item.",
              "solution": "Os arrays são indexados a partir de zero, então o índice 0 contém o primeiro item.",
              "required": true
            },
            {
              "id": "javascript-m3-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com arrays e coleções?",
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
                  "text": "O primeiro elemento fica no índice 0, não no índice 1. Acessar um índice inexistente pode retornar undefined."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "c",
              "explanation": "Correto. O primeiro elemento fica no índice 0, não no índice 1. Acessar um índice inexistente pode retornar undefined.",
              "solution": "O primeiro elemento fica no índice 0, não no índice 1. Acessar um índice inexistente pode retornar undefined.",
              "required": true
            },
            {
              "id": "javascript-m3-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre arrays e coleções?",
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
                  "text": "Compreender arrays e coleções."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Compreender arrays e coleções.",
              "solution": "Compreender arrays e coleções.",
              "required": true
            }
          ]
        },
        {
          "id": "javascript-m3-l2",
          "title": "Mini projeto: função reutilizável",
          "description": "Agrupe instruções reutilizáveis e devolva resultados.",
          "minutes": 7,
          "kind": "project",
          "objectives": [
            "Compreender mini projeto: função reutilizável.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Uma função reúne uma tarefa sob um nome. Parâmetros recebem os dados de entrada e return devolve um resultado para quem chamou a função. Uma função pode ser chamada mais de uma vez com valores diferentes."
          ],
          "example": {
            "language": "JavaScript",
            "code": "function somar(a, b) {\n  return a + b;\n}\nconsole.log(somar(2, 3));",
            "explanation": [
              "return encerra a execução da função naquele ponto e devolve o valor indicado."
            ]
          },
          "commonMistake": "console.log mostra um valor, enquanto return envia o resultado de volta para o código que chamou a função.",
          "summary": [
            "Mini projeto: função reutilizável",
            "return encerra a execução da função naquele ponto e devolve o valor indicado."
          ],
          "exercises": [
            {
              "id": "javascript-m3-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual palavra-chave devolve um resultado de uma função?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "return"
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
              "explanation": "return encerra a execução da função naquele ponto e devolve o valor indicado.",
              "solution": "return",
              "required": true
            },
            {
              "id": "javascript-m3-l2-e2",
              "type": "fill-code",
              "title": "Complete o trecho",
              "required": true,
              "prompt": "Substitua ___ pela parte que completa corretamente o código. Digite apenas o trecho ausente.",
              "code": "if (idade ___ 18) {",
              "answer": ">=",
              "accepted": [
                ">=",
                "> ="
              ],
              "explanation": "O trecho correto é >=; ele completa a sintaxe mostrada.",
              "solution": ">="
            },
            {
              "id": "javascript-m3-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre mini projeto: função reutilizável?",
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
                  "text": "return encerra a execução da função naquele ponto e devolve o valor indicado."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "c",
              "explanation": "Correto. return encerra a execução da função naquele ponto e devolve o valor indicado.",
              "solution": "return encerra a execução da função naquele ponto e devolve o valor indicado.",
              "required": true
            },
            {
              "id": "javascript-m3-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com mini projeto: função reutilizável?",
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
                  "text": "console.log mostra um valor, enquanto return envia o resultado de volta para o código que chamou a função."
                }
              ],
              "answer": "d",
              "explanation": "Correto. console.log mostra um valor, enquanto return envia o resultado de volta para o código que chamou a função.",
              "solution": "console.log mostra um valor, enquanto return envia o resultado de volta para o código que chamou a função.",
              "required": true
            },
            {
              "id": "javascript-m3-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre mini projeto: função reutilizável?",
              "options": [
                {
                  "id": "a",
                  "text": "Compreender mini projeto: função reutilizável."
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
              "explanation": "Correto. Compreender mini projeto: função reutilizável.",
              "solution": "Compreender mini projeto: função reutilizável.",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "id": "javascript-m4",
      "title": "Interatividade e projeto",
      "description": "Responda a eventos e integre os conceitos.",
      "lessons": [
        {
          "id": "javascript-m4-l1",
          "title": "Eventos e interação",
          "description": "Responda a uma ação realizada pela pessoa usuária.",
          "minutes": 7,
          "kind": "lesson",
          "objectives": [
            "Compreender eventos e interação.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Um evento representa algo que aconteceu, como um clique. JavaScript pode registrar um ouvinte com addEventListener e executar uma função quando o evento ocorre. Separe a estrutura do botão da lógica que responde ao clique."
          ],
          "example": {
            "language": "JavaScript",
            "code": "const botao = document.querySelector(\"#meuBotao\");\nbotao.addEventListener(\"click\", () => {\n  console.log(\"Clicou!\");\n});",
            "explanation": [
              "addEventListener associa uma função a um tipo de evento, como click."
            ]
          },
          "commonMistake": "O seletor precisa encontrar um elemento existente; confira o id e o momento em que o script é carregado.",
          "summary": [
            "Eventos e interação",
            "addEventListener associa uma função a um tipo de evento, como click."
          ],
          "exercises": [
            {
              "id": "javascript-m4-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual método registra um ouvinte para um evento?",
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
                  "text": "addEventListener"
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "c",
              "explanation": "addEventListener associa uma função a um tipo de evento, como click.",
              "solution": "addEventListener",
              "required": true
            },
            {
              "id": "javascript-m4-l1-e2",
              "type": "ordering",
              "title": "Coloque em ordem",
              "required": true,
              "prompt": "Use os botões para colocar as instruções em uma sequência válida.",
              "items": [
                {
                  "id": "select",
                  "text": "const botao = document.querySelector(\"#meuBotao\");"
                },
                {
                  "id": "listen",
                  "text": "botao.addEventListener(\"click\", () => {"
                },
                {
                  "id": "action",
                  "text": "console.log(\"Clicou!\");"
                },
                {
                  "id": "close",
                  "text": "});"
                }
              ],
              "answerOrder": [
                "select",
                "listen",
                "action",
                "close"
              ],
              "solution": "const botao = document.querySelector(\"#meuBotao\");\nbotao.addEventListener(\"click\", () => {\nconsole.log(\"Clicou!\");\n});",
              "explanation": "A ordem correta acompanha a estrutura sintática e a dependência entre as instruções."
            },
            {
              "id": "javascript-m4-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre eventos e interação?",
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
                  "text": "addEventListener associa uma função a um tipo de evento, como click."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "c",
              "explanation": "Correto. addEventListener associa uma função a um tipo de evento, como click.",
              "solution": "addEventListener associa uma função a um tipo de evento, como click.",
              "required": true
            },
            {
              "id": "javascript-m4-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com eventos e interação?",
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
                  "text": "O seletor precisa encontrar um elemento existente; confira o id e o momento em que o script é carregado."
                }
              ],
              "answer": "d",
              "explanation": "Correto. O seletor precisa encontrar um elemento existente; confira o id e o momento em que o script é carregado.",
              "solution": "O seletor precisa encontrar um elemento existente; confira o id e o momento em que o script é carregado.",
              "required": true
            },
            {
              "id": "javascript-m4-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre eventos e interação?",
              "options": [
                {
                  "id": "a",
                  "text": "Compreender eventos e interação."
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
              "explanation": "Correto. Compreender eventos e interação.",
              "solution": "Compreender eventos e interação.",
              "required": true
            }
          ]
        },
        {
          "id": "javascript-m4-l2",
          "title": "Projeto: calculadora simples",
          "description": "Combine funções, condições e dados para resolver um pequeno problema.",
          "minutes": 12,
          "kind": "project",
          "objectives": [
            "Planejar a estrutura do projeto.",
            "Combinar os conceitos vistos na trilha.",
            "Revisar o resultado com critérios verificáveis."
          ],
          "content": [
            "Uma calculadora simples recebe dois números e uma operação, valida a entrada e devolve um resultado. Organize cada responsabilidade em etapas: obter valores, calcular e apresentar a resposta. Neste curso, o código enviado no exercício é avaliado por critérios de conteúdo, não executado automaticamente."
          ],
          "example": {
            "language": "JavaScript",
            "code": "function somar(a, b) {\n  return a + b;\n}\n\nconst resultado = somar(4, 6);\nconsole.log(resultado);",
            "explanation": [
              "Uma função nomeada pode ser chamada com entradas diferentes e deixa o cálculo mais fácil de revisar."
            ]
          },
          "commonMistake": "Em projetos reais, valide entradas e trate operações inválidas. Testes com valores pequenos ajudam a conferir a lógica.",
          "summary": [
            "Projeto: calculadora simples",
            "Uma função nomeada pode ser chamada com entradas diferentes e deixa o cálculo mais fácil de revisar."
          ],
          "exercises": [
            {
              "id": "javascript-m4-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Por que separar o cálculo em uma função?",
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
                  "text": "Para reutilizar e testar a lógica com diferentes valores"
                }
              ],
              "answer": "d",
              "explanation": "Uma função nomeada pode ser chamada com entradas diferentes e deixa o cálculo mais fácil de revisar.",
              "solution": "Para reutilizar e testar a lógica com diferentes valores",
              "required": true
            },
            {
              "id": "javascript-m4-l2-e2",
              "type": "practical",
              "title": "Pratique o conceito",
              "required": true,
              "prompt": "Escreva uma função chamada somar que receba dois parâmetros e devolva a soma usando return.",
              "requirements": [
                {
                  "label": "Declare uma função ou expressão de função",
                  "anyOf": [
                    "function somar",
                    "const somar"
                  ]
                },
                {
                  "label": "Use return para devolver o resultado",
                  "contains": "return"
                },
                {
                  "label": "Some os dois parâmetros",
                  "contains": "+"
                }
              ],
              "solution": "function somar(a, b) {\n  return a + b;\n}",
              "explanation": "Compare sua solução com cada critério indicado. A correção desta tarefa verifica padrões definidos no conteúdo; o código JavaScript e C não é executado nesta versão."
            },
            {
              "id": "javascript-m4-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre projeto: calculadora simples?",
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
                  "text": "Uma função nomeada pode ser chamada com entradas diferentes e deixa o cálculo mais fácil de revisar."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Uma função nomeada pode ser chamada com entradas diferentes e deixa o cálculo mais fácil de revisar.",
              "solution": "Uma função nomeada pode ser chamada com entradas diferentes e deixa o cálculo mais fácil de revisar.",
              "required": true
            },
            {
              "id": "javascript-m4-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com projeto: calculadora simples?",
              "options": [
                {
                  "id": "a",
                  "text": "Em projetos reais, valide entradas e trate operações inválidas. Testes com valores pequenos ajudam a conferir a lógica."
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
              "explanation": "Correto. Em projetos reais, valide entradas e trate operações inválidas. Testes com valores pequenos ajudam a conferir a lógica.",
              "solution": "Em projetos reais, valide entradas e trate operações inválidas. Testes com valores pequenos ajudam a conferir a lógica.",
              "required": true
            },
            {
              "id": "javascript-m4-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre projeto: calculadora simples?",
              "options": [
                {
                  "id": "a",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "b",
                  "text": "Planejar a estrutura do projeto."
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

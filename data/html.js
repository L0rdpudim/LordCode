(window.LORDCODE_COURSES = window.LORDCODE_COURSES || []).push({
  "id": "html",
  "title": "HTML",
  "description": "Estruture páginas web com elementos semânticos, links, imagens e formulários.",
  "color": "#e87955",
  "level": "Iniciante",
  "modules": [
    {
      "id": "html-m1",
      "title": "Primeiros passos",
      "description": "Entenda o documento e as marcações básicas.",
      "lessons": [
        {
          "id": "html-m1-l1",
          "title": "O papel do HTML",
          "description": "Entenda como o HTML organiza o conteúdo de uma página.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender o papel do html.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "HTML é a linguagem de marcação usada para descrever a estrutura e o significado do conteúdo de uma página. Ela informa ao navegador onde estão os títulos, parágrafos, imagens, links e outras partes."
          ],
          "example": {
            "language": "HTML",
            "code": "<h1>Minha primeira página</h1>\n<p>Estou aprendendo HTML.</p>",
            "explanation": [
              "HTML é a linguagem de marcação que organiza os elementos apresentados pelo navegador."
            ]
          },
          "commonMistake": "HTML descreve a estrutura do conteúdo; CSS cuida da apresentação e JavaScript acrescenta comportamento.",
          "summary": [
            "O papel do HTML",
            "HTML é a linguagem de marcação que organiza os elementos apresentados pelo navegador."
          ],
          "exercises": [
            {
              "id": "html-m1-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "O que descreve a estrutura e o significado do conteúdo de uma página?",
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
              "explanation": "HTML é a linguagem de marcação que organiza os elementos apresentados pelo navegador.",
              "solution": "HTML",
              "required": true
            },
            {
              "id": "html-m1-l1-e2",
              "type": "code-reading",
              "title": "Leia o código",
              "required": true,
              "prompt": "Qual conceito a aula demonstra neste trecho?",
              "code": "<h1>Minha primeira página</h1>\n<p>Estou aprendendo HTML.</p>",
              "options": [
                {
                  "id": "a",
                  "text": "O papel do HTML"
                },
                {
                  "id": "b",
                  "text": "O trecho serve apenas para apagar dados."
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
              "answer": "a",
              "explanation": "O exemplo foi escolhido para ilustrar este conceito: o papel do HTML",
              "solution": "O papel do HTML"
            },
            {
              "id": "html-m1-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre o papel do html?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "HTML é a linguagem de marcação que organiza os elementos apresentados pelo navegador."
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
              "explanation": "Correto. HTML é a linguagem de marcação que organiza os elementos apresentados pelo navegador.",
              "solution": "HTML é a linguagem de marcação que organiza os elementos apresentados pelo navegador.",
              "required": true
            },
            {
              "id": "html-m1-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com o papel do html?",
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
                  "text": "HTML descreve a estrutura do conteúdo; CSS cuida da apresentação e JavaScript acrescenta comportamento."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "c",
              "explanation": "Correto. HTML descreve a estrutura do conteúdo; CSS cuida da apresentação e JavaScript acrescenta comportamento.",
              "solution": "HTML descreve a estrutura do conteúdo; CSS cuida da apresentação e JavaScript acrescenta comportamento.",
              "required": true
            },
            {
              "id": "html-m1-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre o papel do html?",
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
                  "text": "Compreender o papel do html."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Compreender o papel do html.",
              "solution": "Compreender o papel do html.",
              "required": true
            }
          ]
        },
        {
          "id": "html-m1-l2",
          "title": "Estrutura de um documento",
          "description": "Monte o esqueleto básico de um arquivo HTML.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender estrutura de um documento.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Um documento HTML começa com uma declaração de tipo e um elemento html. Dentro dele, head guarda metadados e o título da aba; body contém o conteúdo visível da página."
          ],
          "example": {
            "language": "HTML",
            "code": "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Minha página</title>\n</head>\n<body>\n  <h1>Olá!</h1>\n</body>\n</html>",
            "explanation": [
              "O elemento body contém os títulos, textos, imagens e demais conteúdos exibidos na página."
            ]
          },
          "commonMistake": "O DOCTYPE informa o modo padrão do HTML; lang identifica o idioma principal do documento.",
          "summary": [
            "Estrutura de um documento",
            "O elemento body contém os títulos, textos, imagens e demais conteúdos exibidos na página."
          ],
          "exercises": [
            {
              "id": "html-m1-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual parte contém o conteúdo visível da página?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "body"
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
              "explanation": "O elemento body contém os títulos, textos, imagens e demais conteúdos exibidos na página.",
              "solution": "body",
              "required": true
            },
            {
              "id": "html-m1-l2-e2",
              "type": "predict-output",
              "title": "Preveja o resultado",
              "required": true,
              "prompt": "Que texto aparecerá visivelmente na página?",
              "code": "<h1>Olá, mundo!</h1>",
              "answer": "Olá, mundo!",
              "accepted": [
                "Olá, mundo!"
              ],
              "explanation": "O texto dentro de h1 é o conteúdo visível do título.",
              "solution": "Olá, mundo!"
            },
            {
              "id": "html-m1-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre estrutura de um documento?",
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
                  "text": "O elemento body contém os títulos, textos, imagens e demais conteúdos exibidos na página."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "c",
              "explanation": "Correto. O elemento body contém os títulos, textos, imagens e demais conteúdos exibidos na página.",
              "solution": "O elemento body contém os títulos, textos, imagens e demais conteúdos exibidos na página.",
              "required": true
            },
            {
              "id": "html-m1-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com estrutura de um documento?",
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
                  "text": "O DOCTYPE informa o modo padrão do HTML; lang identifica o idioma principal do documento."
                }
              ],
              "answer": "d",
              "explanation": "Correto. O DOCTYPE informa o modo padrão do HTML; lang identifica o idioma principal do documento.",
              "solution": "O DOCTYPE informa o modo padrão do HTML; lang identifica o idioma principal do documento.",
              "required": true
            },
            {
              "id": "html-m1-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre estrutura de um documento?",
              "options": [
                {
                  "id": "a",
                  "text": "Compreender estrutura de um documento."
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
              "explanation": "Correto. Compreender estrutura de um documento.",
              "solution": "Compreender estrutura de um documento.",
              "required": true
            }
          ]
        },
        {
          "id": "html-m1-l3",
          "title": "Tags, elementos e atributos",
          "description": "Diferencie tags, elementos e atributos.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender tags, elementos e atributos.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Uma tag marca o início ou o fim de um elemento. O elemento inclui a marcação e seu conteúdo. Atributos acrescentam informações ou configurações, como o destino de um link ou um texto alternativo."
          ],
          "example": {
            "language": "HTML",
            "code": "<a href=\"https://example.com\">Visitar site</a>",
            "explanation": [
              "Atributos fornecem informações adicionais; href define para onde o link aponta."
            ]
          },
          "commonMistake": "Neste exemplo, a é a tag do elemento de link e href informa seu destino.",
          "summary": [
            "Tags, elementos e atributos",
            "Atributos fornecem informações adicionais; href define para onde o link aponta."
          ],
          "exercises": [
            {
              "id": "html-m1-l3-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Para que serve um atributo como href?",
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
                  "text": "Informar o destino de um link"
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "c",
              "explanation": "Atributos fornecem informações adicionais; href define para onde o link aponta.",
              "solution": "Informar o destino de um link",
              "required": true
            },
            {
              "id": "html-m1-l3-e2",
              "type": "fill-code",
              "title": "Complete o trecho",
              "required": true,
              "prompt": "Substitua ___ pela parte que completa corretamente o código. Digite apenas o trecho ausente.",
              "code": "<___>Meu texto</p>",
              "answer": "p",
              "accepted": [
                "p"
              ],
              "explanation": "O trecho correto é p; ele completa a sintaxe mostrada.",
              "solution": "p"
            },
            {
              "id": "html-m1-l3-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre tags, elementos e atributos?",
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
                  "text": "Atributos fornecem informações adicionais; href define para onde o link aponta."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Atributos fornecem informações adicionais; href define para onde o link aponta.",
              "solution": "Atributos fornecem informações adicionais; href define para onde o link aponta.",
              "required": true
            },
            {
              "id": "html-m1-l3-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com tags, elementos e atributos?",
              "options": [
                {
                  "id": "a",
                  "text": "Neste exemplo, a é a tag do elemento de link e href informa seu destino."
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
              "explanation": "Correto. Neste exemplo, a é a tag do elemento de link e href informa seu destino.",
              "solution": "Neste exemplo, a é a tag do elemento de link e href informa seu destino.",
              "required": true
            },
            {
              "id": "html-m1-l3-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre tags, elementos e atributos?",
              "options": [
                {
                  "id": "a",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "b",
                  "text": "Compreender tags, elementos e atributos."
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
              "explanation": "Correto. Compreender tags, elementos e atributos.",
              "solution": "Compreender tags, elementos e atributos.",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "id": "html-m2",
      "title": "Texto e navegação",
      "description": "Organize textos, links, imagens e listas.",
      "lessons": [
        {
          "id": "html-m2-l1",
          "title": "Títulos e parágrafos",
          "description": "Organize textos com títulos e parágrafos adequados.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender títulos e parágrafos.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Use h1 a h6 para criar uma hierarquia de títulos e p para parágrafos. Escolha os níveis pela estrutura do conteúdo, não apenas pelo tamanho visual. Uma página geralmente deve ter um título principal claro."
          ],
          "example": {
            "language": "HTML",
            "code": "<h1>Receitas</h1>\n<h2>Bolo de cenoura</h2>\n<p>Uma receita simples para o lanche.</p>",
            "explanation": [
              "O elemento p representa um parágrafo de texto."
            ]
          },
          "commonMistake": "Não pule níveis de título sem motivo. O CSS pode mudar o visual sem alterar a hierarquia semântica.",
          "summary": [
            "Títulos e parágrafos",
            "O elemento p representa um parágrafo de texto."
          ],
          "exercises": [
            {
              "id": "html-m2-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual elemento HTML representa um parágrafo?",
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
                  "text": "p"
                }
              ],
              "answer": "d",
              "explanation": "O elemento p representa um parágrafo de texto.",
              "solution": "p",
              "required": true
            },
            {
              "id": "html-m2-l1-e2",
              "type": "ordering",
              "title": "Coloque em ordem",
              "required": true,
              "prompt": "Use os botões para colocar as instruções em uma sequência válida.",
              "items": [
                {
                  "id": "doctype",
                  "text": "<!DOCTYPE html>"
                },
                {
                  "id": "html",
                  "text": "<html lang=\"pt-BR\">"
                },
                {
                  "id": "head",
                  "text": "<head> metadados e título </head>"
                },
                {
                  "id": "body",
                  "text": "<body> conteúdo visível </body>"
                },
                {
                  "id": "close",
                  "text": "</html>"
                }
              ],
              "answerOrder": [
                "doctype",
                "html",
                "head",
                "body",
                "close"
              ],
              "solution": "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head> metadados e título </head>\n<body> conteúdo visível </body>\n</html>",
              "explanation": "A ordem correta acompanha a estrutura sintática e a dependência entre as instruções."
            },
            {
              "id": "html-m2-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre títulos e parágrafos?",
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
                  "text": "O elemento p representa um parágrafo de texto."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "c",
              "explanation": "Correto. O elemento p representa um parágrafo de texto.",
              "solution": "O elemento p representa um parágrafo de texto.",
              "required": true
            },
            {
              "id": "html-m2-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com títulos e parágrafos?",
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
                  "text": "Não pule níveis de título sem motivo. O CSS pode mudar o visual sem alterar a hierarquia semântica."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Não pule níveis de título sem motivo. O CSS pode mudar o visual sem alterar a hierarquia semântica.",
              "solution": "Não pule níveis de título sem motivo. O CSS pode mudar o visual sem alterar a hierarquia semântica.",
              "required": true
            },
            {
              "id": "html-m2-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre títulos e parágrafos?",
              "options": [
                {
                  "id": "a",
                  "text": "Compreender títulos e parágrafos."
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
              "explanation": "Correto. Compreender títulos e parágrafos.",
              "solution": "Compreender títulos e parágrafos.",
              "required": true
            }
          ]
        },
        {
          "id": "html-m2-l2",
          "title": "Links e navegação",
          "description": "Crie links claros entre páginas e destinos.",
          "minutes": 7,
          "kind": "practice",
          "objectives": [
            "Compreender links e navegação.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "O elemento a cria um link. O atributo href define o destino, que pode ser outra página, uma seção identificada por id ou um endereço externo. O texto do link deve deixar claro o que acontecerá ao ativá-lo."
          ],
          "example": {
            "language": "HTML",
            "code": "<a href=\"https://developer.mozilla.org/\">Consultar documentação</a>",
            "explanation": [
              "O navegador usa o valor de href como destino da navegação."
            ]
          },
          "commonMistake": "Evite links sem texto descritivo ou usar # sem um destino real quando a intenção é navegar.",
          "summary": [
            "Links e navegação",
            "O navegador usa o valor de href como destino da navegação."
          ],
          "exercises": [
            {
              "id": "html-m2-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual atributo indica o destino de um link?",
              "options": [
                {
                  "id": "a",
                  "text": "href"
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
              "explanation": "O navegador usa o valor de href como destino da navegação.",
              "solution": "href",
              "required": true
            },
            {
              "id": "html-m2-l2-e2",
              "type": "practical",
              "title": "Pratique o conceito",
              "required": true,
              "prompt": "Crie um link para uma página externa. Inclua um elemento a, o atributo href e um texto de link descritivo.",
              "requirements": [
                {
                  "label": "Inclua um elemento de link",
                  "anyOf": [
                    "<a "
                  ]
                },
                {
                  "label": "Defina o destino com href",
                  "contains": "href="
                },
                {
                  "label": "Feche o elemento de link",
                  "contains": "</a>"
                }
              ],
              "solution": "<a href=\"https://example.com\">Abrir o site de exemplo</a>",
              "explanation": "Compare sua solução com cada critério indicado. A correção desta tarefa verifica padrões definidos no conteúdo; o código JavaScript e C não é executado nesta versão.",
              "preview": "html"
            },
            {
              "id": "html-m2-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre links e navegação?",
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
                  "text": "O navegador usa o valor de href como destino da navegação."
                }
              ],
              "answer": "d",
              "explanation": "Correto. O navegador usa o valor de href como destino da navegação.",
              "solution": "O navegador usa o valor de href como destino da navegação.",
              "required": true
            },
            {
              "id": "html-m2-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com links e navegação?",
              "options": [
                {
                  "id": "a",
                  "text": "Evite links sem texto descritivo ou usar # sem um destino real quando a intenção é navegar."
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
              "explanation": "Correto. Evite links sem texto descritivo ou usar # sem um destino real quando a intenção é navegar.",
              "solution": "Evite links sem texto descritivo ou usar # sem um destino real quando a intenção é navegar.",
              "required": true
            },
            {
              "id": "html-m2-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre links e navegação?",
              "options": [
                {
                  "id": "a",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "b",
                  "text": "Compreender links e navegação."
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
              "explanation": "Correto. Compreender links e navegação.",
              "solution": "Compreender links e navegação.",
              "required": true
            }
          ]
        },
        {
          "id": "html-m2-l3",
          "title": "Imagens e texto alternativo",
          "description": "Inclua imagens com alternativas acessíveis.",
          "minutes": 7,
          "kind": "lesson",
          "objectives": [
            "Compreender imagens e texto alternativo.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "O elemento img incorpora uma imagem com o atributo src. O atributo alt fornece uma alternativa textual para leitores de tela e para situações em que a imagem não carrega. Imagens decorativas podem usar alt vazio."
          ],
          "example": {
            "language": "HTML",
            "code": "<img src=\"gato.jpg\" alt=\"Gato cinza sentado no sofá\">",
            "explanation": [
              "O atributo alt comunica o conteúdo ou a função da imagem quando ela não pode ser percebida visualmente."
            ]
          },
          "commonMistake": "Descreva o propósito ou o conteúdo relevante da imagem; não comece com “imagem de” sem necessidade.",
          "summary": [
            "Imagens e texto alternativo",
            "O atributo alt comunica o conteúdo ou a função da imagem quando ela não pode ser percebida visualmente."
          ],
          "exercises": [
            {
              "id": "html-m2-l3-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual atributo fornece uma alternativa textual à imagem?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "alt"
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
              "explanation": "O atributo alt comunica o conteúdo ou a função da imagem quando ela não pode ser percebida visualmente.",
              "solution": "alt",
              "required": true
            },
            {
              "id": "html-m2-l3-e2",
              "type": "code-reading",
              "title": "Leia o código",
              "required": true,
              "prompt": "Qual conceito a aula demonstra neste trecho?",
              "code": "<img src=\"gato.jpg\" alt=\"Gato cinza sentado no sofá\">",
              "options": [
                {
                  "id": "a",
                  "text": "O trecho serve apenas para apagar dados."
                },
                {
                  "id": "b",
                  "text": "Imagens e texto alternativo"
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
              "explanation": "O exemplo foi escolhido para ilustrar este conceito: imagens e texto alternativo",
              "solution": "Imagens e texto alternativo"
            },
            {
              "id": "html-m2-l3-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre imagens e texto alternativo?",
              "options": [
                {
                  "id": "a",
                  "text": "O atributo alt comunica o conteúdo ou a função da imagem quando ela não pode ser percebida visualmente."
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
              "explanation": "Correto. O atributo alt comunica o conteúdo ou a função da imagem quando ela não pode ser percebida visualmente.",
              "solution": "O atributo alt comunica o conteúdo ou a função da imagem quando ela não pode ser percebida visualmente.",
              "required": true
            },
            {
              "id": "html-m2-l3-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com imagens e texto alternativo?",
              "options": [
                {
                  "id": "a",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "b",
                  "text": "Descreva o propósito ou o conteúdo relevante da imagem; não comece com “imagem de” sem necessidade."
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
              "explanation": "Correto. Descreva o propósito ou o conteúdo relevante da imagem; não comece com “imagem de” sem necessidade.",
              "solution": "Descreva o propósito ou o conteúdo relevante da imagem; não comece com “imagem de” sem necessidade.",
              "required": true
            },
            {
              "id": "html-m2-l3-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre imagens e texto alternativo?",
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
                  "text": "Compreender imagens e texto alternativo."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Compreender imagens e texto alternativo.",
              "solution": "Compreender imagens e texto alternativo.",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "id": "html-m3",
      "title": "Estrutura semântica",
      "description": "Crie estruturas acessíveis e formulários.",
      "lessons": [
        {
          "id": "html-m3-l1",
          "title": "Listas ordenadas e não ordenadas",
          "description": "Represente conjuntos de itens com listas.",
          "minutes": 7,
          "kind": "lesson",
          "objectives": [
            "Compreender listas ordenadas e não ordenadas.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Use ul quando a ordem dos itens não for importante e ol quando existir uma sequência numerada. Cada item deve ficar dentro de li. Listas facilitam a leitura e dão estrutura ao conteúdo."
          ],
          "example": {
            "language": "HTML",
            "code": "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>",
            "explanation": [
              "O elemento li define um item dentro de uma lista ordenada ou não ordenada."
            ]
          },
          "commonMistake": "Não coloque itens soltos diretamente dentro de ul ou ol: envolva cada item com li.",
          "summary": [
            "Listas ordenadas e não ordenadas",
            "O elemento li define um item dentro de uma lista ordenada ou não ordenada."
          ],
          "exercises": [
            {
              "id": "html-m3-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual elemento representa cada item de uma lista?",
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
                  "text": "li"
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "c",
              "explanation": "O elemento li define um item dentro de uma lista ordenada ou não ordenada.",
              "solution": "li",
              "required": true
            },
            {
              "id": "html-m3-l1-e2",
              "type": "predict-output",
              "title": "Preveja o resultado",
              "required": true,
              "prompt": "Quais itens aparecem na lista, na ordem em que aparecem?",
              "code": "<ul><li>HTML</li><li>CSS</li></ul>",
              "answer": "HTML, CSS",
              "accepted": [
                "HTML, CSS"
              ],
              "explanation": "A lista apresenta os dois itens na ordem em que aparecem.",
              "solution": "HTML, CSS"
            },
            {
              "id": "html-m3-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre listas ordenadas e não ordenadas?",
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
                  "text": "O elemento li define um item dentro de uma lista ordenada ou não ordenada."
                }
              ],
              "answer": "d",
              "explanation": "Correto. O elemento li define um item dentro de uma lista ordenada ou não ordenada.",
              "solution": "O elemento li define um item dentro de uma lista ordenada ou não ordenada.",
              "required": true
            },
            {
              "id": "html-m3-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com listas ordenadas e não ordenadas?",
              "options": [
                {
                  "id": "a",
                  "text": "Não coloque itens soltos diretamente dentro de ul ou ol: envolva cada item com li."
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
              "explanation": "Correto. Não coloque itens soltos diretamente dentro de ul ou ol: envolva cada item com li.",
              "solution": "Não coloque itens soltos diretamente dentro de ul ou ol: envolva cada item com li.",
              "required": true
            },
            {
              "id": "html-m3-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre listas ordenadas e não ordenadas?",
              "options": [
                {
                  "id": "a",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "b",
                  "text": "Compreender listas ordenadas e não ordenadas."
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
              "explanation": "Correto. Compreender listas ordenadas e não ordenadas.",
              "solution": "Compreender listas ordenadas e não ordenadas.",
              "required": true
            }
          ]
        },
        {
          "id": "html-m3-l2",
          "title": "Mini projeto: estrutura semântica",
          "description": "Use elementos que expressem o significado das áreas da página.",
          "minutes": 7,
          "kind": "project",
          "objectives": [
            "Compreender mini projeto: estrutura semântica.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Elementos como header, nav, main, section, article e footer descrevem regiões com funções diferentes. A semântica torna a estrutura mais compreensível para pessoas, tecnologias assistivas e ferramentas de busca."
          ],
          "example": {
            "language": "HTML",
            "code": "<header><h1>Meu portal</h1></header>\n<main>\n  <article><h2>Notícia</h2><p>Texto...</p></article>\n</main>\n<footer>Contato</footer>",
            "explanation": [
              "O elemento main identifica o conteúdo principal e único daquela página."
            ]
          },
          "commonMistake": "Prefira o elemento semântico adequado a uma sequência de div sem significado específico.",
          "summary": [
            "Mini projeto: estrutura semântica",
            "O elemento main identifica o conteúdo principal e único daquela página."
          ],
          "exercises": [
            {
              "id": "html-m3-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual elemento indica o conteúdo principal da página?",
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
                  "text": "main"
                }
              ],
              "answer": "d",
              "explanation": "O elemento main identifica o conteúdo principal e único daquela página.",
              "solution": "main",
              "required": true
            },
            {
              "id": "html-m3-l2-e2",
              "type": "fill-code",
              "title": "Complete o trecho",
              "required": true,
              "prompt": "Substitua ___ pela parte que completa corretamente o código. Digite apenas o trecho ausente.",
              "code": "<___>Conteúdo principal</main>",
              "answer": "main",
              "accepted": [
                "main"
              ],
              "explanation": "O trecho correto é main; ele completa a sintaxe mostrada.",
              "solution": "main"
            },
            {
              "id": "html-m3-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre mini projeto: estrutura semântica?",
              "options": [
                {
                  "id": "a",
                  "text": "O elemento main identifica o conteúdo principal e único daquela página."
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
              "explanation": "Correto. O elemento main identifica o conteúdo principal e único daquela página.",
              "solution": "O elemento main identifica o conteúdo principal e único daquela página.",
              "required": true
            },
            {
              "id": "html-m3-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com mini projeto: estrutura semântica?",
              "options": [
                {
                  "id": "a",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "b",
                  "text": "Prefira o elemento semântico adequado a uma sequência de div sem significado específico."
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
              "explanation": "Correto. Prefira o elemento semântico adequado a uma sequência de div sem significado específico.",
              "solution": "Prefira o elemento semântico adequado a uma sequência de div sem significado específico.",
              "required": true
            },
            {
              "id": "html-m3-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre mini projeto: estrutura semântica?",
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
                  "text": "Compreender mini projeto: estrutura semântica."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Compreender mini projeto: estrutura semântica.",
              "solution": "Compreender mini projeto: estrutura semântica.",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "id": "html-m4",
      "title": "Projeto guiado",
      "description": "Combine os conceitos em uma página própria.",
      "lessons": [
        {
          "id": "html-m4-l1",
          "title": "Formulários acessíveis",
          "description": "Colete informações com campos rotulados.",
          "minutes": 7,
          "kind": "lesson",
          "objectives": [
            "Compreender formulários acessíveis.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Formulários usam form e controles como input, select e textarea. Associe cada campo a um label por meio de for/id ou envolvendo o controle. O atributo type define o tipo de entrada e required pode marcar um campo obrigatório."
          ],
          "example": {
            "language": "HTML",
            "code": "<form>\n  <label for=\"email\">E-mail</label>\n  <input id=\"email\" name=\"email\" type=\"email\" required>\n  <button type=\"submit\">Enviar</button>\n</form>",
            "explanation": [
              "O valor do atributo for do label deve corresponder ao id do controle."
            ]
          },
          "commonMistake": "Placeholder não substitui um label visível: o texto do campo pode desaparecer quando a pessoa começa a digitar.",
          "summary": [
            "Formulários acessíveis",
            "O valor do atributo for do label deve corresponder ao id do controle."
          ],
          "exercises": [
            {
              "id": "html-m4-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Como associar explicitamente um label ao input?",
              "options": [
                {
                  "id": "a",
                  "text": "Usar for no label com o mesmo valor de id no input"
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
              "explanation": "O valor do atributo for do label deve corresponder ao id do controle.",
              "solution": "Usar for no label com o mesmo valor de id no input",
              "required": true
            },
            {
              "id": "html-m4-l1-e2",
              "type": "ordering",
              "title": "Coloque em ordem",
              "required": true,
              "prompt": "Use os botões para colocar as instruções em uma sequência válida.",
              "items": [
                {
                  "id": "form",
                  "text": "<form>"
                },
                {
                  "id": "label",
                  "text": "<label for=\"nome\">Nome</label>"
                },
                {
                  "id": "input",
                  "text": "<input id=\"nome\" name=\"nome\">"
                },
                {
                  "id": "button",
                  "text": "<button type=\"submit\">Enviar</button>"
                },
                {
                  "id": "end",
                  "text": "</form>"
                }
              ],
              "answerOrder": [
                "form",
                "label",
                "input",
                "button",
                "end"
              ],
              "solution": "<form>\n<label for=\"nome\">Nome</label>\n<input id=\"nome\" name=\"nome\">\n<button type=\"submit\">Enviar</button>\n</form>",
              "explanation": "A ordem correta acompanha a estrutura sintática e a dependência entre as instruções."
            },
            {
              "id": "html-m4-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre formulários acessíveis?",
              "options": [
                {
                  "id": "a",
                  "text": "O valor do atributo for do label deve corresponder ao id do controle."
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
              "explanation": "Correto. O valor do atributo for do label deve corresponder ao id do controle.",
              "solution": "O valor do atributo for do label deve corresponder ao id do controle.",
              "required": true
            },
            {
              "id": "html-m4-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com formulários acessíveis?",
              "options": [
                {
                  "id": "a",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "b",
                  "text": "Placeholder não substitui um label visível: o texto do campo pode desaparecer quando a pessoa começa a digitar."
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
              "explanation": "Correto. Placeholder não substitui um label visível: o texto do campo pode desaparecer quando a pessoa começa a digitar.",
              "solution": "Placeholder não substitui um label visível: o texto do campo pode desaparecer quando a pessoa começa a digitar.",
              "required": true
            },
            {
              "id": "html-m4-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre formulários acessíveis?",
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
                  "text": "Compreender formulários acessíveis."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Compreender formulários acessíveis.",
              "solution": "Compreender formulários acessíveis.",
              "required": true
            }
          ]
        },
        {
          "id": "html-m4-l2",
          "title": "Projeto: página de perfil",
          "description": "Combine estrutura, texto, links e imagem em uma página simples.",
          "minutes": 12,
          "kind": "project",
          "objectives": [
            "Planejar a estrutura do projeto.",
            "Combinar os conceitos vistos na trilha.",
            "Revisar o resultado com critérios verificáveis."
          ],
          "content": [
            "Neste projeto, crie uma página de perfil organizada por áreas. Use um título principal, uma apresentação, uma lista de interesses e um link de contato. O objetivo é combinar elementos que você já conhece, com estrutura válida e textos claros."
          ],
          "example": {
            "language": "HTML",
            "code": "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head><meta charset=\"UTF-8\"><title>Meu perfil</title></head>\n<body>\n  <main>\n    <h1>Meu perfil</h1>\n    <p>Estou estudando desenvolvimento web.</p>\n    <ul><li>HTML</li><li>CSS</li></ul>\n    <a href=\"mailto:contato@example.com\">Fale comigo</a>\n  </main>\n</body>\n</html>",
            "explanation": [
              "Uma estrutura clara facilita a leitura e torna a estilização posterior mais simples."
            ]
          },
          "commonMistake": "Revise o aninhamento das tags e confira se cada elemento aberto foi fechado corretamente.",
          "summary": [
            "Projeto: página de perfil",
            "Uma estrutura clara facilita a leitura e torna a estilização posterior mais simples."
          ],
          "exercises": [
            {
              "id": "html-m4-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual é uma boa primeira etapa para organizar essa página?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "Definir o conteúdo e a hierarquia antes de estilizar"
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
              "explanation": "Uma estrutura clara facilita a leitura e torna a estilização posterior mais simples.",
              "solution": "Definir o conteúdo e a hierarquia antes de estilizar",
              "required": true
            },
            {
              "id": "html-m4-l2-e2",
              "type": "practical",
              "title": "Pratique o conceito",
              "required": true,
              "prompt": "Monte uma página de perfil com estrutura de documento, título principal e um parágrafo de apresentação.",
              "requirements": [
                {
                  "label": "Inclua a declaração de documento",
                  "anyOf": [
                    "<!doctype html>"
                  ]
                },
                {
                  "label": "Inclua um título principal",
                  "anyOf": [
                    "<h1"
                  ]
                },
                {
                  "label": "Inclua um parágrafo",
                  "anyOf": [
                    "<p"
                  ]
                },
                {
                  "label": "Inclua um contêiner principal semântico",
                  "anyOf": [
                    "<main"
                  ]
                }
              ],
              "solution": "<!DOCTYPE html>\n<html lang=\"pt-BR\"><head><meta charset=\"UTF-8\"><title>Meu perfil</title></head><body><main><h1>Meu perfil</h1><p>Estou aprendendo HTML.</p></main></body></html>",
              "explanation": "Compare sua solução com cada critério indicado. A correção desta tarefa verifica padrões definidos no conteúdo; o código JavaScript e C não é executado nesta versão.",
              "preview": "html"
            },
            {
              "id": "html-m4-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre projeto: página de perfil?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "Uma estrutura clara facilita a leitura e torna a estilização posterior mais simples."
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
              "explanation": "Correto. Uma estrutura clara facilita a leitura e torna a estilização posterior mais simples.",
              "solution": "Uma estrutura clara facilita a leitura e torna a estilização posterior mais simples.",
              "required": true
            },
            {
              "id": "html-m4-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com projeto: página de perfil?",
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
                  "text": "Revise o aninhamento das tags e confira se cada elemento aberto foi fechado corretamente."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Revise o aninhamento das tags e confira se cada elemento aberto foi fechado corretamente.",
              "solution": "Revise o aninhamento das tags e confira se cada elemento aberto foi fechado corretamente.",
              "required": true
            },
            {
              "id": "html-m4-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre projeto: página de perfil?",
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

(window.LORDCODE_COURSES = window.LORDCODE_COURSES || []).push({
  "id": "c",
  "title": "C",
  "description": "Estude os fundamentos de C com exemplos de entrada, saída, decisões e repetição.",
  "color": "#93a9c5",
  "level": "Iniciante",
  "modules": [
    {
      "id": "c-m1",
      "title": "Primeiro programa",
      "description": "Conheça a estrutura de um programa em C.",
      "lessons": [
        {
          "id": "c-m1-l1",
          "title": "Conhecendo a linguagem C",
          "description": "Entenda a estrutura geral de um programa em C.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender conhecendo a linguagem c.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "C é uma linguagem compilada e muito usada para estudar fundamentos de programação e sistemas. Um programa é escrito em arquivo-fonte, compilado e então executado. Nesta plataforma, os exemplos são estudados por interpretação; o navegador não compila nem executa código C."
          ],
          "example": {
            "language": "C",
            "code": "int main(void) {\n    printf(\"Olá, mundo!\\n\");\n    return 0;\n}",
            "explanation": [
              "A execução de um programa C normalmente começa pela função main."
            ]
          },
          "commonMistake": "A função main é o ponto de entrada comum de um programa C. Para usar printf, inclua stdio.h.",
          "summary": [
            "Conhecendo a linguagem C",
            "A execução de um programa C normalmente começa pela função main."
          ],
          "exercises": [
            {
              "id": "c-m1-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual é a função principal que inicia o programa em C?",
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
              "explanation": "A execução de um programa C normalmente começa pela função main.",
              "solution": "main",
              "required": true
            },
            {
              "id": "c-m1-l1-e2",
              "type": "code-reading",
              "title": "Leia o código",
              "required": true,
              "prompt": "Qual conceito a aula demonstra neste trecho?",
              "code": "int main(void) {\n    printf(\"Olá, mundo!\\n\");\n    return 0;\n}",
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
                  "text": "Conhecendo a linguagem C"
                }
              ],
              "answer": "d",
              "explanation": "O exemplo foi escolhido para ilustrar este conceito: conhecendo a linguagem C",
              "solution": "Conhecendo a linguagem C"
            },
            {
              "id": "c-m1-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre conhecendo a linguagem c?",
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
                  "text": "A execução de um programa C normalmente começa pela função main."
                }
              ],
              "answer": "d",
              "explanation": "Correto. A execução de um programa C normalmente começa pela função main.",
              "solution": "A execução de um programa C normalmente começa pela função main.",
              "required": true
            },
            {
              "id": "c-m1-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com conhecendo a linguagem c?",
              "options": [
                {
                  "id": "a",
                  "text": "A função main é o ponto de entrada comum de um programa C. Para usar printf, inclua stdio.h."
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
              "explanation": "Correto. A função main é o ponto de entrada comum de um programa C. Para usar printf, inclua stdio.h.",
              "solution": "A função main é o ponto de entrada comum de um programa C. Para usar printf, inclua stdio.h.",
              "required": true
            },
            {
              "id": "c-m1-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre conhecendo a linguagem c?",
              "options": [
                {
                  "id": "a",
                  "text": "Memorizar todo o código sem compreender o que cada parte faz."
                },
                {
                  "id": "b",
                  "text": "Compreender conhecendo a linguagem c."
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
              "explanation": "Correto. Compreender conhecendo a linguagem c.",
              "solution": "Compreender conhecendo a linguagem c.",
              "required": true
            }
          ]
        },
        {
          "id": "c-m1-l2",
          "title": "Estrutura e saída com printf",
          "description": "Organize a função main e imprima uma mensagem.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender estrutura e saída com printf.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Um programa básico inclui cabeçalhos necessários, define main e coloca instruções dentro de chaves. printf, declarado em stdio.h, envia texto formatado para a saída padrão. O ponto e vírgula encerra a instrução."
          ],
          "example": {
            "language": "C",
            "code": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Olá, mundo!\\n\");\n    return 0;\n}",
            "explanation": [
              "printf imprime o texto indicado; \\n move o cursor para a linha seguinte."
            ]
          },
          "commonMistake": "O caractere de escape \\n cria uma quebra de linha na saída; ele não é o mesmo que digitar duas letras soltas.",
          "summary": [
            "Estrutura e saída com printf",
            "printf imprime o texto indicado; \\n move o cursor para a linha seguinte."
          ],
          "exercises": [
            {
              "id": "c-m1-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "O que printf(\"Olá, mundo!\\n\") exibe?",
              "options": [
                {
                  "id": "a",
                  "text": "Olá, mundo! em uma linha, terminando com quebra de linha"
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
              "explanation": "printf imprime o texto indicado; \\n move o cursor para a linha seguinte.",
              "solution": "Olá, mundo! em uma linha, terminando com quebra de linha",
              "required": true
            },
            {
              "id": "c-m1-l2-e2",
              "type": "predict-output",
              "title": "Preveja o resultado",
              "required": true,
              "prompt": "Qual é a saída esperada do trecho? Responda com o resultado, sem aspas externas desnecessárias.",
              "code": "printf(\"Olá, mundo!\\n\");",
              "answer": "Olá, mundo!",
              "accepted": [
                "Olá, mundo!"
              ],
              "explanation": "printf imprime a mensagem indicada; a quebra de linha move a saída para a linha seguinte.",
              "solution": "Olá, mundo!"
            },
            {
              "id": "c-m1-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre estrutura e saída com printf?",
              "options": [
                {
                  "id": "a",
                  "text": "printf imprime o texto indicado; \\n move o cursor para a linha seguinte."
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
              "explanation": "Correto. printf imprime o texto indicado; \\n move o cursor para a linha seguinte.",
              "solution": "printf imprime o texto indicado; \\n move o cursor para a linha seguinte.",
              "required": true
            },
            {
              "id": "c-m1-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com estrutura e saída com printf?",
              "options": [
                {
                  "id": "a",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "b",
                  "text": "O caractere de escape \\n cria uma quebra de linha na saída; ele não é o mesmo que digitar duas letras soltas."
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
              "explanation": "Correto. O caractere de escape \\n cria uma quebra de linha na saída; ele não é o mesmo que digitar duas letras soltas.",
              "solution": "O caractere de escape \\n cria uma quebra de linha na saída; ele não é o mesmo que digitar duas letras soltas.",
              "required": true
            },
            {
              "id": "c-m1-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre estrutura e saída com printf?",
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
                  "text": "Compreender estrutura e saída com printf."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Compreender estrutura e saída com printf.",
              "solution": "Compreender estrutura e saída com printf.",
              "required": true
            }
          ]
        },
        {
          "id": "c-m1-l3",
          "title": "Variáveis e tipos básicos",
          "description": "Declare variáveis adequadas para números e caracteres.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender variáveis e tipos básicos.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Uma variável possui tipo, nome e valor. int costuma guardar números inteiros; float e double guardam números com parte decimal; char guarda um caractere. Declare a variável antes de usá-la e inicialize-a quando já conhecer seu valor."
          ],
          "example": {
            "language": "C",
            "code": "int idade = 16;\nfloat media = 8.5f;\nchar turma = 'A';",
            "explanation": [
              "int é o tipo inteiro básico da linguagem C."
            ]
          },
          "commonMistake": "O tipo da variável influencia quais valores podem ser guardados e como devem ser lidos ou exibidos.",
          "summary": [
            "Variáveis e tipos básicos",
            "int é o tipo inteiro básico da linguagem C."
          ],
          "exercises": [
            {
              "id": "c-m1-l3-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual tipo é apropriado para um número inteiro?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "int"
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
              "explanation": "int é o tipo inteiro básico da linguagem C.",
              "solution": "int",
              "required": true
            },
            {
              "id": "c-m1-l3-e2",
              "type": "fill-code",
              "title": "Complete o trecho",
              "required": true,
              "prompt": "Substitua ___ pela parte que completa corretamente o código. Digite apenas o trecho ausente.",
              "code": "printf(___);",
              "answer": "\"Olá\"",
              "accepted": [
                "\"Olá\"",
                "\"Olá\\n\""
              ],
              "explanation": "O trecho correto é \"Olá\"; ele completa a sintaxe mostrada.",
              "solution": "\"Olá\""
            },
            {
              "id": "c-m1-l3-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre variáveis e tipos básicos?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "int é o tipo inteiro básico da linguagem C."
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
              "explanation": "Correto. int é o tipo inteiro básico da linguagem C.",
              "solution": "int é o tipo inteiro básico da linguagem C.",
              "required": true
            },
            {
              "id": "c-m1-l3-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com variáveis e tipos básicos?",
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
                  "text": "O tipo da variável influencia quais valores podem ser guardados e como devem ser lidos ou exibidos."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "c",
              "explanation": "Correto. O tipo da variável influencia quais valores podem ser guardados e como devem ser lidos ou exibidos.",
              "solution": "O tipo da variável influencia quais valores podem ser guardados e como devem ser lidos ou exibidos.",
              "required": true
            },
            {
              "id": "c-m1-l3-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre variáveis e tipos básicos?",
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
                  "text": "Compreender variáveis e tipos básicos."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Compreender variáveis e tipos básicos.",
              "solution": "Compreender variáveis e tipos básicos.",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "id": "c-m2",
      "title": "Dados e decisões",
      "description": "Leia dados e tome decisões.",
      "lessons": [
        {
          "id": "c-m2-l1",
          "title": "Operadores e expressões",
          "description": "Realize operações e compreenda a ordem das expressões.",
          "minutes": 5,
          "kind": "lesson",
          "objectives": [
            "Compreender operadores e expressões.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "C oferece operadores aritméticos como +, -, * e /. O operador % calcula o resto da divisão inteira. A precedência define a ordem das operações; parênteses podem explicitar a intenção."
          ],
          "example": {
            "language": "C",
            "code": "int a = 7;\nint b = 2;\nprintf(\"%d\\n\", a + b);\nprintf(\"%d\\n\", a % b);",
            "explanation": [
              "O resto da divisão inteira de 7 por 2 é 1."
            ]
          },
          "commonMistake": "O operador % é usado com operandos inteiros. Para médias decimais, escolha um tipo de ponto flutuante e cuide da divisão.",
          "summary": [
            "Operadores e expressões",
            "O resto da divisão inteira de 7 por 2 é 1."
          ],
          "exercises": [
            {
              "id": "c-m2-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual é o resultado de 7 % 2 em C?",
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
                  "text": "1"
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "c",
              "explanation": "O resto da divisão inteira de 7 por 2 é 1.",
              "solution": "1",
              "required": true
            },
            {
              "id": "c-m2-l1-e2",
              "type": "ordering",
              "title": "Coloque em ordem",
              "required": true,
              "prompt": "Use os botões para colocar as instruções em uma sequência válida.",
              "items": [
                {
                  "id": "include",
                  "text": "#include <stdio.h>"
                },
                {
                  "id": "main",
                  "text": "int main(void) {"
                },
                {
                  "id": "print",
                  "text": "printf(\"Olá\\n\");"
                },
                {
                  "id": "return",
                  "text": "return 0;"
                },
                {
                  "id": "close",
                  "text": "}"
                }
              ],
              "answerOrder": [
                "include",
                "main",
                "print",
                "return",
                "close"
              ],
              "solution": "#include <stdio.h>\nint main(void) {\nprintf(\"Olá\\n\");\nreturn 0;\n}",
              "explanation": "A ordem correta acompanha a estrutura sintática e a dependência entre as instruções."
            },
            {
              "id": "c-m2-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre operadores e expressões?",
              "options": [
                {
                  "id": "a",
                  "text": "O resto da divisão inteira de 7 por 2 é 1."
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
              "explanation": "Correto. O resto da divisão inteira de 7 por 2 é 1.",
              "solution": "O resto da divisão inteira de 7 por 2 é 1.",
              "required": true
            },
            {
              "id": "c-m2-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com operadores e expressões?",
              "options": [
                {
                  "id": "a",
                  "text": "Ignorar mensagens de erro e continuar sem revisar o resultado."
                },
                {
                  "id": "b",
                  "text": "O operador % é usado com operandos inteiros. Para médias decimais, escolha um tipo de ponto flutuante e cuide da divisão."
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
              "explanation": "Correto. O operador % é usado com operandos inteiros. Para médias decimais, escolha um tipo de ponto flutuante e cuide da divisão.",
              "solution": "O operador % é usado com operandos inteiros. Para médias decimais, escolha um tipo de ponto flutuante e cuide da divisão.",
              "required": true
            },
            {
              "id": "c-m2-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre operadores e expressões?",
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
                  "text": "Compreender operadores e expressões."
                },
                {
                  "id": "d",
                  "text": "Evitar exemplos para não precisar aplicar o conceito."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Compreender operadores e expressões.",
              "solution": "Compreender operadores e expressões.",
              "required": true
            }
          ]
        },
        {
          "id": "c-m2-l2",
          "title": "Entrada de dados com scanf",
          "description": "Leia valores digitados e armazene-os em variáveis.",
          "minutes": 7,
          "kind": "practice",
          "objectives": [
            "Compreender entrada de dados com scanf.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "scanf lê dados formatados da entrada padrão. O especificador %d lê um int e %f lê um float. Em usos básicos com variáveis comuns, informe o endereço da variável usando &."
          ],
          "example": {
            "language": "C",
            "code": "int idade;\nprintf(\"Digite sua idade: \");\nscanf(\"%d\", &idade);",
            "explanation": [
              "O operador & obtém o endereço da variável para que scanf possa escrever o valor nela."
            ]
          },
          "commonMistake": "Combine o especificador de formato com o tipo da variável e verifique se o dado foi lido com sucesso em programas mais robustos.",
          "summary": [
            "Entrada de dados com scanf",
            "O operador & obtém o endereço da variável para que scanf possa escrever o valor nela."
          ],
          "exercises": [
            {
              "id": "c-m2-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Por que scanf(\"%d\", &idade) usa &idade?",
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
                  "text": "Para passar o endereço onde o valor lido será armazenado"
                }
              ],
              "answer": "d",
              "explanation": "O operador & obtém o endereço da variável para que scanf possa escrever o valor nela.",
              "solution": "Para passar o endereço onde o valor lido será armazenado",
              "required": true
            },
            {
              "id": "c-m2-l2-e2",
              "type": "practical",
              "title": "Pratique o conceito",
              "required": true,
              "prompt": "Escreva um exemplo que leia um inteiro com scanf e mostre uma mensagem com printf.",
              "requirements": [
                {
                  "label": "Leia um inteiro com scanf",
                  "contains": "scanf"
                },
                {
                  "label": "Use o especificador %d",
                  "contains": "%d"
                },
                {
                  "label": "Mostre uma mensagem com printf",
                  "contains": "printf"
                }
              ],
              "solution": "#include <stdio.h>\nint main(void) {\n  int idade;\n  scanf(\"%d\", &idade);\n  printf(\"Idade: %d\\n\", idade);\n  return 0;\n}",
              "explanation": "Compare sua solução com cada critério indicado. A correção desta tarefa verifica padrões definidos no conteúdo; o código JavaScript e C não é executado nesta versão."
            },
            {
              "id": "c-m2-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre entrada de dados com scanf?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "O operador & obtém o endereço da variável para que scanf possa escrever o valor nela."
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
              "explanation": "Correto. O operador & obtém o endereço da variável para que scanf possa escrever o valor nela.",
              "solution": "O operador & obtém o endereço da variável para que scanf possa escrever o valor nela.",
              "required": true
            },
            {
              "id": "c-m2-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com entrada de dados com scanf?",
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
                  "text": "Combine o especificador de formato com o tipo da variável e verifique se o dado foi lido com sucesso em programas mais robustos."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Combine o especificador de formato com o tipo da variável e verifique se o dado foi lido com sucesso em programas mais robustos.",
              "solution": "Combine o especificador de formato com o tipo da variável e verifique se o dado foi lido com sucesso em programas mais robustos.",
              "required": true
            },
            {
              "id": "c-m2-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre entrada de dados com scanf?",
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
                  "text": "Compreender entrada de dados com scanf."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Compreender entrada de dados com scanf.",
              "solution": "Compreender entrada de dados com scanf.",
              "required": true
            }
          ]
        },
        {
          "id": "c-m2-l3",
          "title": "Decisões com if e else",
          "description": "Escolha o caminho do programa com base em uma condição.",
          "minutes": 7,
          "kind": "lesson",
          "objectives": [
            "Compreender decisões com if e else.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "if executa um bloco quando a expressão é diferente de zero (verdadeira). else define o caminho alternativo. Operadores relacionais como >=, < e == permitem comparar valores. Em C, == compara igualdade; = atribui um valor."
          ],
          "example": {
            "language": "C",
            "code": "if (nota >= 6.0f) {\n    printf(\"Aprovado\\n\");\n} else {\n    printf(\"Em recuperação\\n\");\n}",
            "explanation": [
              "O operador == verifica igualdade; um único = realiza atribuição."
            ]
          },
          "commonMistake": "Não confunda =, que atribui, com ==, que compara igualdade.",
          "summary": [
            "Decisões com if e else",
            "O operador == verifica igualdade; um único = realiza atribuição."
          ],
          "exercises": [
            {
              "id": "c-m2-l3-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual operador compara se dois valores são iguais em C?",
              "options": [
                {
                  "id": "a",
                  "text": "=="
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
              "explanation": "O operador == verifica igualdade; um único = realiza atribuição.",
              "solution": "==",
              "required": true
            },
            {
              "id": "c-m2-l3-e2",
              "type": "code-reading",
              "title": "Leia o código",
              "required": true,
              "prompt": "Qual conceito a aula demonstra neste trecho?",
              "code": "if (nota >= 6.0f) {\n    printf(\"Aprovado\\n\");\n} else {\n    printf(\"Em recuperação\\n\");\n}",
              "options": [
                {
                  "id": "a",
                  "text": "Decisões com if e else"
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
              "explanation": "O exemplo foi escolhido para ilustrar este conceito: decisões com if e else",
              "solution": "Decisões com if e else"
            },
            {
              "id": "c-m2-l3-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre decisões com if e else?",
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
                  "text": "O operador == verifica igualdade; um único = realiza atribuição."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "c",
              "explanation": "Correto. O operador == verifica igualdade; um único = realiza atribuição.",
              "solution": "O operador == verifica igualdade; um único = realiza atribuição.",
              "required": true
            },
            {
              "id": "c-m2-l3-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com decisões com if e else?",
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
                  "text": "Não confunda =, que atribui, com ==, que compara igualdade."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Não confunda =, que atribui, com ==, que compara igualdade.",
              "solution": "Não confunda =, que atribui, com ==, que compara igualdade.",
              "required": true
            },
            {
              "id": "c-m2-l3-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre decisões com if e else?",
              "options": [
                {
                  "id": "a",
                  "text": "Compreender decisões com if e else."
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
              "explanation": "Correto. Compreender decisões com if e else.",
              "solution": "Compreender decisões com if e else.",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "id": "c-m3",
      "title": "Repetições e funções",
      "description": "Repita operações e organize funções.",
      "lessons": [
        {
          "id": "c-m3-l1",
          "title": "Repetição com for e while",
          "description": "Repita instruções com contadores e condições.",
          "minutes": 7,
          "kind": "lesson",
          "objectives": [
            "Compreender repetição com for e while.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "for combina inicialização, condição e atualização em uma linha. while verifica a condição antes de cada repetição. Atualize o contador ou mude a condição dentro do laço para que a repetição possa terminar."
          ],
          "example": {
            "language": "C",
            "code": "for (int i = 1; i <= 3; i++) {\n    printf(\"%d\\n\", i);\n}",
            "explanation": [
              "O contador assume 1, 2 e 3; depois disso a condição i <= 3 é falsa."
            ]
          },
          "commonMistake": "Um laço infinito pode ocorrer se a condição permanecer verdadeira. Confira o valor inicial, o limite e a atualização.",
          "summary": [
            "Repetição com for e while",
            "O contador assume 1, 2 e 3; depois disso a condição i <= 3 é falsa."
          ],
          "exercises": [
            {
              "id": "c-m3-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Quantos números são impressos pelo laço de 1 até 3?",
              "options": [
                {
                  "id": "a",
                  "text": "Executar uma tarefa que não tem relação com o conteúdo da aula."
                },
                {
                  "id": "b",
                  "text": "3"
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
              "explanation": "O contador assume 1, 2 e 3; depois disso a condição i <= 3 é falsa.",
              "solution": "3",
              "required": true
            },
            {
              "id": "c-m3-l1-e2",
              "type": "predict-output",
              "title": "Preveja o resultado",
              "required": true,
              "prompt": "Qual valor será enviado para a saída pelo especificador %d?",
              "code": "int valores[] = {4, 7, 9};\nprintf(\"%d\", valores[1]);",
              "answer": "7",
              "accepted": [
                "7"
              ],
              "explanation": "Os índices dos arrays em C começam em zero; valores[1] é o segundo item.",
              "solution": "7"
            },
            {
              "id": "c-m3-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre repetição com for e while?",
              "options": [
                {
                  "id": "a",
                  "text": "Não é necessário conferir a sintaxe nem os valores utilizados."
                },
                {
                  "id": "b",
                  "text": "O contador assume 1, 2 e 3; depois disso a condição i <= 3 é falsa."
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
              "explanation": "Correto. O contador assume 1, 2 e 3; depois disso a condição i <= 3 é falsa.",
              "solution": "O contador assume 1, 2 e 3; depois disso a condição i <= 3 é falsa.",
              "required": true
            },
            {
              "id": "c-m3-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com repetição com for e while?",
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
                  "text": "Um laço infinito pode ocorrer se a condição permanecer verdadeira. Confira o valor inicial, o limite e a atualização."
                },
                {
                  "id": "d",
                  "text": "Evitar testar o código em exemplos diferentes."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Um laço infinito pode ocorrer se a condição permanecer verdadeira. Confira o valor inicial, o limite e a atualização.",
              "solution": "Um laço infinito pode ocorrer se a condição permanecer verdadeira. Confira o valor inicial, o limite e a atualização.",
              "required": true
            },
            {
              "id": "c-m3-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre repetição com for e while?",
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
                  "text": "Compreender repetição com for e while."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Compreender repetição com for e while.",
              "solution": "Compreender repetição com for e while.",
              "required": true
            }
          ]
        },
        {
          "id": "c-m3-l2",
          "title": "Mini projeto: função de cálculo",
          "description": "Separe tarefas em funções que podem ser reutilizadas.",
          "minutes": 7,
          "kind": "project",
          "objectives": [
            "Compreender mini projeto: função de cálculo.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Uma função declara um tipo de retorno, um nome, parâmetros e um corpo. A função pode receber valores, processá-los e devolver um resultado com return. Use protótipos quando precisar declarar uma função antes de sua definição."
          ],
          "example": {
            "language": "C",
            "code": "int somar(int a, int b) {\n    return a + b;\n}\n\nint main(void) {\n    printf(\"%d\\n\", somar(2, 3));\n    return 0;\n}",
            "explanation": [
              "A expressão após return fornece o resultado que a função devolve."
            ]
          },
          "commonMistake": "O tipo de retorno deve combinar com o valor devolvido. Uma função void não retorna um valor comum.",
          "summary": [
            "Mini projeto: função de cálculo",
            "A expressão após return fornece o resultado que a função devolve."
          ],
          "exercises": [
            {
              "id": "c-m3-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual é a responsabilidade de return em uma função int?",
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
                  "text": "Devolver um valor inteiro ao ponto de chamada"
                },
                {
                  "id": "d",
                  "text": "Definir somente o nome do arquivo, sem alterar seu comportamento."
                }
              ],
              "answer": "c",
              "explanation": "A expressão após return fornece o resultado que a função devolve.",
              "solution": "Devolver um valor inteiro ao ponto de chamada",
              "required": true
            },
            {
              "id": "c-m3-l2-e2",
              "type": "fill-code",
              "title": "Complete o trecho",
              "required": true,
              "prompt": "Substitua ___ pela parte que completa corretamente o código. Digite apenas o trecho ausente.",
              "code": "int soma = 2 ___ 3;",
              "answer": "+",
              "accepted": [
                "+"
              ],
              "explanation": "O trecho correto é +; ele completa a sintaxe mostrada.",
              "solution": "+"
            },
            {
              "id": "c-m3-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre mini projeto: função de cálculo?",
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
                  "text": "A expressão após return fornece o resultado que a função devolve."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "c",
              "explanation": "Correto. A expressão após return fornece o resultado que a função devolve.",
              "solution": "A expressão após return fornece o resultado que a função devolve.",
              "required": true
            },
            {
              "id": "c-m3-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com mini projeto: função de cálculo?",
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
                  "text": "O tipo de retorno deve combinar com o valor devolvido. Uma função void não retorna um valor comum."
                }
              ],
              "answer": "d",
              "explanation": "Correto. O tipo de retorno deve combinar com o valor devolvido. Uma função void não retorna um valor comum.",
              "solution": "O tipo de retorno deve combinar com o valor devolvido. Uma função void não retorna um valor comum.",
              "required": true
            },
            {
              "id": "c-m3-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre mini projeto: função de cálculo?",
              "options": [
                {
                  "id": "a",
                  "text": "Compreender mini projeto: função de cálculo."
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
              "explanation": "Correto. Compreender mini projeto: função de cálculo.",
              "solution": "Compreender mini projeto: função de cálculo.",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "id": "c-m4",
      "title": "Projeto guiado",
      "description": "Combine entrada, cálculo e saída.",
      "lessons": [
        {
          "id": "c-m4-l1",
          "title": "Contadores, acumuladores e médias",
          "description": "Some valores e calcule resultados com variáveis acumuladoras.",
          "minutes": 7,
          "kind": "lesson",
          "objectives": [
            "Compreender contadores, acumuladores e médias.",
            "Identificar a função dos elementos ou instruções apresentados.",
            "Aplicar o conceito em um exemplo simples."
          ],
          "content": [
            "Um contador registra quantas vezes algo acontece; um acumulador guarda uma soma progressiva. Inicialize o acumulador antes do laço. Para calcular média decimal, faça a divisão usando ponto flutuante, não apenas inteiros."
          ],
          "example": {
            "language": "C",
            "code": "int soma = 0;\nfor (int i = 1; i <= 3; i++) {\n    soma += i;\n}\nprintf(\"Soma: %d\\n\", soma);",
            "explanation": [
              "Um acumulador precisa começar em um valor conhecido para que a soma não dependa de memória indefinida."
            ]
          },
          "commonMistake": "Se dividir dois inteiros, a parte fracionária pode ser descartada. Converta um operando para float ou double quando a média precisar de decimais.",
          "summary": [
            "Contadores, acumuladores e médias",
            "Um acumulador precisa começar em um valor conhecido para que a soma não dependa de memória indefinida."
          ],
          "exercises": [
            {
              "id": "c-m4-l1-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Por que iniciar soma com zero antes do laço?",
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
                  "text": "Para ter um valor inicial definido antes de acumular"
                }
              ],
              "answer": "d",
              "explanation": "Um acumulador precisa começar em um valor conhecido para que a soma não dependa de memória indefinida.",
              "solution": "Para ter um valor inicial definido antes de acumular",
              "required": true
            },
            {
              "id": "c-m4-l1-e2",
              "type": "ordering",
              "title": "Coloque em ordem",
              "required": true,
              "prompt": "Use os botões para colocar as instruções em uma sequência válida.",
              "items": [
                {
                  "id": "read",
                  "text": "scanf(\"%d\", &idade);"
                },
                {
                  "id": "condition",
                  "text": "if (idade >= 18) {"
                },
                {
                  "id": "message",
                  "text": "printf(\"Maior de idade\\n\");"
                },
                {
                  "id": "close",
                  "text": "}"
                }
              ],
              "answerOrder": [
                "read",
                "condition",
                "message",
                "close"
              ],
              "solution": "scanf(\"%d\", &idade);\nif (idade >= 18) {\nprintf(\"Maior de idade\\n\");\n}",
              "explanation": "A ordem correta acompanha a estrutura sintática e a dependência entre as instruções."
            },
            {
              "id": "c-m4-l1-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre contadores, acumuladores e médias?",
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
                  "text": "Um acumulador precisa começar em um valor conhecido para que a soma não dependa de memória indefinida."
                },
                {
                  "id": "d",
                  "text": "O navegador ou compilador corrige automaticamente qualquer erro do código."
                }
              ],
              "answer": "c",
              "explanation": "Correto. Um acumulador precisa começar em um valor conhecido para que a soma não dependa de memória indefinida.",
              "solution": "Um acumulador precisa começar em um valor conhecido para que a soma não dependa de memória indefinida.",
              "required": true
            },
            {
              "id": "c-m4-l1-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com contadores, acumuladores e médias?",
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
                  "text": "Se dividir dois inteiros, a parte fracionária pode ser descartada. Converta um operando para float ou double quando a média precisar de decimais."
                }
              ],
              "answer": "d",
              "explanation": "Correto. Se dividir dois inteiros, a parte fracionária pode ser descartada. Converta um operando para float ou double quando a média precisar de decimais.",
              "solution": "Se dividir dois inteiros, a parte fracionária pode ser descartada. Converta um operando para float ou double quando a média precisar de decimais.",
              "required": true
            },
            {
              "id": "c-m4-l1-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre contadores, acumuladores e médias?",
              "options": [
                {
                  "id": "a",
                  "text": "Compreender contadores, acumuladores e médias."
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
              "explanation": "Correto. Compreender contadores, acumuladores e médias.",
              "solution": "Compreender contadores, acumuladores e médias.",
              "required": true
            }
          ]
        },
        {
          "id": "c-m4-l2",
          "title": "Projeto: média de notas",
          "description": "Reúna entrada, variáveis, cálculo e decisão em um programa pequeno.",
          "minutes": 12,
          "kind": "project",
          "objectives": [
            "Planejar a estrutura do projeto.",
            "Combinar os conceitos vistos na trilha.",
            "Revisar o resultado com critérios verificáveis."
          ],
          "content": [
            "O projeto calcula a média de duas notas, mostra o resultado e usa uma condição para exibir uma mensagem. Separe leitura, cálculo e saída em etapas. Nesta plataforma, C é estudado com interpretação e verificação textual; o navegador não compila o código enviado."
          ],
          "example": {
            "language": "C",
            "code": "#include <stdio.h>\n\nint main(void) {\n    float n1, n2, media;\n    scanf(\"%f %f\", &n1, &n2);\n    media = (n1 + n2) / 2.0f;\n    printf(\"Media: %.2f\\n\", media);\n    return 0;\n}",
            "explanation": [
              "A entrada fornece os dados, o cálculo produz a média e a saída apresenta o resultado ao usuário."
            ]
          },
          "commonMistake": "Use 2.0f para uma divisão em ponto flutuante e confira os formatos de scanf e printf para cada variável.",
          "summary": [
            "Projeto: média de notas",
            "A entrada fornece os dados, o cálculo produz a média e a saída apresenta o resultado ao usuário."
          ],
          "exercises": [
            {
              "id": "c-m4-l2-e1",
              "type": "multiple-choice",
              "title": "Confira a ideia principal",
              "prompt": "Qual ordem é adequada para resolver o problema da média?",
              "options": [
                {
                  "id": "a",
                  "text": "Ler as notas, calcular a média e exibir o resultado"
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
              "explanation": "A entrada fornece os dados, o cálculo produz a média e a saída apresenta o resultado ao usuário.",
              "solution": "Ler as notas, calcular a média e exibir o resultado",
              "required": true
            },
            {
              "id": "c-m4-l2-e2",
              "type": "practical",
              "title": "Pratique o conceito",
              "required": true,
              "prompt": "Escreva um trecho de programa que declare duas notas decimais, calcule a média e apresente o resultado.",
              "requirements": [
                {
                  "label": "Use um tipo decimal",
                  "anyOf": [
                    "float",
                    "double"
                  ]
                },
                {
                  "label": "Calcule a média de duas notas",
                  "anyOf": [
                    "(n1 + n2) / 2",
                    "(n1+n2)/2",
                    "(nota1 + nota2) / 2",
                    "(nota1+nota2)/2"
                  ]
                },
                {
                  "label": "Apresente a média com printf",
                  "contains": "printf"
                }
              ],
              "solution": "#include <stdio.h>\nint main(void) {\n  float n1, n2, media;\n  scanf(\"%f %f\", &n1, &n2);\n  media = (n1 + n2) / 2.0f;\n  printf(\"Media: %.2f\\n\", media);\n  return 0;\n}",
              "explanation": "Compare sua solução com cada critério indicado. A correção desta tarefa verifica padrões definidos no conteúdo; o código JavaScript e C não é executado nesta versão."
            },
            {
              "id": "c-m4-l2-e3",
              "type": "multiple-choice",
              "title": "Confira o conceito",
              "prompt": "Qual afirmação está correta sobre projeto: média de notas?",
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
                  "text": "A entrada fornece os dados, o cálculo produz a média e a saída apresenta o resultado ao usuário."
                }
              ],
              "answer": "d",
              "explanation": "Correto. A entrada fornece os dados, o cálculo produz a média e a saída apresenta o resultado ao usuário.",
              "solution": "A entrada fornece os dados, o cálculo produz a média e a saída apresenta o resultado ao usuário.",
              "required": true
            },
            {
              "id": "c-m4-l2-e4",
              "type": "multiple-choice",
              "title": "Evite esse erro",
              "prompt": "Qual cuidado é importante ao trabalhar com projeto: média de notas?",
              "options": [
                {
                  "id": "a",
                  "text": "Use 2.0f para uma divisão em ponto flutuante e confira os formatos de scanf e printf para cada variável."
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
              "explanation": "Correto. Use 2.0f para uma divisão em ponto flutuante e confira os formatos de scanf e printf para cada variável.",
              "solution": "Use 2.0f para uma divisão em ponto flutuante e confira os formatos de scanf e printf para cada variável.",
              "required": true
            },
            {
              "id": "c-m4-l2-e5",
              "type": "multiple-choice",
              "title": "Aplique o que aprendeu",
              "prompt": "Qual é um dos objetivos desta aula sobre projeto: média de notas?",
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

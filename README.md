# Curso de GitHub: do zero ao portfólio ⭐

Curso interativo para os alunos da **Faculdade de Tecnologia e Inovação Senac DF** aprenderem a usar o GitHub e entregar os projetos das disciplinas.
Profª Maristela Oliveira (Stela).

## Módulos

| | Módulo | Interatividade |
|---|---|---|
| 1 | Por que GitHub? | "Viagem no tempo" pelos commits + quiz |
| 2 | Criando sua conta | Conta, verificação em duas etapas, e-mail da faculdade e benefícios de estudante (GitHub Pro e Copilot) + verificador de nome de usuário + quiz |
| 3 | Primeiro repositório | Simulação de upload e commit pelo site + link para a prática com correção automática ([primeira-entrega](https://github.com/MARISTELAOLIVEIRA/primeira-entrega)) + quiz |
| 4 | Git + VS Code | Simulador de terminal com missões (`add`, `commit`, `push`, `log`) + quiz |
| 5 | README caprichado | Gerador de README com pré-visualização ao vivo + quiz |
| 6 | GitHub Pages | Montador do link do site + quiz |
| 7 | Entregando projetos | Regras, checklist e gerador da mensagem de entrega + quiz |

O progresso do aluno fica salvo no navegador dele (localStorage). A chave **Windows/Mac** no menu troca as instruções e os atalhos.

## Como editar

| Quero mudar... | Onde |
|---|---|
| Textos dos módulos | `index.html` (cada módulo é uma `<section class="modulo">`) |
| Regras de entrega e checklist | `js/main.js`: `REGRAS_ENTREGA` e `CHECKLIST` |
| Perguntas dos quizzes | `js/main.js`: `QUIZZES` |
| Missões do simulador | `js/main.js`: `MISSOES` |
| Modelo do README gerado | `js/main.js`: função `modeloReadme` |
| Mensagem de entrega | `js/main.js`: função `montarMensagem` |
| Cores | Variáveis no topo do `css/style.css` (`:root`) |

Procure por **PARA EDITAR** no `js/main.js`: cada trecho editável está marcado.

## Rodar localmente

Abra o `index.html` no navegador. Sem internet, só a pré-visualização do README mostra o texto puro (as bibliotecas `marked` e `DOMPurify` vêm de CDN).

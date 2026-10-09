# Curso de GitHub: do zero ao portfólio ⭐

Curso interativo para os alunos da **Faculdade de Tecnologia e Inovação Senac DF** aprenderem a usar o GitHub e entregar os projetos das disciplinas.
Profª Maristela Oliveira (Stela).

## Módulos

| | Módulo | Interatividade |
|---|---|---|
| 1 | Por que GitHub? | "Viagem no tempo" pelos commits + quiz |
| 2 | Criando sua conta | Conta, verificação em duas etapas, e-mail da faculdade e benefícios de estudante (GitHub Pro e Copilot) + verificador de nome de usuário + quiz |
| 3 | Primeiro repositório | Simulação de upload e commit pelo site + link para a prática com correção automática ([primeira-entrega](https://github.com/MARISTELAOLIVEIRA/primeira-entrega)) + quiz |
| 4 | Git + VS Code | Simulador de terminal com missões (`add`, `commit`, `push`, `log`) + link para a prática com correção automática ([git-vscode](https://github.com/MARISTELAOLIVEIRA/git-vscode)) + quiz |
| 5 | README caprichado | Gerador de README com pré-visualização ao vivo + quiz |
| 6 | GitHub Pages | Montador do link do site + quiz |
| 7 | Entregando projetos | Regras, checklist e gerador da mensagem de entrega + link para a prática de trabalho em equipe ([trabalho-em-equipe](https://github.com/MARISTELAOLIVEIRA/trabalho-em-equipe)) + quiz |

O progresso do aluno fica salvo no navegador dele (localStorage). A chave **Windows/Mac** no menu troca as instruções e os atalhos.

## 🎓 Certificados

[`certificado.html`](https://maristelaoliveira.github.io/curso-github/certificado.html): o aluno digita o usuário do GitHub e vê os certificados que já conquistou. São 4: um para cada curso prático e um da **trilha completa** (os três).

- **Verificação automática:** a página confere no GitHub se o aluno concluiu de verdade (a issue do robô fechada com `concluido`). Trocar o nome no endereço não gera certificado.
- **Botões:** adicionar ao perfil do LinkedIn (Licenças e certificados), compartilhar no feed com texto sugerido (citando @Maristela Oliveira e @Faculdade Senac DF) e baixar a imagem em PNG.
- **Comemoração:** a mensagem final do robô em cada curso prático mostra o selo da conquista com confete e o link do certificado.
- **Para editar** o nome do evento, os nomes das menções e os links: bloco `CONFIG` no `certificado.html`.

## 📺 Painel da turma (para a TV da sala)

[`painel.html`](https://maristelaoliveira.github.io/curso-github/painel.html) mostra, ao vivo, quem começou os cursos práticos e em que passo cada aluno está. Atualiza sozinho a cada minuto.

- **Em amarelo, no topo:** alunos parados no mesmo passo há 8 minutos ou mais (talvez precisem de ajuda)
- **Quando alguém conclui um curso:** aviso na tela com confete 🎉
- **Turma grande:** o painel rola sozinho e volta ao topo

| Endereço | Mostra |
|---|---|
| `painel.html` | Alunos que começaram hoje |
| `painel.html?desde=2026-10-20` | Alunos que começaram desde essa data |
| `painel.html?demo=1` | Demonstração com alunos de mentira (`?demo=40` para uma turma grande) |

Os dados vêm da busca pública do GitHub (as issues que o robô abre em cada repositório de aluno), sem precisar de login. Só aparecem repositórios **públicos**.

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

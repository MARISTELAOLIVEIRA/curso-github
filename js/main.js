/* ==========================================================
   Curso de GitHub · interatividade
   ==========================================================

   MAPA DESTE ARQUIVO
     A. DADOS (PARA EDITAR): regras de entrega, checklist, quizzes, versões da "viagem no tempo"
     1. Atalhos e memória do navegador (progresso salvo)
     2. Menu lateral, progresso e botões "Concluir módulo"
     3. Chave Windows/Mac
     4. Efeitos: fundo animado (rede de commits), brilho do mouse, selo, botões de copiar, aviso, confete
     5. Boas-vindas: histórico de commits animado
     6. Módulo 1: viagem no tempo
     7. Módulo 2: verificador de nome de usuário
     8. Módulo 3: nome do repositório + simulação de upload
     9. Módulo 4: simulador de terminal Git
    10. Módulo 5: gerador de README + pré-visualização
    11. Módulo 6: montador do link do GitHub Pages
    12. Módulo 7: regras, checklist e mensagem de entrega
    13. Quizzes

   COMO ADICIONAR UM MÓDULO: copie uma <section class="modulo" id="m8" ...> no index.html
   (com data-titulo e data-icone) e um botão <button class="btn-concluir" data-modulo="m8">.
   O menu, a trilha e o progresso se ajustam sozinhos. Para ter quiz, crie QUIZZES.m8 abaixo.
   ========================================================== */


/* ==========================================================
   A. DADOS (PARA EDITAR)
   ========================================================== */

// PARA EDITAR: regras de entrega dos projetos (módulo 7)
const REGRAS_ENTREGA = [
  { icone: "📛", titulo: "Nome do repositório", texto: "disciplina-nome-do-projeto, em minúsculas e com hífens. Ex.: prog-web-calculadora-medias" },
  { icone: "🌍", titulo: "Repositório público", texto: "Se precisar que seja privado, adicione MARISTELAOLIVEIRA como colaboradora (Settings → Collaborators)." },
  { icone: "📝", titulo: "README completo", texto: "Nome do projeto, o que ele faz, como rodar, tecnologias, seu nome, curso e disciplina." },
  { icone: "📸", titulo: "Commits ao longo do projeto", texto: "Um commit a cada parte pronta, com mensagens claras. Um commit só no último dia não mostra o seu processo." },
  { icone: "🌐", titulo: "É um site?", texto: "Projetos em HTML, CSS e JavaScript vão para o GitHub Pages, com o link no README." },
  { icone: "🔗", titulo: "Envio", texto: "Mande o link do repositório pelo canal combinado na disciplina, dentro do prazo." },
];

// PARA EDITAR: itens do checklist de entrega (módulo 7)
const CHECKLIST = [
  "O nome do repositório segue o padrão disciplina-nome-do-projeto",
  "O repositório está público (ou a professora é colaboradora)",
  "O README tem: o que o projeto faz, como rodar, tecnologias, meu nome, curso e disciplina",
  "Fiz commits ao longo do projeto, com mensagens que explicam o que mudou",
  "Não enviei senhas nem arquivos desnecessários (.env, node_modules, venv)",
  "Se é um site, ele está no GitHub Pages e o link está no README",
  "Abri o link em outra aba (ou no celular) para conferir se está tudo lá",
];

// PARA EDITAR: perguntas dos quizzes. "certa" é a posição da resposta certa (0 = primeira).
const QUIZZES = {
  m1: [
    { p: "Qual é a diferença entre Git e GitHub?", op: ["Git é o programa no computador; GitHub é o site que guarda os repositórios na nuvem", "São a mesma coisa, com nomes diferentes", "GitHub é o programa e Git é o site"], certa: 0, exp: "Git tira as \"fotos\" (commits) no seu computador; o GitHub guarda e mostra na internet." },
    { p: "O que é um commit?", op: ["Um arquivo .zip do projeto", "Uma \"foto\" das mudanças do projeto, com uma mensagem", "Uma senha do GitHub"], certa: 1, exp: "Cada commit registra o que mudou, quem mudou, quando e por quê." },
    { p: "Seu notebook quebrou um dia antes da entrega. Com o projeto no GitHub...", op: ["Perdi tudo", "Preciso pedir para o GitHub mandar por e-mail", "É só clonar em outro computador e continuar"], certa: 2, exp: "O GitHub também é o backup do seu projeto." },
  ],
  m2: [
    { p: "Qual nome de usuário passa a melhor impressão?", op: ["xX_maria_gamer_Xx", "maria-silva", "mariaaaa2005"], certa: 1, exp: "Nome e sobrenome, simples e fácil de lembrar. Ele vai estar no link de todos os seus projetos." },
    { p: "Qual e-mail usar para criar a conta?", op: ["Um e-mail pessoal permanente (e depois adicionar o da faculdade)", "Só o e-mail da faculdade", "Tanto faz: depois não dá para mudar"], certa: 0, exp: "O e-mail institucional pode ser desativado quando você se formar." },
    { p: "Para que serve a verificação em duas etapas?", op: ["Deixar o login mais rápido", "Proteger a conta mesmo se alguém descobrir a sua senha", "Ganhar repositórios extras"], certa: 1, exp: "Além da senha, é preciso o código do app no seu celular." },
    { p: "Você trocou de celular e o app autenticador sumiu. Como entrar na conta?", op: ["Com os códigos de recuperação que você guardou", "Criando uma conta nova", "Não tem jeito"], certa: 0, exp: "Por isso eles precisam ficar guardados FORA do celular." },
    { p: "Para que adicionar o e-mail da faculdade na sua conta?", op: ["Para trocar o nome de usuário", "Para comprovar que é estudante e pedir os benefícios, como o GitHub Pro e o Copilot", "Porque o e-mail pessoal para de funcionar"], certa: 1, exp: "Ele entra como e-mail adicional; o pessoal continua sendo o principal." },
  ],
  m3: [
    { p: "Qual é o melhor nome de repositório?", op: ["Projeto Final (1)", "asdfgh", "calculadora-medias"], certa: 2, exp: "Curto, descritivo, em minúsculas e com hífens." },
    { p: "Qual é a melhor mensagem de commit?", op: ["update", "Adiciona a validação do formulário de contato", "agora vai"], certa: 1, exp: "Ela explica o que mudou. Daqui a um mês, você vai agradecer." },
    { p: "Para que serve o README?", op: ["Apresentar o projeto: o que faz e como usar", "Guardar as senhas do projeto", "Deixar o repositório privado"], certa: 0, exp: "É a capa do projeto, a primeira coisa que aparece no repositório." },
  ],
  m4: [
    { p: "Qual é a ordem certa do ciclo do dia a dia?", op: ["push → commit → add", "editar → add → commit → push", "commit → editar → push"], certa: 1, exp: "Edita, prepara (add), fotografa (commit) e envia (push)." },
    { p: "O que o git push faz?", op: ["Envia os commits do seu computador para o GitHub", "Baixa o projeto do GitHub", "Apaga os arquivos modificados"], certa: 0, exp: "No VS Code, é o botão Sync Changes." },
    { p: "Qual destes arquivos NÃO deve ir para o GitHub?", op: ["index.html", "README.md", ".env com senhas"], certa: 2, exp: "Coloque o .env no .gitignore. Senha no GitHub = senha pública." },
  ],
  m5: [
    { p: "Em Markdown, o que faz \"# Meu Projeto\"?", op: ["Um comentário que não aparece", "Um título grande", "Uma lista"], certa: 1, exp: "# é título, ## é subtítulo, ### é um nível menor." },
    { p: "O que um bom README precisa ter?", op: ["Só o nome do projeto", "O código inteiro copiado", "O que o projeto faz, como rodar, tecnologias e autoria"], certa: 2, exp: "Quem abrir o repositório precisa entender o projeto em 1 minuto." },
  ],
  m6: [
    { p: "Qual projeto funciona no GitHub Pages?", op: ["Site em HTML, CSS e JavaScript", "Sistema em PHP com banco de dados", "Script Python que roda no terminal"], certa: 0, exp: "O Pages publica só sites estáticos." },
    { p: "Usuária maria-silva, repositório portfolio. Qual é o link do site?", op: ["https://github.com/portfolio", "https://maria-silva.github.io/portfolio/", "https://portfolio.com/maria-silva"], certa: 1, exp: "Sempre usuario.github.io/repositorio/" },
    { p: "Como fazer um README aparecer no topo do seu perfil?", op: ["Pagando o plano Pro", "Colocando um README em qualquer repositório", "Criando um repositório com o mesmo nome do seu usuário"], certa: 2, exp: "Ex.: maria-silva/maria-silva. É o seu cartão de visitas." },
  ],
  m7: [
    { p: "Quando fazer commits durante o projeto?", op: ["Ao longo do desenvolvimento, a cada parte pronta", "Um só, no último dia", "Só quando a professora pedir"], certa: 0, exp: "O histórico mostra a sua evolução no projeto." },
    { p: "Antes de enviar o link, o que conferir?", op: ["Nada, é só mandar", "Se o repositório está acessível e o README está completo", "Se o repositório tem mais de 100 arquivos"], certa: 1, exp: "Abra o link numa aba anônima ou no celular para ter certeza." },
  ],
};

// PARA EDITAR: as versões da "viagem no tempo" (módulo 1). As linhas que começam com "+" aparecem destacadas.
const VERSOES = [
  { msg: "Cria a página inicial", hash: "a1f3c9e", data: "02/03 · 14:10", arquivo: ["+<h1>Minha Calculadora</h1>"] },
  { msg: "Adiciona o campo das notas", hash: "7be20d4", data: "05/03 · 19:42", arquivo: ["<h1>Minha Calculadora</h1>", "+<input id=\"nota1\">", "+<input id=\"nota2\">"] },
  { msg: "Adiciona o botão de calcular", hash: "c04d81a", data: "09/03 · 10:05", arquivo: ["<h1>Minha Calculadora</h1>", "<input id=\"nota1\">", "<input id=\"nota2\">", "+<button>Calcular média</button>"] },
  { msg: "Mostra se foi aprovado", hash: "e9a7f12", data: "12/03 · 21:30", arquivo: ["<h1>Minha Calculadora</h1>", "<input id=\"nota1\">", "<input id=\"nota2\">", "<button>Calcular média</button>", "+<p id=\"resultado\">Aprovado! 🎉</p>"] },
];


/* ==========================================================
   1. ATALHOS E MEMÓRIA DO NAVEGADOR
   ========================================================== */
const $ = (sel, raiz = document) => raiz.querySelector(sel);
const $$ = (sel, raiz = document) => [...raiz.querySelectorAll(sel)];
const esperar = (ms) => new Promise((r) => setTimeout(r, ms));
const aleatorio = (min, max) => Math.random() * (max - min) + min;
const MOVIMENTO_REDUZIDO = matchMedia("(prefers-reduced-motion: reduce)").matches;
// escapa < > & " para mostrar texto digitado pelo aluno sem virar HTML
const escapar = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// O progresso fica no localStorage (memória do navegador). Tudo dentro de try/catch,
// porque em janela anônima ou com cookies bloqueados o localStorage pode falhar.
const CHAVE = "curso-github:v1";
let memoria = { feitos: [], so: null, checklist: [], usuario: "" };
try { memoria = { ...memoria, ...JSON.parse(localStorage.getItem(CHAVE) || "{}") }; } catch (e) { /* sem memória: tudo bem */ }
function salvar() {
  try { localStorage.setItem(CHAVE, JSON.stringify(memoria)); } catch (e) { /* sem memória: tudo bem */ }
}


/* ==========================================================
   2. MENU LATERAL, PROGRESSO E "CONCLUIR MÓDULO"
   ========================================================== */
const modulos = $$(".modulo");                                   // todas as <section class="modulo">
const contaveis = modulos.filter((m) => $(".btn-concluir", m));   // só os que têm botão "Concluir"
const indice = $("#indice");
const trilha = $("#trilha");

// monta o menu lateral e a trilha da página inicial a partir dos módulos do HTML
modulos.forEach((m, i) => {
  const item = document.createElement("a");
  item.href = `#${m.id}`;
  item.dataset.modulo = m.id;
  item.innerHTML = `<span class="ind-icone">${m.dataset.icone}</span><span>${m.dataset.titulo}</span>${i ? '<span class="ind-check"></span>' : ""}`;
  indice.appendChild(item);
  if (i) {
    const t = document.createElement("a");
    t.href = `#${m.id}`;
    t.dataset.modulo = m.id;
    t.innerHTML = `<span class="t-icone">${m.dataset.icone}</span><div><span class="t-num">Módulo ${i}</span><br><b>${m.dataset.titulo}</b></div>`;
    trilha.appendChild(t);
  }
});

// atualiza checks, anel de progresso, botões e a tela de "curso concluído"
function atualizarProgresso() {
  const feitos = memoria.feitos.filter((id) => contaveis.some((m) => m.id === id));
  const pct = Math.round((feitos.length / contaveis.length) * 100);
  $("#progresso-texto").textContent = `${pct}%`;
  $("#anel-valor").style.strokeDasharray = `${pct} 100`;
  $$("[data-modulo]").forEach((el) => el.classList.toggle("feito", feitos.includes(el.dataset.modulo)));
  $$(".btn-concluir").forEach((b) => {
    b.textContent = feitos.includes(b.dataset.modulo) ? "✔ Módulo concluído" : "✔ Concluir módulo";
  });
  $("#final").classList.toggle("aparece", feitos.length === contaveis.length);
}

$$(".btn-concluir").forEach((b) => b.addEventListener("click", () => {
  const id = b.dataset.modulo;
  if (memoria.feitos.includes(id)) return;
  memoria.feitos.push(id);
  salvar();
  atualizarProgresso();
  const r = b.getBoundingClientRect();
  if (memoria.feitos.length >= contaveis.length) {
    confete(260, innerWidth / 2, innerHeight * 0.7);   // terminou o curso!
  } else {
    confete(70, r.left + r.width / 2, r.top);
    // leva para o próximo módulo depois de um instante
    const proximo = modulos[modulos.findIndex((m) => m.id === id) + 1];
    if (proximo) setTimeout(() => proximo.scrollIntoView({ behavior: "smooth" }), 900);
  }
}));

$("#zerar").addEventListener("click", () => {
  if (!confirm("Apagar o progresso salvo neste navegador?")) return;
  memoria.feitos = []; memoria.checklist = [];
  salvar(); atualizarProgresso(); montarChecklist();
});

// marca no menu o módulo que está na tela e dispara as animações .reveal
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("visivel");
    $$("a", indice).forEach((a) => a.classList.toggle("atual", a.dataset.modulo === e.target.id));
  });
}, { rootMargin: "-40% 0px -55% 0px" });   // conta como "atual" quando o módulo passa pelo meio da tela
modulos.forEach((m) => observador.observe(m));
// o primeiro módulo já começa visível (não depende de rolar)
modulos[0].classList.add("visivel");
// garante que módulos pequenos/rolados rápido também apareçam
const observadorReveal = new IntersectionObserver((ent) => ent.forEach((e) => e.isIntersecting && e.target.classList.add("visivel")), { threshold: 0.05 });
modulos.forEach((m) => observadorReveal.observe(m));

// celular: o menu abre e fecha pelo botão ☰; fecha ao escolher um módulo
const lateral = $("#lateral");
const btnMenu = $("#btn-menu");
btnMenu.addEventListener("click", () => {
  const aberto = lateral.classList.toggle("aberto");
  btnMenu.setAttribute("aria-expanded", aberto);
});
indice.addEventListener("click", () => { lateral.classList.remove("aberto"); btnMenu.setAttribute("aria-expanded", false); });

atualizarProgresso();


/* ==========================================================
   3. CHAVE WINDOWS / MAC
   ========================================================== */
// Sem escolha salva, tenta adivinhar pelo navegador. A classe no <body> esconde
// o conteúdo do outro sistema (ver .so-win / .so-mac no CSS).
function escolherSO(so) {
  memoria.so = so; salvar();
  document.body.classList.toggle("so-mac", so === "mac");
  document.body.classList.toggle("so-win", so !== "mac");
  $$(".so-chave button").forEach((b) => b.classList.toggle("ativo", b.dataset.so === so));
}
escolherSO(memoria.so || (/Mac|iPhone|iPad/.test(navigator.platform) ? "mac" : "win"));
$$(".so-chave button").forEach((b) => b.addEventListener("click", () => escolherSO(b.dataset.so)));


/* ==========================================================
   4. EFEITOS GERAIS
   ========================================================== */

// aviso rápido no rodapé. Ex.: avisar("Copiado!")
let tempoAviso;
function avisar(texto) {
  const el = $("#aviso");
  el.textContent = texto;
  el.classList.add("mostrar");
  clearTimeout(tempoAviso);
  tempoAviso = setTimeout(() => el.classList.remove("mostrar"), 1800);
}

async function copiar(texto) {
  try { await navigator.clipboard.writeText(texto); avisar("📋 Copiado!"); }
  catch (e) { avisar("Não deu para copiar. Selecione e copie manualmente."); }
}

// coloca um botão "Copiar" em todo bloco .comando
$$(".comando").forEach((bloco) => {
  const b = document.createElement("button");
  b.className = "btn-copiar";
  b.textContent = "Copiar";
  b.addEventListener("click", () => copiar($("code", bloco).textContent));
  bloco.appendChild(b);
});

// selo da professora: memoji vira a estrela a cada 9 s
const selo = $(".professora");
// depois de rolar um pouco, o selo encolhe (ver body.rolou no CSS)
addEventListener("scroll", () => document.body.classList.toggle("rolou", scrollY > 80), { passive: true });
setInterval(() => {
  selo.classList.add("virado");
  setTimeout(() => selo.classList.remove("virado"), 2200);
}, 9000);

// ----------------------------------------------------------
// EFEITOS DE MOUSE (os mesmos do site do workshop)
// Em telas de toque (celular) não existe "passar o mouse", então ficam desligados.
// ----------------------------------------------------------
if (!matchMedia("(hover: none)").matches) {
  // BOTÕES MAGNÉTICOS: são "puxados" na direção do mouse
  $$(".btn-primario, .btn-concluir").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${dx * 0.22}px, ${dy * 0.32}px)`;
    });
    btn.addEventListener("pointerleave", () => (btn.style.transform = ""));
  });

  // BRILHO QUE SEGUE O MOUSE dentro dos cartões (o CSS usa --mx e --my, ver .brilho-mouse).
  // PARA EDITAR: quais cartões brilham e quais também inclinam em 3D.
  const BRILHAM = ".tilt, .mini-cartao, .info-item, .trilha a, .regra, .ciclo-passo, .glossario div, .pratica";
  const INCLINAM = ".tilt, .mini-cartao, .trilha a, .ciclo-passo";
  $$(BRILHAM).forEach((card) => {
    card.classList.add("brilho-mouse");
    const inclina = card.matches(INCLINAM);
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;   // 0 a 1
      card.style.setProperty("--mx", `${px * 100}%`);
      card.style.setProperty("--my", `${py * 100}%`);
      if (inclina) {
        card.style.transition = "transform .08s";
        card.style.transform = `perspective(800px) rotateY(${(px - 0.5) * 12}deg) rotateX(${(0.5 - py) * 12}deg) translateZ(4px)`;
      }
    });
    card.addEventListener("pointerleave", () => {
      if (inclina) { card.style.transition = "transform .6s cubic-bezier(.2,.8,.2,1)"; card.style.transform = ""; }
    });
  });
}

// ----------------------------------------------------------
// TEXTO EMBARALHADO: as letras viram caracteres aleatórios e vão se acertando
// da esquerda para a direita. embaralhar(elemento, "texto final")
// ----------------------------------------------------------
function embaralhar(el, final = el.textContent) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*{}[]<>/=+";
  const total = 26;
  let quadro = 0;
  clearInterval(el._embaralhando);
  el._embaralhando = setInterval(() => {
    el.textContent = [...final].map((c, i) =>
      c === " " || i < (quadro / total) * final.length ? c : chars[Math.floor(Math.random() * chars.length)]).join("");
    if (++quadro > total) { clearInterval(el._embaralhando); el.textContent = final; }
  }, 38);
}

// PARA EDITAR: as palavras que se alternam em "Do zero ao seu ___ no GitHub"
const PALAVRAS_CAPA = ["portfólio", "primeiro site", "primeiro commit", "primeiro projeto"];
(function tituloDaCapa() {
  const el = $(".capa h1 .hl");
  if (!el) return;
  let i = 0;
  setTimeout(() => embaralhar(el, PALAVRAS_CAPA[0]), 500);
  if (MOVIMENTO_REDUZIDO) return;
  setInterval(() => {
    if (scrollY > innerHeight) return;            // só troca enquanto a capa está na tela
    i = (i + 1) % PALAVRAS_CAPA.length;
    embaralhar(el, PALAVRAS_CAPA[i]);
  }, 3800);
})();

// a palavra colorida do título de cada módulo se embaralha quando o módulo
// aparece pela primeira vez e quando o mouse passa por cima
$$(".modulo-topo h2 .hl").forEach((el) => {
  const final = el.textContent;
  el.addEventListener("mouseenter", () => embaralhar(el, final));
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    setTimeout(() => embaralhar(el, final), 350);
    obs.disconnect();                              // só na primeira vez
  }, { threshold: 1 });
  obs.observe(el);
});

// FUNDO: rede de "commits" no estilo do gráfico de contribuições do GitHub.
// Quadradinhos verdes se movem e se ligam quando ficam perto; o mouse empurra os
// pontos e se liga a eles com linhas douradas; termos do Git sobem devagar.
(function fundo() {
  const canvas = $("#fundo");
  const ctx = canvas.getContext("2d");
  // PARA EDITAR: os termos que sobem no fundo
  const SIMBOLOS = ["git", "commit", "push", "pull", "merge", "main", "PR", "⎇", "clone", "README", "+", "−", "{ }", "#", "✔"];
  // verdes do gráfico de contribuições do GitHub + o menta da estrela
  const CORES_PONTOS = ["14,68,41", "0,109,50", "38,166,65", "57,211,83", "126,226,184"];
  // menta, roxo e azul do GitHub + o dourado da estrela
  const CORES_SIMBOLOS = ["126,226,184", "163,113,247", "88,166,255", "227,194,107"];
  const sortearDe = (lista) => lista[Math.floor(Math.random() * lista.length)];
  let pontos = [], simbolos = [];
  const mouse = { x: -9999, y: -9999 };

  function redimensionar() {
    // dpr = densidade da tela (2 em telas Retina), para o desenho ficar nítido
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const qtd = Math.round(Math.min(90, (innerWidth * innerHeight) / 16000));   // mais pontos em telas maiores
    pontos = Array.from({ length: qtd }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      vx: aleatorio(-0.25, 0.25), vy: aleatorio(-0.25, 0.25),
      lado: aleatorio(3.5, 7), cor: sortearDe(CORES_PONTOS),
    }));
    simbolos = Array.from({ length: Math.round(qtd / 4) }, () => novoSimbolo(true));
  }

  function novoSimbolo(inicial) {
    return {
      t: sortearDe(SIMBOLOS), cor: sortearDe(CORES_SIMBOLOS),
      x: Math.random() * innerWidth,
      y: inicial ? Math.random() * innerHeight : innerHeight + 40,
      v: aleatorio(0.15, 0.45), tam: aleatorio(12, 20), a: aleatorio(0.07, 0.18), giro: aleatorio(-0.25, 0.25),
    };
  }

  // desenha UM quadro; requestAnimationFrame chama de novo ~60 vezes por segundo
  function desenhar() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    const raio = 130;   // distância máxima para ligar dois pontos

    for (const p of pontos) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > innerWidth) p.vx *= -1;    // bateu na borda? volta
      if (p.y < 0 || p.y > innerHeight) p.vy *= -1;
      // o mouse empurra os pontos de leve
      const dxm = p.x - mouse.x, dym = p.y - mouse.y, dm = Math.hypot(dxm, dym);
      if (dm < 120 && dm > 0) { p.x += (dxm / dm) * 1.2; p.y += (dym / dm) * 1.2; }
    }

    // linhas verdes entre pontos próximos (quanto mais perto, mais forte)
    ctx.lineWidth = 1;
    for (let i = 0; i < pontos.length; i++) {
      for (let j = i + 1; j < pontos.length; j++) {
        const a = pontos[i], b = pontos[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < raio) {
          ctx.strokeStyle = `rgba(63, 185, 80, ${0.22 * (1 - d / raio)})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      // linhas douradas ligando os pontos ao mouse
      const p = pontos[i], dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      if (dm < raio * 1.4) {
        ctx.strokeStyle = `rgba(227, 194, 107, ${0.6 * (1 - dm / (raio * 1.4))})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        ctx.lineWidth = 1;
      }
    }

    // os pontos são quadradinhos arredondados, como as células do gráfico de contribuições
    for (const p of pontos) {
      ctx.fillStyle = `rgba(${p.cor}, .85)`;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(p.x - p.lado / 2, p.y - p.lado / 2, p.lado, p.lado, 1.5) : ctx.rect(p.x - p.lado / 2, p.y - p.lado / 2, p.lado, p.lado);
      ctx.fill();
    }

    // termos do Git sobem; quando saem pelo topo, nasce outro lá embaixo
    for (let i = 0; i < simbolos.length; i++) {
      const s = simbolos[i];
      s.y -= s.v;
      if (s.y < -40) simbolos[i] = novoSimbolo(false);
      ctx.save();
      ctx.translate(s.x, s.y); ctx.rotate(s.giro);
      ctx.font = `600 ${s.tam}px "JetBrains Mono", monospace`;
      ctx.fillStyle = `rgba(${s.cor}, ${s.a})`;
      ctx.fillText(s.t, 0, 0);
      ctx.restore();
    }

    // aba escondida ou "reduzir movimento" ligado: para de animar
    if (!document.hidden && !MOVIMENTO_REDUZIDO) requestAnimationFrame(desenhar);
  }

  addEventListener("resize", redimensionar);
  addEventListener("pointermove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  document.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
  document.addEventListener("visibilitychange", () => !document.hidden && requestAnimationFrame(desenhar));
  redimensionar();
  desenhar();
})();

// BRILHO que segue o mouse com um pequeno atraso (fica mais suave): a cada quadro
// ele anda 12% da distância que falta. Em telas de toque não aparece.
(function brilhoDoMouse() {
  if (matchMedia("(hover: none)").matches) return;
  const brilho = $(".cursor-glow");
  let alvoX = innerWidth / 2, alvoY = innerHeight / 2, x = alvoX, y = alvoY;
  addEventListener("pointermove", (e) => { alvoX = e.clientX; alvoY = e.clientY; document.body.classList.add("mouse-ativo"); });
  (function seguir() {
    x += (alvoX - x) * 0.12; y += (alvoY - y) * 0.12;
    brilho.style.transform = `translate(${x - 210}px, ${y - 210}px)`;
    requestAnimationFrame(seguir);
  })();
})();

// CONFETE: confete(quantidade, x, y)
const confeteCanvas = $("#confete");
const cctx = confeteCanvas.getContext("2d");
let pedacos = [], confeteAtivo = false;
function confete(qtd = 120, x = innerWidth / 2, y = innerHeight / 2) {
  if (MOVIMENTO_REDUZIDO) return;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  confeteCanvas.width = innerWidth * dpr; confeteCanvas.height = innerHeight * dpr;
  cctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const cores = ["#3fb950", "#7ee2b8", "#e3c26b", "#a371f7", "#58a6ff", "#ffffff"];
  for (let i = 0; i < qtd; i++) {
    const ang = aleatorio(-Math.PI * 0.9, -Math.PI * 0.1), vel = aleatorio(6, 15);
    pedacos.push({ x, y, vx: Math.cos(ang) * vel, vy: Math.sin(ang) * vel, w: aleatorio(6, 11), h: aleatorio(8, 15),
      cor: cores[Math.floor(Math.random() * cores.length)], giro: aleatorio(0, 3), vg: aleatorio(-0.3, 0.3), vida: 1 });
  }
  if (!confeteAtivo) { confeteAtivo = true; requestAnimationFrame(animarConfete); }
}
function animarConfete() {
  cctx.clearRect(0, 0, innerWidth, innerHeight);
  pedacos.forEach((p) => {
    p.vy += 0.32; p.vx *= 0.985; p.x += p.vx; p.y += p.vy; p.giro += p.vg; p.vida -= 0.008;   // 0.32 = gravidade
    cctx.save(); cctx.globalAlpha = Math.max(0, p.vida); cctx.translate(p.x, p.y); cctx.rotate(p.giro);
    cctx.fillStyle = p.cor; cctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.giro * 2)));
    cctx.restore();
  });
  pedacos = pedacos.filter((p) => p.vida > 0 && p.y < innerHeight + 40);
  if (pedacos.length) requestAnimationFrame(animarConfete);
  else { confeteAtivo = false; cctx.clearRect(0, 0, innerWidth, innerHeight); }
}


/* ==========================================================
   5. BOAS-VINDAS: histórico de commits aparecendo em loop
   ========================================================== */
(async function miniLog() {
  const log = $("#mini-log");
  // PARA EDITAR: commits que aparecem na janela da página inicial
  const linhas = [
    "Cria a conta no GitHub 🎉", "Primeiro repositório", "Adiciona o README", "Envia o projeto da disciplina",
    "Publica o site no GitHub Pages", "Atualiza o portfólio", "Entrega o projeto final ✔",
  ];
  while (true) {
    log.innerHTML = "";
    for (const l of linhas) {
      const hash = Math.random().toString(16).slice(2, 9);
      const li = document.createElement("li");
      li.innerHTML = `<span class="bolinha"></span><span class="hash">${hash}</span><span>${l}</span>`;
      log.appendChild(li);
      await esperar(900);
    }
    await esperar(4000);
  }
})();


/* ==========================================================
   6. MÓDULO 1: VIAGEM NO TEMPO
   ========================================================== */
const listaVersoes = $("#viagem-commits");
const arquivoVersao = $("#viagem-arquivo");
function mostrarVersao(i) {
  // cada botão sabe qual versão ele mostra (data-versao); a lista está em ordem inversa
  $$("button", listaVersoes).forEach((b) => b.classList.toggle("ativo", +b.dataset.versao === i));
  arquivoVersao.classList.add("trocando");
  setTimeout(() => {
    arquivoVersao.innerHTML = `<span class="cz">index.html</span>\n` + VERSOES[i].arquivo
      .map((l) => (l.startsWith("+") ? `<span class="novo">${escapar(l.slice(1))}</span>` : escapar(l))).join("\n");
    arquivoVersao.classList.remove("trocando");
  }, 200);
}
// o mais recente fica em cima, como no GitHub
[...VERSOES].reverse().forEach((v) => {
  const i = VERSOES.indexOf(v);
  const li = document.createElement("li");
  li.innerHTML = `<button data-versao="${i}">${v.msg}<small>${v.hash} · ${v.data}</small></button>`;
  li.querySelector("button").addEventListener("click", () => mostrarVersao(i));
  listaVersoes.appendChild(li);
});
mostrarVersao(VERSOES.length - 1);


/* ==========================================================
   7. MÓDULO 2: VERIFICADOR DE NOME DE USUÁRIO
   ========================================================== */
// Regras do GitHub: letras, números e hífens; sem hífen no começo/fim nem dois seguidos; até 39 caracteres.
const userInput = $("#user-input");
function checarUsuario() {
  const u = userInput.value.trim();
  const regras = [
    [u.length > 0, "Escreva um nome para testar", "neutro"],
    [/^[A-Za-z0-9-]*$/.test(u), "Só letras sem acento, números e hífen (sem espaço, ponto ou _)"],
    [!/^-|-$/.test(u), "Não começa nem termina com hífen"],
    [!/--/.test(u), "Sem dois hífens seguidos"],
    [u.length <= 39, "Até 39 caracteres"],
  ];
  const dicas = [
    [!/\d{3,}/.test(u), "Evite muitos números (ex.: ano de nascimento)"],
    [!/(.)\1\1/i.test(u), "Evite letras repetidas (ex.: mariaaa)"],
    [!/(gamer|xx|lol|top|zueira|kkk)/i.test(u), "Prefira algo profissional: nome-sobrenome"],
  ];
  const ul = $("#user-checagens");
  if (!u) { ul.innerHTML = "<li>Digite um nome para testar</li>"; $("#user-preview").textContent = "seu-nome"; return; }
  ul.innerHTML = regras.slice(1).map(([ok, t]) => `<li class="${ok ? "ok" : "erro"}">${t}</li>`).join("")
    + dicas.map(([ok, t]) => `<li class="${ok ? "ok" : "aviso"}">${t}</li>`).join("");
  $("#user-preview").textContent = u;
  // se o nome é válido, guarda para usar nos outros módulos (upload, link do Pages)
  if (regras.every(([ok]) => ok)) {
    memoria.usuario = u; salvar();
    $$(".user-nome").forEach((el) => (el.textContent = u));
    if (!urlUser.value) { urlUser.placeholder = u; montarURL(); }
  }
}
userInput.addEventListener("input", checarUsuario);


/* ==========================================================
   8. MÓDULO 3: NOME DO REPOSITÓRIO + SIMULAÇÃO DE UPLOAD
   ========================================================== */
const repoInput = $("#repo-input");
repoInput.addEventListener("input", () => {
  const t = repoInput.value.trim();
  // o GitHub troca tudo o que não for letra, número, ponto, _ ou - por hífen
  $("#repo-github").textContent = t ? t.replace(/[^A-Za-z0-9._-]+/g, "-") : "—";
  // nossa sugestão: sem acentos, minúsculas, só letras/números e hífens
  const sugestao = t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  $("#repo-sugestao").textContent = sugestao || "—";
});

// PARA EDITAR: os arquivos que aparecem no "seu computador"
const ARQUIVOS_UPLOAD = ["📄 index.html", "🎨 style.css", "⚙️ script.js", "🖼️ logo.png"];
const upPC = $("#upload-pc"), upZona = $("#upload-zona"), upMsg = $("#upload-msg"), upBtn = $("#upload-commit");

function moverArquivo(chip) {
  // clicar (ou arrastar) alterna o arquivo entre o computador e a área de upload
  const destino = chip.parentElement === upPC ? upZona : upPC;
  destino.appendChild(chip);
  $("p", upZona).style.display = $$(".arq-chip", upZona).length ? "none" : "";
  atualizarBotaoUpload();
}
function atualizarBotaoUpload() {
  upBtn.disabled = !$$(".arq-chip", upZona).length || upMsg.value.trim().length < 3;
}
ARQUIVOS_UPLOAD.forEach((nome) => {
  const chip = document.createElement("span");
  chip.className = "arq-chip";
  chip.textContent = nome;
  chip.draggable = true;
  chip.tabIndex = 0;
  chip.addEventListener("click", () => moverArquivo(chip));
  chip.addEventListener("keydown", (e) => e.key === "Enter" && moverArquivo(chip));
  chip.addEventListener("dragstart", (e) => { e.dataTransfer.setData("text/plain", nome); chip.classList.add("arrastando"); window._arrastado = chip; });
  chip.addEventListener("dragend", () => chip.classList.remove("arrastando"));
  upPC.appendChild(chip);
});
upZona.addEventListener("dragover", (e) => { e.preventDefault(); upZona.classList.add("por-cima"); });
upZona.addEventListener("dragleave", () => upZona.classList.remove("por-cima"));
upZona.addEventListener("drop", (e) => {
  e.preventDefault(); upZona.classList.remove("por-cima");
  if (window._arrastado && window._arrastado.parentElement === upPC) moverArquivo(window._arrastado);
});
upMsg.addEventListener("input", atualizarBotaoUpload);
upBtn.addEventListener("click", () => {
  const msg = upMsg.value.trim();
  const lista = $("#upload-lista");
  const hash = Math.random().toString(16).slice(2, 9);
  // os arquivos enviados aparecem na lista do repositório, com a mensagem do commit ao lado
  lista.insertAdjacentHTML("afterbegin", `<li><span>📸 ${escapar(msg)}</span><span>${hash}</span></li>`);
  $$(".arq-chip", upZona).forEach((chip) => {
    lista.insertAdjacentHTML("beforeend", `<li><span>${chip.textContent}</span><span>${escapar(msg)}</span></li>`);
    chip.remove();
  });
  $("p", upZona).style.display = "";
  upMsg.value = "";
  atualizarBotaoUpload();
  const generica = /^(update|teste|asdf|agora vai|commit|ajustes?|mudan[cç]as?)$/i.test(msg);
  avisar(generica ? "Commit feito! Mas capriche mais na mensagem 😉" : "🎉 Commit feito! Arquivos no GitHub.");
  const r = upBtn.getBoundingClientRect();
  confete(50, r.left + r.width / 2, r.top);
});
if (memoria.usuario) $$(".user-nome").forEach((el) => (el.textContent = memoria.usuario));


/* ==========================================================
   9. MÓDULO 4: SIMULADOR DE TERMINAL GIT
   ==========================================================
   O "estado" guarda onde cada arquivo está:
     pasta   = modificado, ainda não preparado
     stage   = preparado (git add)
     commits = lista de commits feitos no computador
     enviados = quantos commits já foram para o GitHub (git push)
   Cada comando muda o estado e redesenha as 4 áreas.                               */

// PARA EDITAR: missões do simulador. "ok" é uma função que diz se a missão foi cumprida.
const MISSOES = [
  { texto: "Veja o que mudou: <code>git status</code>", ok: (s) => s.viuStatus },
  { texto: "Prepare tudo: <code>git add .</code>", ok: (s) => s.pasta.length === 0 && (s.stage.length > 0 || s.commits.length > 0) },
  { texto: "Faça o commit: <code>git commit -m \"sua mensagem\"</code>", ok: (s) => s.commits.length > 0 },
  { texto: "Envie para o GitHub: <code>git push</code>", ok: (s) => s.enviados > 0 && s.enviados === s.commits.length },
  { texto: "Confira o histórico: <code>git log</code>", ok: (s) => s.viuLog },
];
const ARQUIVOS_SIM = ["index.html", "style.css", "script.js"];
let estado;

const simSaida = $("#sim-saida"), simInput = $("#sim-input");
function escrever(html) {
  simSaida.insertAdjacentHTML("beforeend", html + "\n");
  simSaida.scrollTop = simSaida.scrollHeight;
}
function piscar(id) {
  const area = $(`#${id}`).parentElement;
  area.classList.remove("pisca"); void area.offsetWidth; area.classList.add("pisca");
  setTimeout(() => area.classList.remove("pisca"), 900);
}

function reiniciarSimulador() {
  estado = { pasta: [...ARQUIVOS_SIM], stage: [], commits: [], enviados: 0, viuStatus: false, viuLog: false, historico: [], posHist: 0 };
  simSaida.innerHTML = "";
  escrever('<span class="cz">💡 Você editou 3 arquivos do projeto. Siga as missões ao lado e digite os comandos aqui embaixo.\n   Digite <b>ajuda</b> para ver os comandos.</span>');
  desenharSimulador();
}

function desenharSimulador() {
  $("#sim-pasta").innerHTML = estado.pasta.map((a) => `<div class="sim-item mod">${a}</div>`).join("");
  $("#sim-stage").innerHTML = estado.stage.map((a) => `<div class="sim-item">${a}</div>`).join("");
  $("#sim-commits").innerHTML = estado.commits.map((c) => `<div class="sim-item commit"><b>${c.hash}</b> ${escapar(c.msg)}</div>`).join("");
  $("#sim-github").innerHTML = estado.commits.slice(0, estado.enviados).map((c) => `<div class="sim-item commit"><b>${c.hash}</b> ${escapar(c.msg)}</div>`).join("");
  // missões: a primeira não cumprida fica destacada
  let atualMarcada = false;
  $("#sim-missoes").innerHTML = MISSOES.map((m) => {
    const feita = m.ok(estado);
    let classe = feita ? "feita" : "";
    if (!feita && !atualMarcada) { classe = "atual"; atualMarcada = true; }
    return `<li class="${classe}">${m.texto}</li>`;
  }).join("");
  // acende o passo correspondente no diagrama do ciclo (acima do simulador)
  const passos = $$(".ciclo-passo");
  // 1 = preparar, 2 = commit, 3 = enviar
  const fase = estado.stage.length ? 2 : estado.commits.length > estado.enviados ? 3 : estado.pasta.length ? 1 : 3;
  passos.forEach((p, i) => p.classList.toggle("aceso", i === fase));
}

// interpreta um comando digitado. Mostra a saída parecida com a do Git de verdade
// (em inglês, como vai aparecer no computador) + uma explicação em português.
function executar(linha) {
  const cmd = linha.trim().replace(/\s+/g, " ");
  if (!cmd) return;
  escrever(`<span class="cmd">${escapar(cmd)}</span>`);
  const s = estado;
  const hash = () => Math.random().toString(16).slice(2, 9);

  if (/^(ajuda|help|git help)$/i.test(cmd)) {
    escrever(`<span class="cz">Comandos que este simulador entende:
  git status          mostra o que mudou
  git add .           prepara todos os arquivos (ou: git add index.html)
  git commit -m "..." cria o commit com uma mensagem
  git push            envia os commits para o GitHub
  git log             mostra o histórico de commits
  editar              simula que você editou um arquivo de novo
  limpar              limpa a tela</span>`);
  } else if (/^(limpar|clear|cls)$/i.test(cmd)) {
    simSaida.innerHTML = "";
  } else if (cmd === "editar") {
    const arq = ARQUIVOS_SIM[Math.floor(Math.random() * ARQUIVOS_SIM.length)];
    if (!s.pasta.includes(arq)) s.pasta.push(arq);
    escrever(`<span class="am">✏️ Você editou o ${arq}.</span>`);
    piscar("sim-pasta");
  } else if (cmd === "git status") {
    s.viuStatus = true;
    if (!s.pasta.length && !s.stage.length) {
      escrever(`On branch main\nnothing to commit, working tree clean\n<span class="cz">💡 Nada mudou desde o último commit.</span>`);
    } else {
      if (s.stage.length) escrever(`Changes to be committed:\n${s.stage.map((a) => `<span class="ok">        modified:   ${a}</span>`).join("\n")}`);
      if (s.pasta.length) escrever(`Changes not staged for commit:\n${s.pasta.map((a) => `<span class="erro">        modified:   ${a}</span>`).join("\n")}`);
      escrever(`<span class="cz">💡 Em vermelho: mudou, mas ainda não foi preparado. Em verde: preparado para o commit.</span>`);
    }
  } else if (/^git add\b/.test(cmd)) {
    const alvo = cmd.slice(8).trim();
    if (!alvo) {
      escrever(`<span class="erro">Nothing specified, nothing added.</span>\n<span class="cz">💡 Diga o que preparar: git add . (tudo) ou git add index.html</span>`);
    } else if (alvo === "." || alvo === "-A" || alvo === "--all") {
      if (!s.pasta.length) escrever(`<span class="cz">💡 Não há nada novo para preparar.</span>`);
      s.stage.push(...s.pasta.filter((a) => !s.stage.includes(a))); s.pasta = [];
      piscar("sim-stage");
    } else if (s.pasta.includes(alvo)) {
      s.pasta = s.pasta.filter((a) => a !== alvo);
      if (!s.stage.includes(alvo)) s.stage.push(alvo);
      piscar("sim-stage");
    } else if (ARQUIVOS_SIM.includes(alvo) || s.stage.includes(alvo)) {
      escrever(`<span class="cz">💡 O ${escapar(alvo)} não tem mudanças novas para preparar.</span>`);
    } else {
      escrever(`<span class="erro">fatal: pathspec '${escapar(alvo)}' did not match any files</span>\n<span class="cz">💡 Esse arquivo não existe. Os arquivos são: ${ARQUIVOS_SIM.join(", ")}</span>`);
    }
  } else if (/^git commit\b/.test(cmd)) {
    const m = cmd.match(/-m\s+["'“”](.+?)["'“”]\s*$/) || cmd.match(/-m\s+([^"'].*)$/);
    if (!m) {
      escrever(`<span class="erro">Faltou a mensagem.</span>\n<span class="cz">💡 Use: git commit -m "Adiciona o formulário de contato"</span>`);
    } else if (!s.stage.length) {
      escrever(`On branch main\nnothing to commit\n<span class="cz">💡 Primeiro prepare os arquivos com git add .</span>`);
    } else {
      const msg = m[1].trim();
      const c = { hash: hash(), msg };
      s.commits.push(c);
      escrever(`[main ${c.hash}] ${escapar(msg)}\n ${s.stage.length} file${s.stage.length > 1 ? "s" : ""} changed`);
      if (/^(update|teste|asdf|agora vai|commit|ajustes?|mudan[cç]as?|.{1,6})$/i.test(msg)) {
        escrever(`<span class="am">💡 Funcionou, mas essa mensagem não explica o que mudou. Que tal algo como "Adiciona o menu de navegação"?</span>`);
      }
      s.stage = [];
      piscar("sim-commits");
    }
  } else if (cmd === "git push" || /^git push (origin )?main$/.test(cmd)) {
    const pendentes = s.commits.length - s.enviados;
    if (!pendentes) {
      escrever(`Everything up-to-date\n<span class="cz">💡 Não há commits novos para enviar.</span>`);
    } else {
      s.enviados = s.commits.length;
      escrever(`Enumerating objects: ${3 + pendentes * 3}, done.\nWriting objects: 100%, done.\nTo https://github.com/${escapar(memoria.usuario || "seu-nome")}/meu-projeto.git\n<span class="ok">   ${s.commits[s.commits.length - 1].hash}  main -> main</span>\n<span class="cz">💡 Pronto! Seus commits estão no GitHub. ☁️</span>`);
      piscar("sim-github");
      const r = $("#sim-github").getBoundingClientRect();
      confete(60, r.left + r.width / 2, r.top);
    }
  } else if (cmd === "git log" || cmd === "git log --oneline") {
    s.viuLog = true;
    if (!s.commits.length) escrever(`<span class="erro">fatal: your current branch 'main' does not have any commits yet</span>`);
    else escrever([...s.commits].reverse().map((c, i) => `<span class="am">${c.hash}</span>${i === 0 ? ' <span class="ok">(HEAD -> main)</span>' : ""} ${escapar(c.msg)}`).join("\n"));
  } else if (cmd === "git pull") {
    escrever(`Already up to date.\n<span class="cz">💡 git pull baixa as novidades do GitHub (útil quando você trabalha em mais de um computador).</span>`);
  } else if (/^git (comit|commmit|commti|psuh|puhs|stauts|statsu|ad)\b/.test(cmd)) {
    escrever(`<span class="erro">git: '${escapar(cmd.split(" ")[1])}' is not a git command.</span>\n<span class="cz">💡 Quase! Confira a digitação.</span>`);
  } else if (/^git\b/.test(cmd)) {
    escrever(`<span class="cz">💡 Este simulador não conhece esse comando. Digite ajuda para ver a lista.</span>`);
  } else {
    escrever(`<span class="erro">${escapar(cmd.split(" ")[0])}: command not found</span>\n<span class="cz">💡 Os comandos começam com git. Ex.: git status</span>`);
  }

  desenharSimulador();
  if (MISSOES.every((m) => m.ok(s)) && !s.comemorou) {
    s.comemorou = true;
    escrever(`\n<span class="ok">🏆 Todas as missões cumpridas! Esse é exatamente o ciclo que você vai usar todo dia.</span>\n<span class="cz">   Quer treinar mais? Digite editar e faça o ciclo de novo.</span>`);
    confete(140, innerWidth / 2, innerHeight * 0.6);
  }
}

$("#sim-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const v = simInput.value;
  if (v.trim()) { estado.historico.push(v); estado.posHist = estado.historico.length; }
  executar(v);
  simInput.value = "";
});
// setas ↑ ↓ navegam pelos comandos já digitados, como num terminal de verdade
simInput.addEventListener("keydown", (e) => {
  if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
  e.preventDefault();
  estado.posHist = Math.max(0, Math.min(estado.historico.length, estado.posHist + (e.key === "ArrowUp" ? -1 : 1)));
  simInput.value = estado.historico[estado.posHist] || "";
});
$("#sim-reiniciar").addEventListener("click", () => { reiniciarSimulador(); simInput.focus(); });
reiniciarSimulador();


/* ==========================================================
   10. MÓDULO 5: GERADOR DE README + PRÉ-VISUALIZAÇÃO
   ========================================================== */
const mdEntrada = $("#md-entrada"), mdPreview = $("#md-preview");

// PARA EDITAR: o modelo de README gerado
function modeloReadme(d) {
  const techs = (d.tecnologias || "HTML, CSS, JavaScript").split(",").map((t) => t.trim()).filter(Boolean);
  return `# ${d.projeto || "Nome do Projeto"}

${d.descricao || "Uma frase explicando o que o projeto faz e para quem ele serve."}

## 🛠️ Tecnologias

${techs.map((t) => `- ${t}`).join("\n")}

## ▶️ Como rodar

${d.rodar || "Explique o passo a passo para abrir ou executar o projeto."}

## 🖼️ Demonstração

Coloque aqui um print do projeto: \`![Tela inicial](print.png)\`
ou o link do site no GitHub Pages.

## 👤 Autoria

**${d.autor || "Seu Nome"}** · ${d.curso || "Seu curso"}

Projeto desenvolvido na disciplina **${d.disciplina || "Nome da disciplina"}**, com a Profª Maristela Oliveira,
na Faculdade de Tecnologia e Inovação Senac DF.
`;
}

// transforma o Markdown em HTML. marked e DOMPurify vêm de CDN (ver index.html);
// sem internet, mostra o texto puro mesmo.
function renderizarMarkdown() {
  const texto = mdEntrada.value;
  if (window.marked && window.DOMPurify) {
    mdPreview.innerHTML = DOMPurify.sanitize(marked.parse(texto));
  } else {
    mdPreview.innerHTML = `<pre>${escapar(texto)}</pre>`;
  }
}
mdEntrada.addEventListener("input", renderizarMarkdown);
$("#gerador").addEventListener("submit", (e) => {
  e.preventDefault();
  mdEntrada.value = modeloReadme(Object.fromEntries(new FormData(e.target)));
  renderizarMarkdown();
  avisar("✨ README gerado! Ajuste no editor.");
  mdEntrada.scrollIntoView({ behavior: "smooth", block: "center" });
});
$("#md-copiar").addEventListener("click", () => copiar(mdEntrada.value));
$("#md-baixar").addEventListener("click", () => {
  // cria um arquivo na memória (Blob) e "clica" num link de download
  const url = URL.createObjectURL(new Blob([mdEntrada.value], { type: "text/markdown" }));
  const a = Object.assign(document.createElement("a"), { href: url, download: "README.md" });
  a.click();
  URL.revokeObjectURL(url);
});
mdEntrada.value = modeloReadme({ projeto: "Calculadora de Médias", descricao: "Calcula a média final de duas notas e mostra se o aluno foi aprovado.", rodar: "Abra o arquivo `index.html` no navegador.", autor: "Maria Silva", curso: "Análise e Desenvolvimento de Sistemas", disciplina: "Programação Web" });
// espera as bibliotecas (carregadas com defer) antes da primeira renderização
window.addEventListener("load", renderizarMarkdown);
renderizarMarkdown();


/* ==========================================================
   11. MÓDULO 6: LINK DO GITHUB PAGES
   ========================================================== */
const urlUser = $("#url-user"), urlRepo = $("#url-repo");
function montarURL() {
  // o endereço do Pages usa o usuário em minúsculas
  $("#url-a").textContent = (urlUser.value.trim() || urlUser.placeholder || "seu-usuario").toLowerCase();
  $("#url-b").textContent = urlRepo.value.trim() || "nome-do-repositorio";
}
[urlUser, urlRepo].forEach((el) => el.addEventListener("input", montarURL));
if (memoria.usuario) urlUser.placeholder = memoria.usuario;
montarURL();


/* ==========================================================
   12. MÓDULO 7: REGRAS, CHECKLIST E MENSAGEM DE ENTREGA
   ========================================================== */
$("#regras").innerHTML = REGRAS_ENTREGA.map((r, i) =>
  `<div class="regra reveal" style="--d:${i * 0.07}s"><b>${r.icone} ${r.titulo}</b><p>${r.texto}</p></div>`).join("");

function montarChecklist() {
  $("#checklist").innerHTML = CHECKLIST.map((t, i) =>
    `<li><label><input type="checkbox" data-i="${i}" ${memoria.checklist.includes(i) ? "checked" : ""}><span>${t}</span></label></li>`).join("");
}
montarChecklist();
$("#checklist").addEventListener("change", (e) => {
  const i = +e.target.dataset.i;
  memoria.checklist = e.target.checked ? [...new Set([...memoria.checklist, i])] : memoria.checklist.filter((x) => x !== i);
  salvar();
  if (memoria.checklist.length === CHECKLIST.length) { avisar("✅ Tudo conferido! Pode entregar."); confete(80, innerWidth / 2, innerHeight * 0.6); }
});

// PARA EDITAR: o texto da mensagem de entrega
function montarMensagem() {
  const nome = $("#ent-nome").value.trim() || "[seu nome]";
  const disc = $("#ent-disc").value.trim() || "[disciplina]";
  const link = $("#ent-link").value.trim() || "[link do repositório]";
  $("#ent-msg").textContent = `Olá, Profª Maristela!\n\nSegue a entrega do meu projeto da disciplina ${disc}.\n\nAluno(a): ${nome}\nRepositório: ${link}\n\nObrigado(a)!`;
}
["#ent-nome", "#ent-disc", "#ent-link"].forEach((s) => $(s).addEventListener("input", montarMensagem));
$("#ent-copiar").addEventListener("click", () => copiar($("#ent-msg").textContent));
montarMensagem();


/* ==========================================================
   13. QUIZZES
   ========================================================== */
// Monta cada <div class="quiz" data-quiz="m1"> com as perguntas de QUIZZES.m1.
// Cada pergunta só pode ser respondida uma vez; a explicação aparece logo abaixo.
$$(".quiz").forEach((caixa) => {
  const perguntas = QUIZZES[caixa.dataset.quiz] || [];
  if (!perguntas.length) { caixa.remove(); return; }
  let acertos = 0, respondidas = 0;
  caixa.innerHTML = `<div class="quiz-topo"><h3>🧠 Teste rápido</h3><span class="quiz-placar">0 / ${perguntas.length}</span></div>`;
  perguntas.forEach((q) => {
    const bloco = document.createElement("div");
    bloco.className = "quiz-pergunta";
    bloco.innerHTML = `<p>${q.p}</p><div class="quiz-opcoes">${q.op.map((o, i) => `<button data-i="${i}">${o}</button>`).join("")}</div>`;
    bloco.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b || b.disabled) return;
      const certa = +b.dataset.i === q.certa;
      $$("button", bloco).forEach((x) => { x.disabled = true; if (+x.dataset.i === q.certa) x.classList.add("certa"); });
      if (!certa) b.classList.add("errada");
      bloco.insertAdjacentHTML("beforeend", `<div class="quiz-explica">${certa ? "✅ Isso!" : "💡 Quase."} ${q.exp}</div>`);
      respondidas++; if (certa) acertos++;
      $(".quiz-placar", caixa).textContent = `${acertos} / ${perguntas.length}`;
      if (certa) { const r = b.getBoundingClientRect(); confete(25, r.left + 40, r.top); }
      if (respondidas === perguntas.length && acertos === perguntas.length) avisar("🌟 Gabaritou!");
    });
    caixa.appendChild(bloco);
  });
});

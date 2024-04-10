// Ativar links menu
const links = document.querySelectorAll(".header-menu a");

function ativarLInk(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLInk);

// Ativar Itens do Orçamento (Prata e Ouro)

const parametros = new URLSearchParams(location.search);

function ativarParametro(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarParametro);

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;

  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventoGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventoGaleria);

// Animação do Plugin

// Verificando se o arquivo SimpleAnime foi carregado e se foi executa o mesmo
if (window.SimpleAnime) {
  new SimpleAnime();
}

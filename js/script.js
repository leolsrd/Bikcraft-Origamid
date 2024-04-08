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

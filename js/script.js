const links = document.querySelectorAll(".header-menu a");

function ativarLInk(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLInk);

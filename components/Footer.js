Footer();
function Footer() {
  const div = document.createElement("div");
  footer.innerHTML = "";
  div.classList.add("container");
  div.innerHTML = `
  <div class="row">
  <div class="col-12 col-sm-4">
    <a href="#">
      <div class="brand-logo">
        <h2 class="title">Escritório</h2>
      </div>
    </a>
    <div class="brand-tagline h2 my-3 w-75">
      
    </div>
    <div class="brand-socials my-3 mt-4">
      <a href="#" class="mx-2"> <i class="bi bi-facebook"></i></a>
      <a href="#" class="mx-2"> <i class="bi bi-youtube"></i></a>
      <a href="https://www.instagram.com/artinpage/" class="mx-2"> <i class="bi bi-instagram"></i></a>
      <a href="#" class="mx-2"> <i class="bi bi-twitter"></i></a>
    </div>
  </div>
  <div class="col-12 col-sm-8">
    <div class="row">
      <div class="col-6 col-sm-6">
        <div class="fw-6">Menu</div>
        <div class="row gy-2 mt-2">
          <div><a href="index.html">Inicio</a></div>
          <div><a href="Sobre.html">Sobre nós</a></div>
          <div><a href="index.html#services">Áreas de atuação</a></div>
          <div><a href="https://wa.me/5531987390093">Fale conosco</a></div>
        </div>
      </div>
      <div class="col-6 col-sm-6">
        <div class="fw-6">Contato</div>
        <div class="row gy-2 mt-2">
          <div><a href="#">escritorio@teste.com.br</a></div>
          <div><a href="https://wa.me/5531987390093">+(123) 456-7890</a></div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
  footer.appendChild(div);
}

const navbar = document.getElementById("navbar");

Navbar();
function Navbar() {
  navbar.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("container");
  div.classList.add("justify-");
  div.innerHTML = `
    <a class="navbar-brand brand-logo" href="./index.html">
                <img
                  class="img-fluid"
                  src=""
                  alt=""
                  srcset=""
                />
          </a>
          <button
            class="navbar-toggler rounded-pill"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
            <li class="nav-item ms-md-1">
            <a class="nav-link" href="./index.html">Inicio</a>
          </li>
          <li class="nav-item ms-md-1">
          <a class="nav-link" href="./Sobre.html">Sobre nós</a>
        </li> 
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Áreas de atuação
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="./Empresarial.html">Empresarial</a>
              <a class="dropdown-item" href="./Imobiliario.html">Imobiliário</a>
              <a class="dropdown-item" href="./Penal.html">Direito Penal</a>
              <a class="dropdown-item" href="./Civel.html">Cível</a>
            </div>
          </li>              
                          
            </ul>
            <a
              target="_blank"
              href="https://www.instagram.com/artinpage/"
              class="btn btn-outline-warning rounded-pill bg-brand-primayfaint"
            >
              Fale Conosco
            </a>
          </div>
    `;
  navbar.appendChild(div);
}

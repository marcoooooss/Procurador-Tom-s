export function Navbar() {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');
  
  nav.innerHTML = `
    <div class="nav-container">
      <div class="logo">
        <div class="logo-icon-3d"><i class="fa-solid fa-scale-balanced"></i></div>
        <div class="logo-text">GABRIEL TOMÁS <span class="badge-3d">ICPIB 120</span></div>
      </div>
      <ul class="nav-links">
        <li><a href="#section1"><i class="fa-solid fa-compass"></i> Inicio</a></li>
        <li><a href="#section2"><i class="fa-solid fa-layer-group"></i> Servicios & 3D</a></li>
        <li><a href="#section3"><i class="fa-solid fa-calculator"></i> Aranceles</a></li>
        <li><a href="#section4"><i class="fa-solid fa-paper-plane"></i> Contacto</a></li>
      </ul>
      <div class="botonBurguer">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .navbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(11, 19, 43, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 215, 0, 0.2);
      padding: 0.9rem 2rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
    .nav-container {
      max-width: 1250px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .navbar .logo {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-weight: 800;
      font-size: 1.25rem;
      color: #FFF;
      letter-spacing: 1px;
    }
    .logo-icon-3d {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #FFD700, #FFA500);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0B132B;
      font-size: 1.3rem;
      box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
      transform: rotate(-5deg);
    }
    .badge-3d {
      font-size: 0.65rem;
      background: rgba(0, 242, 254, 0.15);
      color: #00F2FE;
      border: 1px solid #00F2FE;
      padding: 2px 7px;
      border-radius: 12px;
      vertical-align: middle;
      margin-left: 5px;
    }
    .navbar .nav-links {
      list-style: none;
      display: flex;
      gap: 2rem;
    }
    .navbar .nav-links a {
      color: #94A3B8;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
    }
    .navbar .nav-links a:hover {
      color: #FFD700;
      text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    }
    .navbar .botonBurguer {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 5px;
    }
    .navbar .bar {
      height: 3px;
      width: 28px;
      background: #FFD700;
      border-radius: 3px;
      transition: 0.3s;
    }
    @media(max-width: 850px) {
      .navbar .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #0B132B;
        padding: 1.5rem 0;
        border-bottom: 2px solid #FFD700;
        text-align: center;
      }
      .navbar .nav-links.active { display: flex; }
      .navbar .nav-links a { justify-content: center; font-size: 1.1rem; }
      .navbar .botonBurguer { display: flex; }
    }
  `;
  nav.appendChild(style);

  // Lógica del menú hamburguesa
  nav.querySelector('.botonBurguer').addEventListener('click', () => {
    nav.querySelector('.nav-links').classList.toggle('active');
  });

  return nav;
}
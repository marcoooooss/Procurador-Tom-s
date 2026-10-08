export function Section({ id, contenido }) {
  const section = document.createElement('section');
  section.id = id;
  section.classList.add('content-section');
  section.innerHTML = contenido;

  const style = document.createElement('style');
  style.textContent = `
    .content-section {
      padding: 4.5rem 2rem;
      margin: 2.5rem auto;
      max-width: 1200px;
      background: rgba(28, 37, 65, 0.4);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 215, 0, 0.2);
      border-radius: 20px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
      position: relative;
      z-index: 1;
    }
    .content-section h2 {
      font-size: 2.2rem;
      color: #FFF;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #FFF 0%, #FFD700 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `;
  section.appendChild(style);

  // Efecto 3D Tilt dinámico
  setTimeout(() => {
    const cards = section.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `perspective(1000px) rotateX(${-y / 12}deg) rotateY(${x / 12}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });
  }, 100);

  return section;
}
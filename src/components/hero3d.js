export function Hero3D() {
  const container = document.createElement('div');
  container.classList.add('hero-3d-wrapper');
  
  const canvas = document.createElement('canvas');
  canvas.id = 'webgl-canvas';
  container.appendChild(canvas);

  // Lógica de Canvas 3D e Interacción
  setTimeout(() => {
    const ctx = canvas.getContext('2d');
    let width, height;
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    function resize() {
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Partículas y nodos 3D
    const nodes = Array.from({ length: 45 }, () => ({
      x: (Math.random() - 0.5) * width * 1.2,
      y: (Math.random() - 0.5) * height * 1.2,
      z: Math.random() * 500,
      radius: Math.random() * 3 + 1,
      color: Math.random() > 0.5 ? '#FFD700' : '#00F2FE'
    }));

    window.addEventListener('mousemove', (e) => {
      mouse.targetX = (e.clientX - window.innerWidth / 2) * 0.5;
      mouse.targetY = (e.clientY - window.innerHeight / 2) * 0.5;
    });

    function render() {
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2 + mouse.x * 0.3, height / 2 + mouse.y * 0.3);

      // Dibujar conexiones entre nodos (Malla 3D)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 215, 0, ${1 - dist / 150})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Dibujar partículas
      nodes.forEach(node => {
        node.x += Math.sin(Date.now() * 0.001 + node.z) * 0.5;
        node.y += Math.cos(Date.now() * 0.001 + node.z) * 0.5;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = node.color;
        ctx.fill();
      });

      ctx.restore();
      requestAnimationFrame(render);
    }
    render();
  }, 100);

  const style = document.createElement('style');
  style.textContent = `
    .hero-3d-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
      pointer-events: none;
    }
    #webgl-canvas {
      width: 100%;
      height: 100%;
      opacity: 0.6;
    }
  `;
  container.appendChild(style);
  return container;
}
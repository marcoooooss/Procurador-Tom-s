export function CalculatorWidget() {
  const container = document.createElement('div');
  container.classList.add('calc-container', 'tilt-card');

  container.innerHTML = `
    <h3><i class="fa-solid fa-calculator" style="color:#FFD700"></i> Calculadora Interactiva de Aranceles</h3>
    <p style="color:#94A3B8; font-size:0.9rem; margin-bottom:1.5rem;">Estime de forma transparente los honorarios según la cuantía del procedimiento judicial.</p>

    <div class="calc-group">
      <label>Cuantía del Litigio (€): <strong id="cuantiaVal" style="color:#00F2FE; font-size:1.3rem;">25.000 €</strong></label>
      <input type="range" id="cuantiaSlider" min="1000" max="200000" step="1000" value="25000">
    </div>

    <div class="calc-result-box">
      <div>
        <span>Derechos Arancelarios Estimados:</span>
        <h2 id="totalHonorarios" style="color:#FFD700; font-size:2rem; margin-top:0.3rem;">345,50 €</h2>
      </div>
      <a href="#section4" class="btn-calc-cta"><i class="fa-solid fa-file-pdf"></i> Presupuesto Oficial</a>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .calc-container {
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(28, 37, 65, 0.9));
      padding: 2rem;
      border-radius: 16px;
      border: 1px solid #FFD700;
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.15);
      margin-top: 1.5rem;
    }
    .calc-group input[type=range] {
      width: 100%;
      height: 8px;
      background: #1E293B;
      border-radius: 5px;
      outline: none;
      margin: 1rem 0;
      accent-color: #00F2FE;
    }
    .calc-result-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(0, 242, 254, 0.08);
      padding: 1.2rem;
      border-radius: 12px;
      border: 1px dashed #00F2FE;
      margin-top: 1rem;
    }
    .btn-calc-cta {
      background: linear-gradient(135deg, #FFD700, #FFA500);
      color: #0B132B;
      font-weight: 700;
      padding: 0.7rem 1.2rem;
      border-radius: 10px;
      text-decoration: none;
      transition: 0.3s;
    }
    .btn-calc-cta:hover { transform: scale(1.05); }
  `;
  container.appendChild(style);

  // Evento interactivo en vivo
  setTimeout(() => {
    const slider = container.querySelector('#cuantiaSlider');
    const valText = container.querySelector('#cuantiaVal');
    const totalText = container.querySelector('#totalHonorarios');

    slider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      valText.textContent = val.toLocaleString('es-ES') + ' €';
      
      // Algoritmo de escala aproximado (RD 1373/2003)
      let estimado = 120 + (val * 0.009);
      totalText.textContent = estimado.toFixed(2).replace('.', ',') + ' €';
    });
  }, 100);

  return container;
}
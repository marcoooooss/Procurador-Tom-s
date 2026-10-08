export function StatusTrackerWidget() {
  const container = document.createElement('div');
  container.classList.add('tracker-container');

  container.innerHTML = `
    <h3 style="color:#FFF; margin-bottom:0.8rem;"><i class="fa-solid fa-radar" style="color:#00F2FE;"></i> Rastreador en Tiempo Real de Expediente</h3>
    <div class="search-box-3d">
      <input type="text" id="nigInput" placeholder="Ej. NIG: 07040 42 1 2026 0001234">
      <button id="btnBuscarNig"><i class="fa-solid fa-magnifying-glass"></i> Consultar</button>
    </div>
    <div id="trackerStatusResult" class="status-timeline" style="display:none;">
      <div class="step completed"><i class="fa-solid fa-check"></i> Recepción LexNET</div>
      <div class="step completed"><i class="fa-solid fa-check"></i> Notificado a Letrado</div>
      <div class="step active"><i class="fa-solid fa-spinner fa-spin"></i> En Plazo de Presentación</div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .tracker-container {
      background: rgba(15, 23, 42, 0.8);
      padding: 1.8rem;
      border-radius: 16px;
      border: 1px solid rgba(0, 242, 254, 0.3);
      margin-top: 2rem;
    }
    .search-box-3d {
      display: flex;
      gap: 0.8rem;
    }
    .search-box-3d input {
      flex: 1;
      padding: 0.8rem 1rem;
      border-radius: 10px;
      border: 1px solid #1E293B;
      background: #0F172A;
      color: #FFF;
    }
    .search-box-3d button {
      background: #00F2FE;
      color: #0B132B;
      font-weight: 700;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 10px;
      cursor: pointer;
    }
    .status-timeline {
      display: flex;
      justify-content: space-between;
      margin-top: 1.5rem;
      padding-top: 1rem;
      border-top: 1px solid #1E293B;
    }
    .step { font-size: 0.85rem; color: #64748B; display: flex; align-items: center; gap: 0.4rem; }
    .step.completed { color: #10B981; }
    .step.active { color: #FFD700; font-weight: 700; }
  `;
  container.appendChild(style);

  setTimeout(() => {
    const btn = container.querySelector('#btnBuscarNig');
    const result = container.querySelector('#trackerStatusResult');
    btn.addEventListener('click', () => {
      result.style.display = 'flex';
    });
  }, 100);

  return container;
}
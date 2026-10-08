import './styles/estilos.css';
import { Navbar } from './components/navbar.js';
import { Section } from './components/section.js';

const app = document.body;

// Sección 1: Quiénes Somos / Inicio
const contenidoInicio = `
  <div style="background: linear-gradient(135deg, #0F172A, #1E293B); padding: 2.5rem; border-radius: 16px; color: #FFF; border: 1px solid rgba(197,160,89,0.4);">
    <span style="background: rgba(197,160,89,0.2); color: #D4AF37; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">Procuradores Mallorca</span>
    <h1 style="font-size: 2.5rem; margin: 0.8rem 0; font-family: serif; color: #FFF;">Gabriel Tomás Gili</h1>
    <p style="color: #D4AF37; font-weight: 600; font-size: 1.1rem; margin-bottom: 1rem;">Procurador Colegiado ICPIB nº 120</p>
    
    <blockquote style="background: rgba(255,255,255,0.05); border-left: 4px solid #D4AF37; padding: 1rem; margin: 1.5rem 0; font-style: italic; color: #CBD5E1; font-size: 1rem; line-height: 1.6;">
      "El Procurador es el representante procesal del ciudadano", asistiendo a todas las diligencias y actos necesarios del pleito en representación y a favor de su cliente. Los Procuradores transmiten al abogado todas las resoluciones judiciales que recibe, así como los escritos que presenten en nombre del cliente.
    </blockquote>

    <div style="margin-top: 1.5rem; color: #94A3B8; font-size: 0.95rem; line-height: 1.6;">
      <p><strong>Partidos Judiciales:</strong> Palma, Manacor, Inca (otros por encargo).</p>
      <p><strong>Horario de despacho:</strong> Lunes a Viernes: 8:00 AM - 19:00 PM | Sábado - Domingo: Cerrado</p>
    </div>
  </div>
`;

// Sección 2: Servicio Integral
const contenidoServicios = `
  <h2 style="color: #0F172A; font-family: serif; border-bottom: 2px solid #D4AF37; display: inline-block; padding-bottom: 0.4rem;">Servicio Integral</h2>
  <p style="color: #64748B; margin-bottom: 2rem;">Servicios de representación procesal prestados en el despacho:</p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
    <div style="background: #FFF; padding: 1.8rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #E2E8F0;">
      <h3 style="color: #0F172A; margin-bottom: 0.5rem; font-size: 1.1rem;">Control y Señalamientos</h3>
      <p style="color: #64748B; font-size: 0.95rem;">Sistema de control diario, plazos y señalamientos, ejecución del proceso.</p>
    </div>

    <div style="background: #FFF; padding: 1.8rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #E2E8F0;">
      <h3 style="color: #0F172A; margin-bottom: 0.5rem; font-size: 1.1rem;">Impulso Procesal</h3>
      <p style="color: #64748B; font-size: 0.95rem;">Impulso constante del procedimiento judicial en todas sus instancias.</p>
    </div>

    <div style="background: #FFF; padding: 1.8rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #E2E8F0;">
      <h3 style="color: #0F172A; margin-bottom: 0.5rem; font-size: 1.1rem;">Gestión de Tasas y Depósitos</h3>
      <p style="color: #64748B; font-size: 0.95rem;">Consignación de depósitos, liquidación de tasas judiciales y sustitución del letrado en la práctica de diligencias preliminares.</p>
    </div>

    <div style="background: #FFF; padding: 1.8rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #E2E8F0;">
      <h3 style="color: #0F172A; margin-bottom: 0.5rem; font-size: 1.1rem;">Asistencia Judicial</h3>
      <p style="color: #64748B; font-size: 0.95rem;">Acompañamos al cliente en cualquier comparecencia en sede judicial.</p>
    </div>
  </div>
`;

// Sección 3: Contacto y Formulario de Presupuesto
const contenidoContacto = `
  <h2 style="color: #0F172A; font-family: serif; border-bottom: 2px solid #D4AF37; display: inline-block; padding-bottom: 0.4rem;">Solicitud de Presupuesto y Contacto</h2>
  <p style="color: #64748B; margin-bottom: 2rem;">Si precisa presupuesto, se lo facilitaremos a su e-mail rellenando este formulario:</p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
    <div style="background: #0F172A; color: #FFF; padding: 2rem; border-radius: 12px;">
      <h3 style="color: #D4AF37; margin-bottom: 1rem;">Datos de Contacto</h3>
      <p style="margin-bottom: 0.8rem;">📍 <strong>Dirección:</strong> C/ Patronat Obrer 21, 3ºA, 07006 Palma de Mallorca (Baleares)</p>
      <p style="margin-bottom: 0.8rem;">📞 <strong>Teléfono:</strong> +34 971 77 05 74</p>
      <p style="margin-bottom: 0.8rem;">💬 <strong>WhatsApp:</strong> 615 41 43 34</p>
      <p style="margin-bottom: 0.8rem;">✉️ <strong>E-mail:</strong> info@gabrieltomas.com / procurador@gabrieltomas.com</p>
      <p style="margin-top: 1rem; font-size: 0.9rem; color: #94A3B8;">🕒 <strong>Horario:</strong> Lunes a Viernes de 8:00 AM a 19:00 PM</p>
    </div>

    <form onsubmit="event.preventDefault(); alert('Solicitud de presupuesto enviada correctamente.');" style="display: flex; flex-direction: column; gap: 1rem;">
      <input type="text" placeholder="Su nombre o Despacho" required style="padding: 0.8rem; border: 1px solid #CBD5E1; border-radius: 8px;">
      <input type="email" placeholder="Su e-mail para recibir presupuesto" required style="padding: 0.8rem; border: 1px solid #CBD5E1; border-radius: 8px;">
      <textarea rows="4" placeholder="Indique los datos del asunto para presupuestar..." required style="padding: 0.8rem; border: 1px solid #CBD5E1; border-radius: 8px;"></textarea>
      <button type="submit" style="background: #0F172A; color: #D4AF37; padding: 0.9rem; border: none; border-radius: 8px; font-weight: 700; cursor: pointer;">
        Solicitar Presupuesto
      </button>
    </form>
  </div>
`;

// Renderizado mediante el método append requeridos en la práctica
app.append(
  Navbar(),
  Section({ id: 'section1', contenido: contenidoInicio }),
  Section({ id: 'section2', contenido: contenidoServicios }),
  Section({ id: 'section3', contenido: contenidoContacto })
);
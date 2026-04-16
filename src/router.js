import { initChat } from "./chat.js";

console.log("🔥 router ejecutado");

export function router() {
  const app = document.getElementById("app");
  const path = window.location.pathname;

  if (!app) {
    console.error("❌ No existe #app");
    return;
  }

  console.log("📍 Ruta actual:", path);

  if (path === "/") {
    app.innerHTML = `
      <h1>Home</h1>
      <p>Bienvenido al chat de Albert Einstein 🧠</p>
    `;
  }

  else if (path === "/chat") {
  app.innerHTML = `
    <div class="chat-container">

      <div class="chat-header">

        <h1>🧠 Chat con Albert Einstein</h1>
        <p class="subtitle">Pregunta lo que quieras sobre ciencia</p>

        <img 
          src="https://media1.tenor.com/m/pqItA0efXPIAAAAC/albert-einstein-lol.gif" 
          class="einstein-gif"
        />

        <button id="toggle-ia">IA: OFF</button>

      </div>

      <div id="messages"></div>

      <form id="chat-form">
        <input id="chat-input" placeholder="Escribe tu mensaje..." required />
        <button type="submit">Enviar</button>
      </form>

    </div>
  `;

  console.log("🟢 Cargando chat...");
  initChat();
}

  else if (path === "/about") {
    app.innerHTML = `
      <h1>About</h1>
      <p>El proyecto consiste en una aplicación web tipo SPA (Single Page Application) que simula un chat con Albert Einstein. 
      El usuario puede interactuar mediante mensajes y recibir respuestas simuladas o generadas por inteligencia artificial. 
      Se implementó un sistema de respuestas simuladas para evitar el consumo innecesario de tokens durante el desarrollo. 
      Lo anterior permitió probar la lógica del chat sin depender de la API. 
      Asimismo se desarrolló un botón que permite activar o desactivar la inteligencia artificial, cuyas ventajas consisten en:
      Control del consumo de tokens, Mayor estabilidad en pruebas y Mejor control durante la evaluación. ¡Disfruta de la conversación con el científico más famoso del mundo!
      </p>
    `;
  }

  else {
    app.innerHTML = `<h1>404</h1>`;
  }
}
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
      <p>Bienvenida al chat de Einstein 🧠</p>
    `;
  }

  else if (path === "/chat") {
    app.innerHTML = `
      <h1>Chat</h1>
      <div id="messages"></div>
      <form id="chat-form">
        <input id="chat-input" placeholder="Escribe tu mensaje..." required />
        <button type="submit">Enviar</button>
      </form>
    `;

    console.log("🟢 Cargando chat...");
    initChat();
  }

  else if (path === "/about") {
    app.innerHTML = `
      <h1>About</h1>
      <p>Proyecto SPA con IA</p>
    `;
  }

  else {
    app.innerHTML = `<h1>404</h1>`;
  }
}
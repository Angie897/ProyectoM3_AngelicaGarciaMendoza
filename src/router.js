import { initChat } from "./chat.js";

export function router() {
  const app = document.getElementById("app");
  const path = window.location.pathname;

  // 🏠 HOME
  if (path === "/" || path === "/index.html") {
    app.innerHTML = `
      <h1>Home</h1>
      <p>Bienvenida al chat de Einstein 🧠</p>
    `;
  }

  // 💬 CHAT
  else if (path === "/chat") {
    app.innerHTML = `
      <h2>Chat</h2>
      <div id="messages" style="height:300px; overflow:auto; border:1px solid #ccc; padding:10px;"></div>

      <form id="chat-form">
        <input id="chat-input" placeholder="Escribe tu mensaje..." required />
        <button type="submit">Enviar</button>
      </form>
    `;

    // 🔥 ESTO ES LO MÁS IMPORTANTE
    initChat();
  }

  // ℹ️ ABOUT
  else if (path === "/about") {
    app.innerHTML = `
      <h2>About</h2>
      <p>Este proyecto simula a Albert Einstein usando IA.</p>
    `;
  }

  // ❌ RUTA NO ENCONTRADA
  else {
    app.innerHTML = `<h2>404 - Página no encontrada</h2>`;
  }
}
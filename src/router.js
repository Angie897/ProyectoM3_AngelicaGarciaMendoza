import { initChat } from "./chat.js";

export function navigate(path) {
  history.pushState({}, "", path);
  renderRoute();
}

export function renderRoute() {
  const app = document.getElementById("app");
  const path = window.location.pathname;

  if (path === "/") {
    app.innerHTML = "<h1>Home</h1><p>Bienvenida al chat de Einstein 🧠</p>";
  } 
  else if (path === "/chat") {
    app.innerHTML = `
      <section class="chat-container">
        <div id="messages" class="messages"></div>

        <form id="chat-form">
          <input type="text" id="chat-input" placeholder="Escribe tu mensaje..." required />
          <button type="submit">Enviar</button>
        </form>
      </section>
    `;

    initChat();
  } 
  else if (path === "/about") {
    app.innerHTML = "<h1>About</h1><p>Proyecto SPA con IA</p>";
  }
}
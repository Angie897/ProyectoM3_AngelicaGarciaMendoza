import { initChat } from "./chat.js";

const routes = {
  "/": () => {
    document.getElementById("app").innerHTML = `
      <h1>Home</h1>
      <p>Bienvenida al chat de Einstein 🧠</p>
    `;
  },

  "/chat": () => {
    document.getElementById("app").innerHTML = `
      <h1>Chat</h1>
      <div id="chat-container"></div>
      <form id="chat-form">
        <input id="chat-input" placeholder="Escribe tu mensaje..." required />
        <button type="submit">Enviar</button>
      </form>
    `;
    initChat();
  },

  "/about": () => {
    document.getElementById("app").innerHTML = `
      <h1>About</h1>
      <p>Proyecto SPA con IA</p>
    `;
  }
};

export function router() {
  const path = window.location.pathname;
  const route = routes[path] || routes["/"];
  route();
}

// 👇 CLAVE: intercepta clics en <a>
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState(null, "", e.target.href);
    router();
  }
});

// 👇 para botón atrás/adelante
window.addEventListener("popstate", router);
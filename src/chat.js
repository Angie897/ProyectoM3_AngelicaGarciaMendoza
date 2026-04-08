import { messages } from "./store.js";

export function initChat() {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    addMessage("user", text);

    // 👇 llamada a la IA
    sendToAI();

    renderMessages();
    input.value = "";
  });

  renderMessages();
}

function addMessage(role, text) {
  messages.push({ role, text });
}

function renderMessages() {
  const container = document.getElementById("messages");
  container.innerHTML = "";

  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = msg.role === "user" ? "user-msg" : "bot-msg";
    div.textContent = msg.text;
    container.appendChild(div);
  });

  container.scrollTop = container.scrollHeight;
}

// 🔥 FUNCIÓN PARA CONECTAR CON LA IA
async function sendToAI() {
  try {
    const response = await fetch("/api/functions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ messages })
    });

    const data = await response.json();

    addMessage("bot", data.reply);
    renderMessages();

  } catch (error) {
    addMessage("bot", "Error al conectar con la IA ⚠️");
    renderMessages();
  }
}
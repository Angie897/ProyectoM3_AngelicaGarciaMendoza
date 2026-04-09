import { messages } from "./store.js";

export function initChat() {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");

  if (!form || !input) {
    console.error("❌ No se encontró el form o input");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    addMessage("user", text);
    renderMessages();

    input.value = "";

    await sendToAI();
  });

  renderMessages();
}

function addMessage(role, text) {
  messages.push({ role, text });
}

function renderMessages() {
  const container = document.getElementById("messages");
  if (!container) return;

  container.innerHTML = "";

  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = msg.role === "user" ? "user-msg" : "bot-msg";
    div.textContent = msg.text;
    container.appendChild(div);
  });

  container.scrollTop = container.scrollHeight;
}

async function sendToAI() {
  const lastMessage = messages[messages.length - 1];

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBjLpA4Z1Gw2z-CwHXMlrbYt96pJQgu4lQ",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: lastMessage.text }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();
    console.log("DATA COMPLETA:", data);

    let reply = "No response";

    if (data.candidates && data.candidates.length > 0) {
      const parts = data.candidates[0].content.parts;

      if (parts && parts.length > 0) {
        reply = parts.map(p => p.text).join("");
      }
    }

    addMessage("bot", reply);
    renderMessages();

  } catch (error) {
    console.error("❌ ERROR:", error);
    addMessage("bot", "Error al conectar con la IA");
    renderMessages();
  }
}
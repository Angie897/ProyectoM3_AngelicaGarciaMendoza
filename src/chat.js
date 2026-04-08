import { messages } from "./store.js";

export function initChat() {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");

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
  container.innerHTML = "";

  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = msg.role === "user" ? "user-msg" : "bot-msg";
    div.textContent = msg.text;
    container.appendChild(div);
  });

  container.scrollTop = container.scrollHeight;
}

// 🔥 FUNCIÓN CLAVE (IA REAL)
async function sendToAI() {
  const lastMessage = messages[messages.length - 1];

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + import.meta.env.VITE_GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Responde como Albert Einstein de forma clara y educativa:\n${lastMessage.text}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();
    console.log("Respuesta IA:", data);

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    addMessage("bot", reply || "No response");
    renderMessages();

  } catch (error) {
    console.error("Error IA:", error);
    addMessage("bot", "Error al conectar con la IA");
    renderMessages();
  }
}
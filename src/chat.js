import { messages } from "./store.js";

export function initChat() {
  console.log("INIT CHAT FUNCIONANDO"); // 🔥 DEBUG

  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");

  console.log("FORM:", form); // 🔥 DEBUG
  console.log("INPUT:", input); // 🔥 DEBUG

  if (!form || !input) {
    console.error("❌ No se encontró el form o input");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log("🚀 SUBMIT DETECTADO"); // 🔥 DEBUG

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

  if (!container) {
    console.error("❌ No se encontró el contenedor de mensajes");
    return;
  }

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
  console.log("🤖 ENVIANDO A IA..."); // 🔥 DEBUG

  const lastMessage = messages[messages.length - 1];

  try {
    console.log("API KEY:", import.meta.env.VITE_GEMINI_API_KEY);

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
        import.meta.env.VITE_GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: lastMessage.text }]
            }
          ]
        })
      }
    );

    const data = await response.json();
    console.log("DATA:", data); // 🔥 DEBUG

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    addMessage("bot", reply || "No response");
    renderMessages();

  } catch (error) {
    console.error("❌ ERROR IA:", error);
    addMessage("bot", "Error al conectar con la IA");
    renderMessages();
  }
}
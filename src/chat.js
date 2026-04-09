export function initChat() {
  console.log("✅ initChat funcionando");

  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("messages");

  if (!form || !input || !messages) {
    console.error("❌ Elementos del chat no encontrados");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.trim();

    if (!text) return;

    const msg = document.createElement("div");
    msg.textContent = "Tú: " + text;

    messages.appendChild(msg);

    input.value = "";
  });
}
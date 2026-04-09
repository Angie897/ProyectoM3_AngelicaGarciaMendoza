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
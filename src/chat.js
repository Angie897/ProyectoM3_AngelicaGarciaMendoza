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
              parts: [{ text: lastMessage.text }]
            }
          ]
        })
      }
    );

    const data = await response.json();
    console.log("🔍 RESPUESTA REAL:", data);

    // 🔥 MOSTRAR ERROR REAL
    if (data.error) {
      addMessage("bot", "Error API: " + data.error.message);
      renderMessages();
      return;
    }

    // 🔥 RESPUESTA CORRECTA
    if (data.candidates && data.candidates.length > 0) {
      const reply = data.candidates[0].content.parts
        .map(p => p.text)
        .join("");

      addMessage("bot", reply);
    } else {
      addMessage("bot", "La IA no devolvió contenido");
    }

    renderMessages();

  } catch (error) {
    console.error("❌ ERROR:", error);
    addMessage("bot", "Error al conectar con la IA");
    renderMessages();
  }
}
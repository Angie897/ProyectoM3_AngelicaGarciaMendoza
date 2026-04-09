async function sendToAI() {
  console.log("API KEY:", import.meta.env.VITE_GEMINI_API_KEY); // 👈 AQUÍ

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
              parts: [{ text: lastMessage.text }]
            }
          ]
        })
      }
    );

    const data = await response.json();
    console.log("DATA:", data); // 👈 TAMBIÉN AGREGA ESTE

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    addMessage("bot", reply || "No response");
    renderMessages();

  } catch (error) {
    console.error(error);
    addMessage("bot", "Error al conectar con la IA");
    renderMessages();
  }
}
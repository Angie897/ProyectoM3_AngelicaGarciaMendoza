let useAI = false; // 🔘 estado del botón

export function initChat() {
  console.log("✅ initChat funcionando");

  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("messages");
  const toggleBtn = document.getElementById("toggle-ia");

  if (!form || !input || !messages) {
    console.error("❌ Elementos del chat no encontrados");
    return;
  }

  // 🔘 BOTÓN IA ON/OFF
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      useAI = !useAI;
      toggleBtn.textContent = useAI ? "IA: ON 🤖" : "IA: OFF";
    });
  }

  // 🧠 FUNCIÓN PARA AGREGAR MENSAJES
  function addMessage(role, text) {
    const msg = document.createElement("div");
    msg.classList.add(role === "user" ? "user" : "bot");

    msg.textContent =
      role === "user" ? "Tú: " + text : "Einstein: " + text;

    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;

    return msg;
  }

  // 🚀 ENVÍO DEL FORMULARIO
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    // 👤 MENSAJE USUARIO
    addMessage("user", text);
    input.value = "";

    // ⌛ MENSAJE TEMPORAL
    const thinkingMsg = addMessage(
      "bot",
      "Einstein está pensando... ⌛"
    );

    // 🤖 IA ACTIVADA
    if (useAI) {
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: text,
          }),
        });

        // ❌ ERROR HTTP
        if (!response.ok) {
          console.error("❌ Error HTTP:", response.status);
          thinkingMsg.textContent =
            "Einstein: El servidor está ocupado, intenta de nuevo...";
          return;
        }

        const data = await response.json();
        console.log("Respuesta IA:", data);

        // 🔍 RESPUESTA SEGURA
        let reply = "No pude responder eso 🤔";

        if (data?.candidates?.[0]?.content?.parts) {
          reply = data.candidates[0].content.parts
            .map((p) => p.text || "")
            .join(" ");
        }

        thinkingMsg.textContent = "Einstein: " + reply;

      } catch (error) {
        console.error("❌ Error IA:", error);
        thinkingMsg.textContent =
          "Einstein: Error al conectar con la IA";
      }
    }

    // 🧠 SIMULADOR (IA OFF)
    else {
      setTimeout(() => {
        let reply = "";
        const lowerText = text.toLowerCase();

        if (lowerText.includes("hola")) {
          reply = "Hola, soy Einstein 🧠 ¿en qué puedo ayudarte?";
        } else if (lowerText.includes("relatividad")) {
          reply =
            "La relatividad explica cómo el tiempo y el espacio están conectados.";
        } else if (lowerText.includes("tiempo")) {
          reply =
            "El tiempo no es absoluto, depende del observador.";
        } else if (lowerText.includes("gravedad")) {
          reply =
            "La gravedad es la curvatura del espacio-tiempo.";
        } else {
          reply =
            "Interesante pregunta 🤔, déjame pensarlo mejor...";
        }

        thinkingMsg.textContent = "Einstein: " + reply;
      }, 1500);
    }
  });
}
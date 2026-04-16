# Problema: Error con importación de initChat

## Problema

El chat no funcionaba y en la consola aparecía un error indicando que la función `initChat` no estaba definida o no se encontraba.

---

## Pregunta

¿Por qué me aparece un error que dice que initChat no existe o no se encuentra y cómo puedo hacer para que funcione correctamente?

---

## Respuesta

Este error ocurre cuando la función no está bien exportada o el nombre no coincide entre el archivo donde se define y donde se importa.

La solución fue exportar correctamente la función usando: export function initChat() {} y verificar que la importación fuera correcta: import { initChat } from "./chat.js"; Esto permitió que ambos archivos se conectaran correctamente y que la función se ejecutara al cargar la vista del chat.

## ¿Qué hacer?

Asegurar que la función esté correctamente exportada en `chat.js` y correctamente importada en `router.js`.
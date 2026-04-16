# Problema: Error 403 y fallas en despliegue

## Problema

Al conectar la IA, aparecía un error 403 (Forbidden) y el chat mostraba el mensaje "No pude responder eso". Además, en despliegue algunas rutas no funcionaban correctamente.

---

## Pregunta

¿Por qué la IA no responde al elaborar una pregunta dentro del chat y aparece un error 403 y cómo puedo hacer para que funcione correctamente?

---

## Respuesta

El error 403 ocurre cuando la API bloquea el acceso, generalmente porque la API key está mal configurada, restringida o ha sido detectada como expuesta en el frontend.

En este caso, la clave anterior fue bloqueada por seguridad, lo que impedía obtener respuestas de la IA.

La solución fue generar una nueva API key, asegurarse de que no tuviera restricciones y reemplazarla en el código.

Una vez actualizada, la conexión con la IA funcionó correctamente y el chat pudo responder sin problemas.

## ¿Qué hacer?

Generar una nueva API key sin restricciones y asegurarse de que esté correctamente configurada en el proyecto.
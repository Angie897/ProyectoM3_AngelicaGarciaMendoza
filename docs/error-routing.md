# Problema: Cannot GET /chat

## Problema

Al dar clic en la opción "Chat" o intentar acceder directamente a la ruta `/chat`, aparecía el error: Cannot GET /chat

---

## Pregunta

¿Por qué cuando doy clic en Chat o entro a /chat me aparece "Cannot GET /chat" si ya tengo esa ruta en mi proyecto y cómo puedo hacer para que funcione?

---

## Respuesta

Este error ocurre porque el proyecto es una SPA (Single Page Application), lo que significa que las rutas como `/chat` o `/about` no existen físicamente en el servidor.

Cuando el navegador intenta acceder directamente a `/chat`, el servidor busca un archivo con ese nombre y al no encontrarlo, devuelve el error.

La solución fue implementar un router en JavaScript que detecta la ruta actual usando `window.location.pathname` y renderiza el contenido correspondiente dinámicamente.

De esta manera, la navegación se controla completamente desde el cliente sin necesidad de recargar la página ni depender del servidor.

## ¿Qué hacer?

Implementar un sistema de enrutamiento en JavaScript (router) que controle las rutas desde el cliente y evitar acceder directamente a rutas como `/chat` desde la URL.
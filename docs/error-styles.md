# Problema: Estilos de mensajes incorrectos

## Problema

Los mensajes del chat no se veían correctamente, ya que no tenían forma de burbuja, se veían cuadrados o todos con el mismo estilo sin distinguir entre usuario y IA.

---

## Pregunta

¿Por qué mis mensajes no se ven como burbujas o no se diferencian entre usuario e IA y cómo puedo hacer para mejorar el diseño?

---

## Respuesta

El problema ocurría porque había un estilo general (`#messages div`) que aplicaba el mismo diseño a todos los mensajes, sobrescribiendo cualquier diferenciación.

La solución fue eliminar ese estilo general y usar clases específicas:

* `.user` para mensajes del usuario (alineados a la derecha)
* `.bot` para mensajes de la IA (alineados a la izquierda)

Esto permitió separar visualmente los mensajes y aplicar estilos tipo burbuja, mejorando la experiencia del usuario.

## ¿Qué hacer?

Eliminar estilos generales que afectaban todos los mensajes y crear clases específicas para cada tipo de mensaje.

---
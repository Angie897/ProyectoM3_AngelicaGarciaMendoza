# Project Documentation - Chat Einstein SPA, Descripción 

---

El proyecto consiste en una aplicación web tipo SPA (Single Page Application) que simula un chat con Albert Einstein. El usuario puede interactuar mediante mensajes y recibir respuestas simuladas o generadas por inteligencia artificial.

---

## Objetivo

Aplicar conceptos de:

* Navegación SPA
* Manipulación del DOM
* Consumo de APIs
* Diseño responsive
* Experiencia de usuario (UX)

---

## Funcionalidades

* Navegación sin recargar la página
* Chat interactivo
* Mensajes tipo burbuja
* Indicador "Einstein está pensando..."
* Simulación de respuestas (sin consumo de tokens)
* Integración con IA (Gemini API)
* Botón ON/OFF para controlar el uso de IA

---

## Decisiones Técnicas

### Uso de simulador antes de IA

Se implementó un sistema de respuestas simuladas para evitar el consumo innecesario de tokens durante el desarrollo. Esto permitió probar la lógica del chat sin depender de la API.

---

### Botón ON/OFF IA

Se desarrolló un botón que permite activar o desactivar la inteligencia artificial.

Ventajas:

* Control del consumo de tokens
* Mayor estabilidad en pruebas
* Mejor control durante la evaluación

---

### Diseño tipo chat

Se utilizó un diseño inspirado en aplicaciones de mensajería:

* Usuario alineado a la derecha
* IA alineada a la izquierda
* Burbujas de conversación

Esto mejora la claridad y experiencia del usuario.

---

### Indicador de carga

Se agregó el mensaje: "Einstein está pensando..." Esto mejora la interacción y simula el comportamiento de una IA real.

---

## Responsive Design

El diseño fue adaptado a:

* Mobile: 320px
* Tablet: 768px
* Desktop: 1024px

Se utilizaron media queries para garantizar una experiencia adecuada en todos los dispositivos.

---

## Despliegue en Producción

La aplicación fue desplegada en producción utilizando la plataforma Vercel, lo que permitió alojar tanto el frontend como las funciones serverless encargadas de gestionar la comunicación con la API de inteligencia artificial. Se configuraron variables de entorno para proteger la API key, evitando su exposición en el cliente. Además, se verificó el correcto funcionamiento de la aplicación en el entorno de producción, asegurando la sincronización entre el desarrollo local, el repositorio en GitHub y el despliegue final. A continuación, se proporciona la URL pública para acceder a la aplicación:

https://proyecto-m3-angelica-garcia-mendoza-git-main-angie897s-projects.vercel.app/

---

## Documentación de errores

Dentro de la carpeta `docs/` se incluyen archivos individuales que documentan los principales errores encontrados durante el desarrollo del proyecto. En cada uno se describe el problema presentado, la pregunta realizada a la IA para entender la causa del error y la solución aplicada para resolverlo. Esta información se organiza de manera independiente al README con el objetivo de mantener una documentación más clara, estructurada y enfocada en el proceso de aprendizaje.

---

## Mejoras Implementadas

* Diseño moderno tipo chat
* Animaciones suaves
* Botón interactivo con efectos visuales
* Separación de lógica (router, chat)
* Código más limpio y organizado

---

## Conclusión

El proyecto integra una interfaz interactiva, navegación SPA y una simulación eficiente de inteligencia artificial, con la posibilidad de conexión a una API real. Se validó el estado de despliegue en producción y se verificó la correcta sincronización entre entorno local, repositorio y servidor.

---

## Creadora

---

Angélica García Mendoza, Desarrolladora Web Full Stack en Henry
import { router } from "./router.js";

window.addEventListener("DOMContentLoaded", router);

document.body.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]"); // 🔥 SOLUCIÓN REAL

  if (link) {
    e.preventDefault();

    const url = link.getAttribute("href");

    history.pushState(null, "", url);
    router();
  }
});

window.addEventListener("popstate", router);
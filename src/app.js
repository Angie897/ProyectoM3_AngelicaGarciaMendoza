import { router } from "./router.js";

window.addEventListener("DOMContentLoaded", router);

document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();

    const url = e.target.getAttribute("href"); // 🔥 IMPORTANTE

    history.pushState(null, "", url);
    router();
  }
});

window.addEventListener("popstate", router);
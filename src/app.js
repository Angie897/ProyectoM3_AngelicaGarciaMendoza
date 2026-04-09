import { router } from "./router.js";

function navigate(url) {
  history.pushState(null, null, url);
  router(); // 🔥 ESTO ES LO QUE FALTABA
}

document.addEventListener("DOMContentLoaded", () => {
  router();
});

document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");

  if (link) {
    e.preventDefault();
    navigate(link.getAttribute("href"));
  }
});

window.addEventListener("popstate", router);
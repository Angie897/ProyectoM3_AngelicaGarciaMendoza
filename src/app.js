import { navigate, renderRoute } from "./router.js";

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});

window.addEventListener("popstate", renderRoute);

renderRoute();
import "regenerator-runtime";
import "../styles/main.css";
import App from "./views/app";
import swRegister from "./utils/sw-register";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const app = new App({
  button: document.querySelector("#hamburger"),
  drawer: document.querySelector("#nav"),
  content: document.querySelector("main"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});

// assets/js/dialog.js
const dialog = document.getElementById("signUpDialog");
const main = document.querySelector("main");

function openDialog() {
  dialog.showModal();
  main.classList.add("invisible");
}



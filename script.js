const chec = document.querySelector("#chec");
const body = document.querySelector("body");

chec.addEventListener("click", () => {
  if (chec.checked) {
    body.classList.toggle("body-claro");
  } else {
    body.classList.toggle("body-claro");
  }
});

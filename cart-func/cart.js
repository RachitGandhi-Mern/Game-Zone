const cartIcon = document.querySelector(".cart-icon");
const body = document.querySelector("body");
const closeBtn = document.querySelector(".close");

cartIcon.addEventListener("click", () => {
  body.classList.toggle("showcart");
});

closeBtn.addEventListener("click", () => {
  body.classList.remove("showcart");
});

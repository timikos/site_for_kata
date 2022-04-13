let modalCall = document.querySelector("#modal__call");
let modalFeedback = document.querySelector("#modal__feedback");

let btnCall = document.querySelector("#call");
let btnFeedback = document.querySelector(".header__elem4");

let closeCall = document.querySelectorAll(".close")[0];
let closeFeedback = document.querySelectorAll(".close")[1];


btnCall.addEventListener("click", function () {
  modalCall.style.display = "block";
})

closeCall.addEventListener("click", function () {
  modalCall.style.display = "none";
})

window.addEventListener("click", function (event) {
  if (event.target === modalCall) {
    modalCall.style.display = "none";
  }
})

btnFeedback.addEventListener("click", function () {
  modalFeedback.style.display = "block";
})

closeFeedback.addEventListener("click", function () {
  modalFeedback.style.display = "none";
})

window.addEventListener("click", function (event) {
  if (event.target === modalFeedback) {
    modalFeedback.style.display = "none";
  }
})



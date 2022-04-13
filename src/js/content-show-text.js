let info2 = document.querySelector(".info__p2");
let btnShowText = document.querySelector(".content__button-more-info");

let statusMenuOpenedText = true;

btnShowText.addEventListener("click", function (evt){
  if (statusMenuOpenedText) {
    evt.preventDefault();
    info2.classList.add("info__show");
    btnShowText.innerHTML = "<img src=\"img/helpers/arrow-up.svg\" alt=\"\">\n" +
      "          <a href=\"\"><b>Скрыть</b></a>";
    statusMenuOpenedText = false;
  } else {
    evt.preventDefault();
    info2.classList.remove("info__show");
    btnShowText.innerHTML = "<img src=\"img/helpers/arrow-down.svg\" alt=\"\">\n" +
      "          <a href=\"\"><b>Читать далее</b></a>";
    statusMenuOpenedText = true;
  }
});

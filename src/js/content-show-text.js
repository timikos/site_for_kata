let info2 = document.querySelector(".info__p2");
let info3 = document.querySelector(".info__p3");
let btnShowText = document.querySelector(".content__button-more-info");

let statusMenuOpenedText = true;

btnShowText.addEventListener("click", function (){
  if (statusMenuOpenedText) {
    info2.style.display = "block";
    info3.style.display = "inline";
    btnShowText.innerHTML = "";
    statusMenuOpenedText = false;
  } else {
    info2.style.display = "none";
    info3.style.display = "none";
    statusMenuOpenedText = true;
  }

});

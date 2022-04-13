let showAllBrands = document.querySelector(".brands-menu__show-all");
let showAllViewTech = document.querySelector(".view-tech-menu__show-all");

let textShowAllBrands = document.querySelector(".brands-text__show-all");
let textShowAllViewTech = document.querySelector(".view-tech-text__show-all");

let elemBrand1 = document.querySelector(".brand-9");
let elemBrand2 = document.querySelector(".brand-10");
let elemBrand3 = document.querySelector(".brand-11");

let elemViewTech1 = document.querySelector(".view-tech__case-4");

let statusMenuOpenedBrand = true;
let statusMenuOpenedViewTech = true;

showAllBrands.addEventListener("click", function (){
    if (statusMenuOpenedBrand) {
      elemBrand1.style.display = "inline";
      elemBrand2.style.display = "inline";
      elemBrand3.style.display = "inline";
      textShowAllBrands.innerHTML = "<p>Скрыть</p>";
      statusMenuOpenedBrand = false;
    } else {
      elemBrand1.style.display = "none";
      elemBrand2.style.display = "none";
      elemBrand3.style.display = "none";
      textShowAllBrands.innerHTML = "<p>Показать всё</p>";
      statusMenuOpenedBrand = true;
    }

});

showAllViewTech.addEventListener("click", function (){
  if (statusMenuOpenedViewTech) {
    elemViewTech1.style.display = "block";
    textShowAllViewTech.innerHTML = "<p>Скрыть</p>";
    statusMenuOpenedViewTech = false;
  } else {
    elemViewTech1.style.display = "none";
    textShowAllViewTech.innerHTML = "<p>Показать всё</p>";
    statusMenuOpenedViewTech = true;
  }
});


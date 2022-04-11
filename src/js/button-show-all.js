let showAll = document.querySelector(".brands-menu__show-all");
let textShowAll = document.querySelector(".text__show-all");

let elem1 =document.querySelector(".brand-1");
let elem2 =document.querySelector(".brand-2");
let elem3 =document.querySelector(".brand-3");
let elem4 =document.querySelector(".brand-4");
let elem5 =document.querySelector(".brand-5");
let elem6 =document.querySelector(".brand-6");
let elem7 =document.querySelector(".brand-7");
let elem8 =document.querySelector(".brand-8");
let elem9 =document.querySelector(".brand-9");
let elem10 =document.querySelector(".brand-10");
let elem11 =document.querySelector(".brand-11");


let statusMenuOpened = true;
showAll.addEventListener("click", function (){
    if (statusMenuOpened) {
        elem9.style.display = "block";
        elem10.style.display = "block";
        elem11.style.display = "block";
        textShowAll.innerHTML = "<p>Скрыть</p>";
        statusMenuOpened = false;
    } else {
        elem9.style.display = "none";
        elem10.style.display = "none";
        elem11.style.display = "none";
        textShowAll.innerHTML = "<p>Показать всё</p>";
        statusMenuOpened = true;
    }
});


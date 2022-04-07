let showAll = document.querySelector(".show-all__menu");
let textShowAll = document.querySelector(".text__show-all");

let elem1 =document.querySelector(".elem__menu1");
let elem2 =document.querySelector(".elem__menu2");
let elem3 =document.querySelector(".elem__menu3");
let elem4 =document.querySelector(".elem__menu4");
let elem5 =document.querySelector(".elem__menu5");
let elem6 =document.querySelector(".elem__menu6");
let elem7 =document.querySelector(".elem__menu7");
let elem8 =document.querySelector(".elem__menu8");
let elem9 =document.querySelector(".elem__menu9");
let elem10 =document.querySelector(".elem__menu10");
let elem11 =document.querySelector(".elem__menu11");


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


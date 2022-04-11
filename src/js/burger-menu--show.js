let elemBur = document.querySelector(".header__elem1");
let burMenu = document.querySelector('.burger__container');
let backIcon = document.querySelector( '.burger-menu__btn-back');
let mainContent = document.querySelector(".main__content");

document.addEventListener('click', function(evt) {
  if (window.innerWidth < 1440 && evt.target.closest(".header__elem1")) {
    burMenu.classList.toggle("burger__container_active");
  } else if (window.innerWidth < 1440 && (!evt.target.closest(".burger__container"))
    || (evt.target.closest(".burger-menu__btn-back"))) {
    burMenu.classList.remove("burger__container_active");
    evt.preventDefault(backIcon);
  }
});


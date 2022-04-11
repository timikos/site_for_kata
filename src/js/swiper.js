import Swiper, {Pagination} from 'swiper';

const slider = document.querySelector(".brands-menu__brands");
let mySwiper;

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile == "false"){
    mySwiper = new Swiper(slider, {
      slidesPerView:1,
      loop: true,
      slideClass: "swiper-slide",
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    });
    slider.dataset.mobile = "true";
  }
  if (window.innerWidth >= 768) {
    slider.dataset.mobile = "false";

    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
};

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});

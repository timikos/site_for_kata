let microMenu = document.querySelectorAll('.micro-menu__container')[0].children;

for (const elem of microMenu) {
  elem.addEventListener('click', () => {
    for (const elem of microMenu) {
      elem.classList.remove("micro-menu--active")
    }
    elem.classList.add("micro-menu--active");
    }
  );
}




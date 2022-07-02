const burger = document.querySelector(".burger");
const menuBurger = document.querySelector(".menu-burger");

let burgerClickIndex = 0;

function menuActive() {
    console.log(burgerClickIndex);
  if (burgerClickIndex == 0) {
    menuBurger.classList.add("active");
    burgerClickIndex ++;
  } else {
    menuBurger.classList.remove("active");
    burgerClickIndex --;
  }
}

burger.addEventListener("click", menuActive);


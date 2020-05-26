
let current;
let next;

const slides = document.querySelector(".main");
const prevBtn = document.querySelector(".btn__prev");
const nextbtn = document.querySelector(".btn__next");

function startSlider() {
  current = document.querySelector(".slide--current");
  next = current.nextElementSibling || slides.firstElementChild;
}

function applyClasses() {
  current.classList.add("slide--current");
  next.classList.add("slide--next");
}

function move(direction) {
  const classesToremove = ["slide--current", "slide--next"];
  current.classList.remove(...classesToremove);
  next.classList.remove(...classesToremove);

  if (direction == 'back') {

    [current, next] = [
      current.nextElementSibling || slides.firstElementChild,
      current
    ];

  } else {
    [current, next] = [
      current.previousElementSibling || slides.lastElementChild,
      current
    ];
  }

  applyClasses();

  const prevBtn = current.querySelector(".btn__prev");
  const nextbtn = current.querySelector(".btn__next");

  prevBtn.addEventListener('click', () => move('back'));
  nextbtn.addEventListener('click', move);
}

startSlider();
applyClasses();

prevBtn.addEventListener('click', () => move('back'));
nextbtn.addEventListener('click', move);



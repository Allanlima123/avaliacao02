const menuDrop = document.querySelector(".menu--drop");
const dropDownBox = document.querySelector(".drop--down--box");
const logoAside = document.querySelector(".logo--aside");
const header = document.querySelector(".header");
const menuBtn = document.querySelector("#menu-btn > i");
const boxAside = document.querySelector(".box-aside");
const iconFaXmark = document.querySelector(".fa-xmark");

menuDrop.addEventListener("mousemove", () => {
  dropDownBox.classList.add("active--menu");
});

menuDrop.addEventListener("mouseout", () => {
  dropDownBox.classList.remove("active--menu");
});

// logo--rigth //
window.addEventListener("scroll", () => {
  const scrollLogo = window.scrollY;

  scrollLogo > 50
    ? logoAside.classList.add("active")
    : logoAside.classList.remove("active");
});

const activateAndDeactivateMenu = () => {
  menuBtn.classList.toggle('fa-xmark');
  boxAside.classList.toggle("active--box--aside");
};

menuBtn.addEventListener("click", activateAndDeactivateMenu);
iconFaXmark.addEventListener("click", activateAndDeactivateMenu)

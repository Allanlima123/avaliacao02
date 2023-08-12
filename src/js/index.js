const menuDrop = document.querySelector(".menu--drop");
const dropDownBox = document.querySelector(".drop--down--box");
const logoAside = document.querySelector(".logo--aside");

menuDrop.addEventListener("mousemove", () => {
  dropDownBox.classList.add("active--menu");
});

menuDrop.addEventListener("mouseout", () => {
  dropDownBox.classList.remove("active--menu");
});

// ======//====== //
// logo--rigth //

window.addEventListener("scroll", () => {
  const scrollLogo = window.scrollY;
  scrollLogo > 50
    ? logoAside.classList.add("active")
    : logoAside.classList.remove("active");
});

const menuDrop = document.querySelector(".menu--drop");
const dropDownBox = document.querySelector(".drop--down--box");
const logoAside = document.querySelector(".logo--aside");
const header = document.querySelector(".header")
const menuBtn = document.querySelector("#menu-btn");
const boxAside = document.querySelector(".box-aside");

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

  if(scrollLogo > 50){
    logoAside.classList.add("active")
  }else{
    logoAside.classList.remove("active");
  }
});

const activeMenuAside = () =>{
  boxAside.classList.toggle("active--box--aside")
}

menuBtn.addEventListener("click", activeMenuAside);

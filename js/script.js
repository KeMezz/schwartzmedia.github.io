const header = document.querySelector("header");
const logo = header.querySelector(".header___logo");
const menuIcon = header.querySelector(".menu___hamburger");

const onScroll = () => {
  console.log("scroll");
  if (scrollY === 0) {
    header.style.boxShadow = "none";
    header.classList.remove("active");
    logo.classList.remove("active");
    menuIcon.classList.add("active");
  } else {
    header.style.boxShadow = "0 5px 5px lightgray";
    header.classList.add("active");
    logo.classList.add("active");
    menuIcon.classList.remove("active");
  }
};

onScroll();
window.addEventListener("scroll", onScroll);

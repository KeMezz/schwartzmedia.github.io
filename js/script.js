const header = document.querySelector("header");
const logo = header.querySelector(".logo");

const onScroll = () => {
    console.log("scroll")
    if (scrollY === 0) {
        header.style.boxShadow = "none";
    } else {
        header.style.boxShadow = "0 5px 5px lightgray";
    }
}

window.addEventListener("scroll", onScroll);
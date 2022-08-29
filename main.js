AOS.init();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const bodyes = document.querySelector("body")

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    bodyes.classList.toggle("lock");

})
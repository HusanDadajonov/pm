let elShopBtn = document.querySelector(".header__shop-btn");
let elHeaderBlock = document.querySelector(".header__block");
let elBurgerBtn = document.querySelector(".header__burger-btn");
let elNav = document.querySelector(".nav");
let elCloseNav = document.querySelector(".nav__close");

elBurgerBtn.addEventListener("click", function(){
    elNav.classList.add("show-nav");
});

elShopBtn.addEventListener("click", function(){
    elHeaderBlock.classList.toggle("show-header-block");
});

elCloseNav.addEventListener("click",function (){
    elNav.classList.remove("show-nav");
})


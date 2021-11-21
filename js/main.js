let elShopBtn = document.querySelector(".header__shop-btn");
let elHeaderBlock = document.querySelector(".header__block");
let elBurgerBtn = document.querySelector(".header__burger-btn");
let elNav = document.querySelector(".nav");
let elCloseNav = document.querySelector(".nav__close");
let elAcardionBtn = document.querySelector(".card__btn");
let elAccardion = document.querySelector(".services__accardion");
let elAcardionClose = document.querySelector(".card__btn-close")

elBurgerBtn.addEventListener("click", function(){
    elNav.classList.add("show-nav");
});

elAcardionBtn.addEventListener("click",function(){
    elAccardion.classList.add("show-accardion");
});

elAcardionClose.addEventListener("click",function(){
    elAccardion.classList.remove("show-accardion");
});

elShopBtn.addEventListener("click", function(){
    elHeaderBlock.classList.toggle("show-header-block");
});

elCloseNav.addEventListener("click",function (){
    elNav.classList.remove("show-nav");
})


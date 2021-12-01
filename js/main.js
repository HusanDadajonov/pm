let elBurgerBtn = document.querySelector(".header__burger-btn");
let elNavBlock = document.querySelector(".nav__block");
let elNavMenuBtn = document.querySelector(".nav__menu-btn");
let elBodyBg = document.querySelector(".body__bg");
let elAboutBtn = document.querySelector(".about__btn");
let elRemovedDesc = document.querySelectorAll(".about__desc--remove");
let elShowDescOne = document.querySelector(".about__desc--show1");
let elShowDescTwo = document.querySelector(".about__desc--show2");
let elCardBtn = document.querySelector(".card__btn");
let elAccardion = document.querySelector(".acardion");
let elServiceList = document.querySelector(".services__list");
let sum = 1;
let sum2 = 1;

elBurgerBtn.addEventListener("click", moreFunc);
elNavMenuBtn.addEventListener("click", hiddenFunc);
elAboutBtn.addEventListener("click", showMore);
elCardBtn.addEventListener("click", showCards);

function moreFunc(e){
    elNavBlock.style.transform = "translateX(0px)";
    elBodyBg.style.opacity = "0.4";
    elBodyBg.style.visibility = "visible";
    elBodyBg.style.zIndex = "400";
}

function hiddenFunc(e){
    elNavBlock.style.transform = "translateX(100%)";
    elBodyBg.style.opacity = "0";
    elBodyBg.style.visibility = "hidden";
    elBodyBg.style.zIndex = "-1";
}

function showMore(e){
    if(sum == 1){
        for(let i = 0; i < elRemovedDesc.length; i++){
            elRemovedDesc[i].style.display = "none";
        }
        elShowDescOne.innerHTML = "Наша Компания долгое время работает на рынке Тошкент город.Опыт наших мастеров в сфере услуг по ремонту и реставрации мебели более 10 лет.";
        elShowDescTwo.innerHTML = "Мы оказываем следующие услуги: ремонт мебели, реставрация мебели,обивка мебели,перетяжка мебели. Услуги по ремонту мебели,обивке мебели,перетяжке мебели, осуществляем как на дому,так и в нашей мастерской,производим реставрацию старинной,антикварной и современной мебели,профессионально восстановим Вашу мягкую,корпусную или кожаную мебель и на все выполненные работы предоставим гарантию";
        elAboutBtn.innerHTML = "Закрыть";
        sum = 0;
    }

    else if(sum == 0){
        for(let i = 0; i < elRemovedDesc.length; i++){
            elRemovedDesc[i].style.display = "block";
        }
        elShowDescOne.innerHTML = "";
        elShowDescTwo.innerHTML = "";
        elAboutBtn.innerHTML = "Подробный";
        sum = 1;
    }
}

function showCards(e){
    elServiceList.classList.toggle("padding-none");
    if(sum2 == 1){
        elCardBtn.innerHTML = "Закрыть";
        elAccardion.style.display = "grid";
        sum2 = 0
    }

    else if(sum2 == 0){
        elCardBtn.innerHTML = "Подробный";
        elAccardion.style.display = "none";
        sum2 = 1;
    }
}
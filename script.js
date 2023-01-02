"use strict";


//******** Click Languages Start ********
const languagesBtn = document.querySelectorAll("span");

const uzBtn = document.querySelector("#uz"),
    ruBtn = document.querySelector("#ru"),
    enBtn = document.querySelector("#eng");

languagesBtn.forEach(item => {
    item.addEventListener("click", () => {
        if (item.id == "uz") {
            uzBtn.classList.add("active");
            ruBtn.classList.remove("active");
            enBtn.classList.remove("active");
        } else if (item.id == "ru") {
            ruBtn.classList.add("active");
            uzBtn.classList.remove("active");
            enBtn.classList.remove("active");
        } else if (item.id == "eng") {
            ruBtn.classList.remove("active");
            uzBtn.classList.remove("active");
            enBtn.classList.add("active");
        }
    });
});
//******** Click Languages End ********


//******** Click Toggles Start ********
const menuBtn = document.querySelector(".click__burger-btn");

const topLine = document.querySelector("#top"),
    bottomLine = document.querySelector("#bottom");
const hide = document.querySelector(".click__hidden-service");
const hideSection = document.querySelector(".hidden__section");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        topLine.style.transform = "rotate(45deg)";
        bottomLine.style.transform = "rotate(-45deg)";
        hide.classList.add("hidden");
        hideSection.style.display = "flex";
        menuOpen = true;
    } else {
        topLine.style.transform = "rotate(0deg)";
        topLine.style.transform = "translateY(5px)";
        bottomLine.style.transform = "rotate(0deg)";
        bottomLine.style.transform = "translateY(-5px)";
        hide.classList.remove("hidden");
        hideSection.style.display = "none";
        menuOpen =false
    }
});

//******** Click Toggles End ********

// Click Responsive

const container = document.querySelector(".container");

const clickHeader = document.querySelector("header");

const cashback = document.querySelector(".cashback"),
      market = document.querySelector(".market"),
      partner = document.querySelector(".partner");
    
let valWidth = container.width;





const leftBtn = document.querySelectorAll("#left"),
      rightBtn = document.querySelectorAll("#right");


const slider = document.querySelectorAll(".click__news-slider");


slider.forEach ((item, i) => {
    let sliderContainer = item.getBoundingClientRect();
    let sliderWidth = sliderContainer.width;

    rightBtn[i].addEventListener("click", () => {
        item.scrollLeft += sliderWidth / 3;
    });
    
    leftBtn[i].addEventListener("click", () => {
        item.scrollLeft -= sliderWidth / 3;
    });

});
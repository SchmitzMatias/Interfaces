"use strict";


document.addEventListener("DOMContentLoaded", function () {
    let gwen = document.querySelector(".gwens7");
    let peter = document.querySelector(".peters7");
    let miles = document.querySelector(".miless7");

    let section7 = document.querySelector(".section7");

    gwen.onmouseover = function () {
        section7.classList.add("gwen-active");
        section7.style.minHeight = "840px";
        peter.style.filter = "blur(3px)";
        peter.style.transform = "scale(0.9)";
        miles.style.filter = "blur(3px)";
        miles.style.transform = "scale(0.9)";
        gwen.style.transform = "scale(1.1)";

    }

    gwen.onmouseleave = function () {
        section7.classList.remove("gwen-active");
        section7.style.minHeight = "720px";
        peter.style.filter = "blur(0px)";
        peter.style.transform = "scale(1)";
        miles.style.filter = "blur(0px)";
        miles.style.transform = "scale(1)";
        gwen.style.transform = "scale(1)";
    }

    peter.onmouseover = function () {
        section7.classList.add("peter-active");
        section7.style.minHeight = "840px";
        gwen.style.filter = "blur(3px)";
        gwen.style.transform = "scale(0.9)";
        miles.style.filter = "blur(3px)";
        miles.style.transform = "scale(0.9)";
        peter.style.transform = "scale(1.1)";

    }

    peter.onmouseleave = function () {
        section7.classList.remove("peter-active");
        section7.style.minHeight = "720px";
        gwen.style.filter = "blur(0px)";
        gwen.style.transform = "scale(1)";
        miles.style.filter = "blur(0px)";
        miles.style.transform = "scale(1)";
        peter.style.transform = "scale(1)";
    }

    miles.onmouseover = function () {
        section7.classList.add("miles-active");
        section7.style.minHeight = "840px";
        peter.style.filter = "blur(3px)";
        peter.style.transform = "scale(0.9)";
        gwen.style.filter = "blur(3px)";
        gwen.style.transform = "scale(0.9)";
        miles.style.transform = "scale(1.1)";

    }

    miles.onmouseleave = function () {
        section7.classList.remove("miles-active");
        section7.style.minHeight = "720px";
        peter.style.filter = "blur(0px)";
        peter.style.transform = "scale(1)";
        gwen.style.filter = "blur(0px)";
        gwen.style.transform = "scale(1)";
        miles.style.transform = "scale(1)";
    }
})

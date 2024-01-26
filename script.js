"use strict";
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const slide4 = document.querySelector(".slide4");
const slide5 = document.querySelector(".slide5");

const btn1 = document.querySelector(".btnSlide1");
const btn2 = document.querySelector(".btnSlide2");
const btn3 = document.querySelector(".btnSlide3");
const btn4 = document.querySelector(".btnSlide4");
const btn5 = document.querySelector(".btnSlide5");

const btnRegister = document.querySelector(".register");
const btnLogin = document.querySelector(".logIn");

const overLay = document.querySelector(".overlay");

const formRegister = document.querySelector(".formRegister");
const formLogin = document.querySelector(".formLogin");
const closeBtn = document.querySelector(".closeBtn");

btn1.addEventListener("click", function () {
  slide1.classList.remove("hidden");
  slide2.classList.add("hidden");
  slide3.classList.add("hidden");
  slide4.classList.add("hidden");
  slide5.classList.add("hidden");
});
btn2.addEventListener("click", function () {
  slide1.classList.add("hidden");
  slide2.classList.remove("hidden");
  slide3.classList.add("hidden");
  slide4.classList.add("hidden");
  slide5.classList.add("hidden");
});
btn3.addEventListener("click", function () {
  slide1.classList.add("hidden");
  slide2.classList.add("hidden");
  slide3.classList.remove("hidden");
  slide4.classList.add("hidden");
  slide5.classList.add("hidden");
});
btn4.addEventListener("click", function () {
  slide1.classList.add("hidden");
  slide2.classList.add("hidden");
  slide3.classList.add("hidden");
  slide4.classList.remove("hidden");
  slide5.classList.add("hidden");
});
btn5.addEventListener("click", function () {
  slide1.classList.add("hidden");
  slide2.classList.add("hidden");
  slide3.classList.add("hidden");
  slide4.classList.add("hidden");
  slide5.classList.remove("hidden");
});

btnRegister.addEventListener("click", function () {
  formRegister.classList.remove("sab");
  overLay.classList.remove("sab");
  console.log("done");
});

btnLogin.addEventListener("click", function () {
  formLogin.classList.toggle("sab");
  overLay.classList.toggle("sab");
  console.log("ryg");
});

closeBtn.addEventListener("click", function () {
  formRegister.classList.add("sab");
  overLay.classList.add("sab");
});

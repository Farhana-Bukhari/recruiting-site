"use strict";
const btnRegister = document.querySelector(".register");
const btnLogin = document.querySelector(".logIn");

const overLay = document.querySelector(".overlay");

const formRegister = document.querySelector(".formRegister");
const formLogin = document.querySelector(".formLogin");
const closeBtn = document.querySelector(".closeBtn");

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

"use strict";

var popupOpenButton = document.querySelector(".explore-btn");
var popupWindow = document.querySelector(".popup-wrapper");
var popupCloseButton = document.querySelector(".close-btn");
var inputFocus = popupWindow.querySelector("input");

popupOpenButton.addEventListener("click", function () {
  popupWindow.classList.add("popup-wrapper-open");
  inputFocus.focus();
});

popupCloseButton.addEventListener("click", function () {
  popupWindow.classList.remove("popup-wrapper-open");
  popupOpenButton.focus();
});

window.addEventListener("keydown", function (e) {
  if (e.code === "Escape" && popupWindow.classList.contains("popup-wrapper-open")) {
    popupWindow.classList.remove("popup-wrapper-open");
    popupOpenButton.focus();
  };
});
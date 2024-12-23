let firstDiv = document.querySelector("div");
let allParagraphs = document.querySelectorAll("p");
let lastDiv = document.getElementsByTagName("div");
let lastChild = lastDiv[lastDiv.length - 1];
let h3Last = document.getElementsByTagName("h3")[0];
let lastH1 = lastChild.firstElementChild;
let secondPar = document.getElementsByClassName("second")[0];
let textPar = secondPar.innerText;
let secondDiv =
  document.getElementsByClassName("anotherDiv")[0].lastElementChild;
secondDiv.innerText += " text";
lastH1.innerText = " New Header";
h3Last.innerText = " New One";

console.log(secondDiv);

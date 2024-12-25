let btn = document.querySelectorAll("#btn");
console.log(btn);

btn[0].onclick = function () {
  console.log("You clicked me");
};

btn[0].onchange = function () {
  console.log("TEST");
};

function greet() {
  console.log("Hello");
}

let mainBtn = document.getElementById("mainBtn");
mainBtn.onclick = greet;
console.log(mainBtn);

let body = document.getElementsByTagName("body");
body[0].onmousemove = function () {
  //   console.log("moving");
};

let mainDiv = document.getElementById("main");

function changeBgColorWhenIn() {
  mainDiv.style.backgroundColor = "aqua";
}

function changeBgColorWhenOut() {
  mainDiv.style.backgroundColor = "black";
}

//using reference to a function
mainDiv.onmouseleave = changeBgColorWhenOut;
mainDiv.onmouseover = changeBgColorWhenIn;

//declaring a function directly in the event handler property
mainDiv.ondblclick = function () {
  mainDiv.style.backgroundColor = "yellow";
};

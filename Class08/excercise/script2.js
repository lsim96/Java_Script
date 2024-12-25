let paragraph = document.getElementById("paragraph1");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  paragraph.style.backgroundColor = "red";
  paragraph.style.color = "blue";
  paragraph.style.fontSize = "40px";
});

let mainDiv = document.getElementById("mainDiv");
let btn1 = document.getElementById("btn1");
let btn3 = document.getElementById("btn3");

mainDiv.addEventListener(
  "click",
  function (e) {
    console.log("Main div click");
  },
  false
);
btn1.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Btn one click");
});
btn3.addEventListener("click", function (e) {
  console.log("Btn two click");
});

//Capturing
// document.getElementById("black").addEventListener(
//   "click",
//   function (e) {
//     console.log("Black div is called");
//   },
//   true
// );
// document.getElementById("red").addEventListener(
//   "click",
//   function (e) {
//     console.log("Red div is called");
//   },
//   true
// );
// document.getElementById("yellow").addEventListener(
//   "click",
//   function (e) {
//     console.log("Yellow div is called");
//   },
//   true
// );
// document.getElementById("blue").addEventListener(
//   "click",
//   function (e) {
//     console.log("Blue div is called");
//   },
//   true
// );

//BUBBLING

document.getElementById("black").addEventListener("click", function (e) {
  console.log("Black div is called");
});
document.getElementById("red").addEventListener("click", function (e) {
  //STOP PROPAGATION ON RED DIV
  e.stopPropagation();
  console.log("Red div is called");
});
document.getElementById("yellow").addEventListener("click", function (e) {
  console.log("Yellow div is called");
});
document.getElementById("blue").addEventListener("click", function (e) {
  console.log("Blue div is called");
});

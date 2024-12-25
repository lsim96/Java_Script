//reading the value through the element

let input = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let inputValue = input.value;
  console.log(inputValue);
});

//second way to get input
input.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    // this is enter
    let inputValue = e.target.value;
    console.log(inputValue);
  }
});

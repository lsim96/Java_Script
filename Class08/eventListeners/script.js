let element = document.getElementById("btn");
element.addEventListener("click", function () {
  console.log("Hello from Js");
});

function greet() {
  console.log("Hello again");
}

// element.addEventListener("dblclick", greet);

let inpt = document.getElementById("mainInput");

inpt.addEventListener("keypress", function (event) {
  //get target
  //event.target
  console.log(event.target.value);
  console.log("Change event");
});

function handleClick(e) {
  console.log(e);
}

inpt.addEventListener("blur", handleClick);

let btn2 = document.getElementById("btn2");

// btn2.addEventListener("click", function () {
//   element.removeEventListener("dblclick", greet);
// });

// function removingEventListener() {
//   console.log("Mouse Out");
//   btn2.removeEventListener("mouseout", removingEventListener);
// }

// btn2.addEventListener("mouseout", removingEventListener);

//getting value from input and checking the length
let content = document.getElementById("content");

function checkWordLength(word) {
  if (word.length >= 10) {
    let text = "The length of the word is too long";
    content.innerHTML = `<p>${text}</p>`;
  } else {
    content.innerHTML = "";
  }
}

document.getElementById("textInput").addEventListener("keydown", function (e) {
  //getting value from input
  let value = e.target.value;
  checkWordLength(value);
});

// let score = 59;
// let scoreToPass = 60;

// if (score >= scoreToPass) {
//   alert("You have passed");
// }

// if (score > scoreToPass) {
//   alert("Pass");
// } else {
//   alert("Failed");
// }

//
// let fridayCash = 11;

// if (fridayCash >= 50) {
//   alert("You should go out to a dinner and movie");
// } else if (fridayCash >= 35) {
//   alert("You should go out to have a nice meal!");
// } else if (fridayCash >= 12) {
//   alert("You should go watch a movie!");
// } else {
//   alert("It looks like you're staying at home..");
// }

//GETTING VALUE FROM SCREEN

// let input = prompt("Enter your name");

// console.log(input);
// console.log(typeof input);

// let message = `Hello ${input}, how are you`;
// alert(message);

let input = prompt("Enter number");

let number = parseInt(input);

if (Number.isNaN(number)) {
  alert("Please enter a valid numbert");
} else {
  alert("Good, you have sucessfully entered a number on the screen!");
}

console.log(number);
console.log(typeof number);

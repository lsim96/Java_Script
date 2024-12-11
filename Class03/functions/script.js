// function greetings() {
//   console.log("Greetings");
// }

// greetings();

// function greeting(message) {
//   console.log("Greetings " + message + " from function");
// }

// greeting("Leon");
// greeting("Leon");
// greeting("Leon");

// function welcomeMessage(firstName, lastName) {
//   console.log(`Welcome ${firstName} ${lastName}`);
// }

// let name = "Leon";
// let surname = "Simonoski";

// welcomeMessage(name, surname);

// function excerciseFunct(fullName, message, age) {
//   console.log("I'm " + fullName + " and I'm " + age + " years old. " + message);
// }

// let fullName = "Leon Simonoski";
// let age = 28;
// let message = "Hello to everyone";

// excerciseFunct(fullName, message, age);

function sum(num, num1) {
  let result = num + num1;
  return result;
}

let sumOfTwoNumbers = sum(2, 3);
console.log(sumOfTwoNumbers);

function mult(multT, mulT2) {
  let result = multT * mulT2;
  return result;
}

let mulOfNumbers = sum(15, 20);
console.log(mulOfNumbers);

function divid(divide, divide1) {
  if (divide && divide1) {
    return divide / divide1;
  } else {
    return divide;
  }
}

let multyOfNumbers = divid(1580, 20);
console.log(multyOfNumbers);

// function calculateLoan(amount, months, interest, nameOf) {
//   console.log(amount);
//   console.log(months);
//   console.log(interest);
//   console.log(nameOf);
// }

// calculateLoan();
// calculateLoan(1);
// calculateLoan(1, 2);
// calculateLoan(1, 2, 10, "Leon", "Filip", 14); // "Filip" and 14 wont be defined, since they dont have placeholders

// function calculator(opt1, opt2, operation = "+", test = 3) {
//   // default parametars always go last
//   switch (operation) {
//     case "+":
//       return opt1 + opt2;
//     case "-":
//       return opt1 - opt2;
//     default:
//       return null;
//   }
// }

// console.log(calculator(1, 2));
// console.log(calculator(12, 2, "-"));

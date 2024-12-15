// first excercise
let a = 7;
let b = 8;
let c = a + b;
// console.log(c);

//second excercise
let value = 1;
let value1 = true;
let value2 = "Leon";
// console.log(typeof value);
// console.log(typeof value1);
// console.log(typeof value2);

//third excercise
let num = 17;
let num1 = 22;
if (num < num1) {
  //   console.log(num1);
}

//fourth excercise
let num2 = 101;
if (num2 >= 100) {
  //   console.log(`The number ${num2} is cool!`);
}

//fifth excercise

function oneParameter(color) {
  let string1 = "The given argument was:";
  let string2 = ".OK?";
  //   console.log(string1, color, string2);
}

oneParameter("red is better than blue");

//sixth excercise

function describeACar(producer, model, horsepower, color) {
  horsepower = " 160 horsepower";
  color = " black";
  let carDescription = producer + model + horsepower + color;
  return carDescription;
}

// console.log(describeACar("Honda ", " Civic "));

// seventh excercise
function oddOrEven(number) {
  if (number % 2 === 0) {
    // console.log("even");
  } else {
    // console.log("odd");
  }
}

oddOrEven(2);
oddOrEven(3);

//eight excercise
function denarsToEuros(euros) {
  let denars = euros * 61.5;
  return denars;
}

// console.log(denarsToEuros(2));
// console.log(denarsToEuros(4));
// console.log(denarsToEuros(9));

//ninth excercise

let day = "Wednesday";
function classDays(day) {
  switch (day) {
    case "Monday":
    case "Wednesday":
      //   console.log("I am at SEDC");
      break;
    case "Tuesday":
    case "Thurday":
    case "Saturday":
    case "Sunday":
    default:
      //   console.log("I am at home");
      break;
  }
}

//tenth excercise

// let arr = [5, 6, 15, 42, 1, 1002];
// let arr1 = ["Trajan", "Filip", "Dejan"];
// console.log(arr[0]);
// console.log(arr1[0]);
// console.log(arr);
// console.log(arr1);
// arr[100] = "Leon";
// console.log(arr);
// console.log(arr[99]);
// arr.push("Tim");
// console.log(arr);
// arr1.pop();
// console.log(arr1);
// console.log(arr[1000], arr1[1000]);

//eleventh excercise

for (let i = 1; i < 193; i++) {
  if (i % 2 != 0) {
    // console.log(i);
  }
}

//twelveth excercise
let array = [2, 4, 8, 10, 12, 13];

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumOfArray(array));

//thirtheenth excercise

function avarageOfArray(item) {
  let sum = sumOfArray(item);
  return sum / item.length;
}

// console.log(avarageOfArray(array));

//fourteenth excercise
function avarageSumOfArray(count) {
  let sum = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i] % 2 === 0) {
      sum += count[i];
    }
  }
  return sum;
}
// console.log(avarageSumOfArray(array));

//fifteenth excercise

let array1 = [11, 13, 28, 56, 44, 93, 101, 16];

function arrayAndValue(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// console.log(arrayAndValue(56, array1));

//sixteenth excercise

let namesArray = ["Leonid", "Jane", "Daniel", "Michael", "Ana", "Kiril"];

function namesToNumbers(str) {
  let arrayToNumbers = [];
  for (let i = 0; i < str.length; i++) {
    arrayToNumbers.push(str[i].length);
  }
  //   console.log(arrayToNumbers);
}

namesToNumbers(namesArray);

//seventeenth excercise

function allNumbers() {
  let divisibleNumbers = [];
  for (let i = 1; i < 133; i++) {
    if (i % 7 === 0 && i % 3 === 0) {
      divisibleNumbers.push(i);
      console.log(divisibleNumbers);
    } else if (i % 7 === 0) {
      console.log(i);
    } else if (i % 3 === 0) {
      console.log(i);
    }
  }
}

// allNumbers();

//eighteenth excercise

function guessCode() {
  let correctPin = 1996;
  let guess = parseInt(prompt("Enter 4 digit pin"));
  for (let i = 0; i < 4; i++) {
    if (guess != correctPin) {
      alert("Sorry, that was incorrect..");
      return guessCode();
    } else if (guess === correctPin) {
      alert("That is correct!");
      break;
    }
  }
}

// guessCode();

// nineteenth excercise

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(20);

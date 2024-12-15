// let counter = 0;

// while (counter < 10) {
//   console.log(counter);
//   counter += 1;
// }

// let names = ["Leon", "Trajan", "Macko", "Packo"];
// let index = 0;

// while (index < names.length) {
//   console.log(names[index]);
//   index += 1;
// }

// let numberOfValues = 10;
// let counter = 0;
// let values = [];

// while (counter < numberOfValues) {
//   let input = prompt("Vnesi vrednosti");
//   values.push(input);
//   counter += 1;
// }
// console.log("Finished entering");
// counter = 0;

// while (counter < values.length) {
//   console.log(values[counter]);
//   counter += 1;
// }
// console.log("Finished printing");

// math.pow(2,2);

// let maxValue = 151;
// let counter = 101;
// let result1 = Math.pow(counter, counter);

// while (counter < maxValue) {
//   console.log(counter);
//   counter += 1;
// }

// console.log(result1);

// let result = 0;
// let i = 101;
// while (i <= 150) {
//   result += Math.pow(i, 2);
//   i++;
// }
// console.log(result);

function digitsInNumber(number) {
  console.log(`Input number is: ${number}`);

  while (number > 0) {
    let amount = number % 10;
    console.log(amount);

    number = parseInt(number / 10);
    console.log(`Input: ${number}`);
  }
}

// digitsInNumber(1234567);

let counter = 0;

do {
  counter++;
  // console.log(counter);
} while (counter < 10);

//counter
let index = 0;
//counter
while (index < 10) {
  //code
  //increment/decrement
  index++;
}

for (let i = 0; i < 10; i++) {
  // console.log(i);
}

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (let i = 0; i < days.length; i++) {
  let element = days[i];
  // console.log(element);
}

for (let i = days.length - 1; i >= 0; i--) {
  let element = days[i];
  // console.log(element);
}

let days1 = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// for (let day of days1) {
//   console.log(day);
// }

for (let i = 0; i < 20; i++) {
  if (i > 10) {
    break;
  }
  // console.log(i);
}

// let index1 = 0;

// while (index1 < 30) {
//   if (index1 % 3 === 0) {
//     index1++;
//     continue;
//   }
//   console.log(index1);
//   index1++;
// }

for (let index = 0; index < 30; index++) {
  if (index % 3 === 0) {
    continue;
  }
  // console.log(index);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let number of numbers) {
  console.log(number);
  if (number === 11) {
    break;
  }
}

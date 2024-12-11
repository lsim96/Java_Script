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

digitsInNumber(1234567);

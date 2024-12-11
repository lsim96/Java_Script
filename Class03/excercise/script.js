function inputOne(message) {
  let input = prompt(message);
  let value = parseInt(input);
  if (typeof value === "number" && !Number.isNaN(value)) {
    return value;
  } else {
    return NaN;
  }
}

let input1 = inputOne("Please enter number: ");
let input2 = inputOne("Vnesete Broj: ");
let input3 = inputOne("Vnesete Ime: ");

console.log(input1);
console.log(input2);
console.log(input3);

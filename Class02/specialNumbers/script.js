let a = 5 - "abc";
console.log("Value of a: ");
console.log(a);
console.log("Type of a: ");
console.log(typeof a);

console.log(a == NaN);
console.log(a === NaN);

let isValidNumber = isNaN(a);
console.log(isValidNumber);

let text = "test";
let isValidNaN = isNaN(text);
console.log(isValidNaN);

console.log(Number.isNaN(a));
console.log(Number.isNaN(text));

let maxNumber = Infinity;
let minNumber = -Infinity;

console.log(maxNumber);
console.log(minNumber);
console.log(typeof maxNumber);

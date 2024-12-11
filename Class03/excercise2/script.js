function celToFahren(C) {
  let outcome = C * 1.8 + 32;
  return outcome;
}

function fahrenToCel(F) {
  let outcome = (5 / 9) * (F - 32);
  return outcome;
}

let input1 = parseInt(prompt("Enter a number"));
let input2 = prompt("C or F");

function finalResult(degrees, action) {
  if (action === "F") {
    let a = fahrenToCel(degrees);
    console.log(a);
  } else if (action === "C") {
    let a = celToFahren(degrees);
    console.log(a);
  }
}

finalResult(input1, input2);

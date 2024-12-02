let expr1 = 4 < 7;
let expr2 = 5 != 8;
console.log(expr1);
console.log(expr2);

let a = 10;
let b = 12;
let expr3 = a > b;

let expressionAnd = expr1 && expr2 && expr3;
console.log(expressionAnd);

let expressionAndOr = expr1 || expr2 || expr3;
console.log(expressionAndOr);

let complexExpr = 5 > 2 && 3 <= 7 && 5 != 6;
console.log(complexExpr);

let sumCheck = 5 + 2 >= 10 - 7 && 5 > 5;
console.log(sumCheck);

let num = 5;
let num2 = "5";

console.log(num == num2);
console.log(num === num2);

console.log(num != num2);
console.log(num !== num2);

// let name = "Leon";

// function printMessage() {
//   let message = "Hello world";
//   console.log(name);
//   console.log(message);
// }

// function sum(num, num1) {
//   return num + num1;
// } //Pure function

// printMessage();
// console.log(message);

//Global scope

let globalVariable = 1;

function localScope() {
  //Function scope
  let functionLocalScopeVariable1 = 2;

  if (true) {
    //first if scope
    let ifVariable = 3;
    if (true) {
      //second if scope
      let secondIfScopeVariable = 4;
      console.log("Global scope");
      console.log(globalVariable);
      console.log("Function scope");
      console.log(functionLocalScopeVariable1);
      console.log("First if scope");
      console.log(ifVariable);
      console.log("local if scope");
      console.log(secondIfScopeVariable);
    }
  }
}

localScope();

//localScope()

let message = "Welcome";
function welcomeMessage(message) {
  //let message = ""; //we cannot do this
  function secondWelcomeMessage() {
    let message = "";
  }
}

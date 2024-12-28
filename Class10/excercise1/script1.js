let input = $(".input");
let result = $("#result");

$("button").on("click", function () {
  let numOne = parseInt(input[0].value);
  let numTwo = parseInt(input[1].value);
  let numThree = parseInt(input[2].value);

  let avarage = numOne + numTwo + numThree / 3;
  if (avarage > 10) {
    result.text(avarage).css("color", "blue");
  } else {
    result.text(avarage).css("color", "red");
  }
});

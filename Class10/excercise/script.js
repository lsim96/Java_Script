$(document).ready(function () {
  let oneDiv = $("#firstWrapper");
  console.log(oneDiv);

  let onePara = $("p");
  let first = onePara.first();
  console.log(first);

  let oneH1 = $("h1");
  let firsth1 = oneH1.first();
  console.log(firsth1);

  let oneh3 = $("h3");
  let firstH3 = oneh3.first();
  console.log(firstH3);
  let button = $("button").first();
  console.log(button);

  let firstHeader = $("h1").first().text();
  console.log(firstHeader);
  $("h1").first().text("Change the header");

  $("#firstWrapper").find("h1:first").after("<p>Add a paragraph</p>");

  $("button").css("background-color", "rgba(255, 0, 0)");

  let oneBtn = $("button").first();
  oneBtn.on("click", function () {
    $("p").css("color", "rgba(15,227,78)");
    $("button").first().text("Dont click me!");
    console.log("Hey there!");
  });
});





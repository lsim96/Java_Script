$(document).ready(function () {
  let el = $("#mainTitle");
  //   console.log(el);
  let allElements = $("*");
  //   console.log(allElements);

  let elByClassName = $(".innerWrapper");
  //   console.log(elByClassName);

  let elByTagName = $("p");
  //   console.log(elByTagName);

  let elByMultipleSelectors = $(".innerWrapper, .wrapper, #mainTitlte");
  //   console.log(elByMultipleSelectors);
  let firstParagraph = $("p:first");
  //   console.log(firstParagraph);
  let firstChildren = $("h3:first-child");
  //   console.log(firstChildren);
  let nthChild = $("p:nth-child(2)");
  //   console.log(nthChild);

  let btn = $("button[name='test']");
  //   console.log(btn);

  let allPara = $("p");
  let first = allPara.first();
  //   console.log(first);

  let pClass = $("*").find(".innerWrapper").find(".pClass");
  //   console.log(pClass);

  let allEle = $("*");
  let fourteenthEle = allEle.get("14");
  //   console.log(allEle);
  //   console.log(fourteenthEle);
  let nextElement = $("#SecondTitle").next();
  //   console.log(nextElement);

  let value = $("input").first().val();
  console.log(value);

  $("#mainTitle").hide();
  $("#mainTitle").show();

  let divHtml = $(".innerWrapper").first().html();
  console.log(divHtml);
  $(".innerWrapper").first().html("<p>We changed it</p>");

  let h1Text = $("#mainTitle").first().text();
  console.log(h1Text);
  $("#mainTitle").first().text("We changed the text");

  let color = $("#mainTitle").css("color");
  console.log(color);
  $("#mainTitle").css("color", "rgba(15,227,78)");

  $(".innerWrapper").find("p:first").after("<h2>Added header</h2>");

  $(".innerWrapper").find("p:first").before("<h2>Added header</h2>");

  let ourBtn = $("button").first();
  ourBtn.on("click", function () {
    console.log("Hello from the first click handler");
  });

  let input = $("input").first();
  //   input.on("keypress", function () {
  //     console.log("on key press");
  //   });

  //   let secondBtn = $("button").last();
  //   secondBtn.click(function () {
  //     console.log("second button click");
  //   });
//   input.change(function (e) {
//     console.log(e.currentTarget.value);
//   });
});

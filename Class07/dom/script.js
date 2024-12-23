// console.log(document);

//Selecting element by ID
let myHeader = document.getElementById("myTitle");

// console.log(myHeader);
// console.log(myHeader.innerText);

//Selecting element by Class Name
let paragraphs = document.getElementsByClassName("myParagraph");
// console.log(paragraphs);
let secondPara = document.getElementsByClassName("second");
// console.log(secondPara);

//Selecting elements by tag name
let paragraphs1 = document.getElementsByTagName("p");
// console.log(paragraphs1);
let divs = document.getElementsByTagName("div");
// console.log(divs);
let firstPara = paragraphs1[0];
// console.log(firstPara);

//Query selectors
//query by tag name
let paragraphs2 = document.querySelectorAll("p");
// console.log(paragraphs2);
//query by class name
let text = document.querySelector(".second");
// console.log(text);
let pTags = document.querySelector("p");
// console.log(pTags);
let byId = document.querySelector("#myTitle");
// console.log(byId);

//siblings
let h1Element = document.querySelector("#myTitle");
let nextSibling = h1Element.nextElementSibling;
// console.log(nextSibling);
let prevSibling = nextSibling.previousElementSibling;
// console.log(prevSibling);
//parent element
let parent = prevSibling.parentElement;
// console.log(parent);

//getting the children of element
let children = parent.children;
// console.log(children);
let firstChild = parent.firstElementChild;
// console.log(firstChild);
let lastChild = parent.lastElementChild;
// console.log(lastChild);

//Get text content
let mainDiv = document.getElementById("main");
let divText = mainDiv.textContent;
// console.log(divText);
let divInnerText = mainDiv.innerText;
// console.log(divInnerText);

//Changing text
let mainHeader = document.getElementById("myTitle");
mainHeader.innerText = "Hooray, we added text with JavaScript";
mainHeader.innerText += " " + "New Text";

//ADDING Html
let divMain = document.getElementById("main");
console.log(divMain.innerHTML);

divMain.innerHTML +=
  "<p id='firstParagraph'> First paragraph added with javascript</p>";

//changing style

let divMainDiv = document.getElementById("main");

divMainDiv.style.color = "red";
// divMainDiv.style.backgroundColor = "blue";
// divMainDiv.style.display = "none";

divMainDiv.classList.add("bg-color");

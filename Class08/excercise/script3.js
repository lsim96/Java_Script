document.getElementById("btn1").addEventListener("click", function () {
  let inputs = document.getElementsByTagName("input");
  let a = {};
  for (let input of inputs) {
    console.log(input.name, input.value);
    a[input.name] = input.value;
  }
  console.log(a);
});

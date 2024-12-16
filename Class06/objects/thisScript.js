function windowSize() {
  let height = this.innerHeight;
  let width = this.innerWidth;
  //   console.log("In fuction");
  //   console.log(this);
  return [height, width];
}

let result = windowSize();
// console.log(result);

let shape = {
  width: 600,
  height: 400,
  getArea: function () {
    console.log(this);
    return this.width * this.height;
  },
};

// console.log(shape.getArea());

let width = 600;
let screen = { width: 400 };

function showWidth() {
  console.log(this);
  console.log(this.width);
}

showWidth();
// screen.showWidth = showWidth;
// screen.showWidthExecuted = showWidth();
// console.log(screen);
screen.showWidth = showWidth;
screen.showWidth();


l
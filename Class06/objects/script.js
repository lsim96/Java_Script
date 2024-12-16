// let hotel = {
//   name: "Quay",
//   rooms: 40,
//   booked: 25,
//   hasGym: true,
//   roomTypes: ["single", "double", "suite"],

//   checkAvailability: function () {
//     console.log("sorry we are booked");
//   },
// };

// console.log(hotel.booked);
// hotel.checkAvailability();

// let name = hotel["name"];
// console.log(name);
// hotel["checkAvailability"]();

// let propertiesForReview = ["name", "hasGym", "roomTypes"];

// for (let prop of propertiesForReview) {
//   console.log(hotel[prop]);
// }

//excercise

// let leonS = {
//   name: "Leon Simonoski",
//   age: 28,
//   nationality: "Macedonian",
//   placeOfBirth: "Skopje",
//   employment: false,

//   printWelcomeMessage: function () {
//     console.log("Welcome");
//   },
// };

// console.log(leonS.name, leonS.age, leonS.nationality, leonS.placeOfBirth);

// leonS["printWelcomeMessage"]();

// let employment1 = leonS["employment"];
// console.log(employment1);

// leonS.name = "Macko Gjorgjievski";
// leonS.age = 34;
// leonS["nationality"] = "Bulgarian";
// leonS["placeOfBirth"] = "Plovdiv";
// leonS["employment"] = true;
// console.log(
//   leonS.name,
//   leonS.age,
//   leonS.nationality,
//   leonS.placeOfBirth,
//   leonS.employment
// );
// let hotel2 = new Object();

// hotel2.name = "Quay";
// hotel2.room = 50;
// hotel2.hasGym = false;
// hotel2.roomTypes = ["single"];
// hotel2.checkAvailability = function () {
//   console.log("Only single rooms available");
// };

// hotel2["pricePerNight"] = 100;
// hotel2.propertyForDelete = true;

// delete hotel2.propertyForDelete;

// console.log(hotel2);

// let person = {
//   firstName: "Leon",
//   lastName: "Simonoski",
// };

// person.firstName = "Mile";
// person["lastName"] = "Milevski";
// person.age = 23;

// console.log(person.firstName);
// console.log(person);

// let trainer = {
//   name: "Stefan",
//   lastName: "Stefanovski",
//   academy: "SEDC",
//   lecture: "Objects",
// };

// delete trainer.lecture;

// console.log(trainer);

// trainer.age = 28;

// trainer.getFullName = function () {
//   console.log(`${trainer.name} ${trainer.lastName}`);
// };

// let hotel4 = new Object();

// function Hotel(name, rooms, booked) {
//   this.name = name;
//   this.rooms = rooms;
//   this.booked = booked;

//   this.checkAvailability = function () {
//     return this.rooms - this.booked;
//   };
// }

// let hotel5 = new Hotel("Hilton", 100, 89);
// let hotel6 = new Hotel("Marriot", 200, 200);
// let hotel7 = new Hotel("Park", 20, 10);

// console.log(hotel5);
// console.log(hotel5.checkAvailability());
// console.log(hotel6);
// console.log(hotel6.checkAvailability());
// console.log(hotel7);
// console.log(hotel7.checkAvailability());

function Car(model, color, year, fuel, fuelConsumption) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.fuel = fuel;
  this.fuelConsumption = fuelConsumption;

  this.calculateDistance = function (distance) {
    return distance * (this.fuelConsumption / 100);
  };
}

let car1 = new Car("Honda", "black", 2018, "diesel", 6);
console.log(car1);
console.log(car1.calculateDistance(200));

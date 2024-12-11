function calculateAge(birthYear, momentaryYear) {
  let result = momentaryYear - birthYear;
  return result;
}

console.log(calculateAge(1996, 2024));
let result = `You're ${calculateAge(1996, 2024)} years old`;

console.log(result);

console.log(calculateAge(1993, 2024));
let result1 = `You're ${calculateAge(1993, 2024)} years old`;

console.log(result1);

function calculateAge2(dob) {
  let date = new Date();
  let currentYear = date.getFullYear();
  return currentYear - dob;
}

console.log(`You're ${calculateAge2(1882)} years old`);

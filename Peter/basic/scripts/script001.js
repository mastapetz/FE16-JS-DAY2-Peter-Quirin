(function () {
  console.log("JS Connected");
})();
// ---------------------------------------------------------
// EX 1
// normal function declare
function crystalGazer(children, partnerName, location, jobTitle) {
  return `EX1: You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${children} childrens.`;
}
console.log(crystalGazer(3, "Miku", "Vienna", "Admin"));
// arrow function
const crystalGazerTwo = (children, partnerName, location, jobTitle) =>
  `EX1: You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${children} childrens.`;

console.log(crystalGazerTwo(3, "Miku", "Vienna", "Admin"));
// ---------------------------------------------------------
// EX2
const ageCalculatorEx2 = (birthYear, currentYear) =>
  `Ex2: You are either ${currentYear - birthYear} or ${
    currentYear - birthYear - 1
  } years old.`;
console.log(ageCalculatorEx2(1980, 2022));
// ---------------------------------------------------------
// Ex 3
// dont forget the () after methods like .getFullYear()
//prettier extension puts () on single parameter Arrow function
const ageCalculatorEx3 = (birthYear) => {
  let currentDate = new Date();
  return `Ex3: You are either ${currentDate.getFullYear() - birthYear} or ${
    currentDate.getFullYear() - birthYear - 1
  } years old.`;
};
console.log(ageCalculatorEx3(1980));
// ---------------------------------------------------------
// Ex 4
const degRadConversion = (degree) =>
  `${degree} degree is ${(degree * (Math.PI / 180)).toFixed(6)} radian`;
console.log(degRadConversion(90));
// ---------------------------------------------------------
//Ex 5
// depth = 0 if box doesnt have a depth
const calcBox = (width, height, depth = 0) => {
  let area = width * height;
  let voulme = width * height * depth;
  console.log(`The Area of the box is ${area}`);
  console.log(`The Volume of the box is ${voulme}`);
  return;
};

calcBox(2, 7, 5);

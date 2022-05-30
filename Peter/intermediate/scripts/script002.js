(function () {
  console.log("JS Connected");
})();
// ---------------------------------------------------------
// Capitalize
const string = function (str) {
  // let str = "i am a programmer";
  // let str2 = str.charAt(0);
  let str1 = str.charAt(0).toUpperCase() + str.slice(1);
  return console.log(str1);
};
string("i am a programmer");
// ---------------------------------------------------------
// Average grade
const averageGrade = (maths, physics, english) => {
  let mathGrade = Number(maths);
  let physicsGrade = Number(physics);
  let englishGrade = Number(english);
  console.log(`Sum: ${mathGrade + physicsGrade + englishGrade}`);
  console.log(`Average: ${(mathGrade + physicsGrade + englishGrade) / 3}`);
  return;
};
averageGrade(4, 4, 4);

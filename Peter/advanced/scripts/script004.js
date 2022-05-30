(function () {
  console.log("JS Connected");
})();
// ---------------------------------------------------------
// Math.trunc cuts away the float part
const calcTime = (minutes) => {
  let hours = Math.trunc(minutes / 60);
  let min = minutes % 60;
  return console.log(`${minutes} = ${hours} hour(s) and ${min} minute(s).`);
};

calcTime(200);

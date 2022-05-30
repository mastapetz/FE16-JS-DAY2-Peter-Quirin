(function () {
  console.log("JS Connected");
})();
// ------------------ATM---------------------------------------
// ATM Stock at start
var note_Hundred = 2;
var note_fifty = 1;
var note_twenty = 1;
var note_ten = 1;
// ------------------
const atm = (moneyget) => {
  if (
    moneyget >
    note_Hundred * 100 + note_fifty * 50 + note_twenty * 20 + note_ten * 10
  ) {
    return console.log("Not enough notes available");
  } else {
    if (Math.trunc(moneyget / 100) === 0) {
      if (Math.trunc(moneyget / 10) === 1) {
        note_ten -= 1;
      } else if (Math.trunc(moneyget / 10) === 2) {
        note_twenty -= 1;
      } else if (Math.trunc(moneyget / 10) === 3) {
        note_ten -= 1;
        note_twenty -= 1;
      } else if (Math.trunc(moneyget / 10) === 5) {
        note_fifty -= 1;
      } else if (Math.trunc(moneyget / 10) === 6) {
        note_ten -= 1;
        note_fifty -= 1;
      } else if (Math.trunc(moneyget / 10) === 7) {
        note_twenty -= 1;
        note_fifty -= 1;
      } else if (Math.trunc(moneyget / 10) === 8) {
        note_ten -= 1;
        note_twenty -= 1;
        note_fifty -= 1;
      } else if (Math.trunc(moneyget / 10) === 0) {
        return console.log(
          "Only Notes of Hundred, Fifty, Twenty and Ten available"
        );
      } else {
        console.log("Not enough notes in combination of 10 20 50 available");
      }
    } else if (Math.trunc(moneyget / 100) > note_Hundred) {
      return console.log("Not enough 100 € notes available");
    } else if (Math.trunc(moneyget / 100) === 1) {
      note_Hundred -= 1;
    } else if (Math.trunc(moneyget / 100) === 2) {
      note_Hundred -= 2;
    }
  }
};

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
  // check if the entered money is over the current stock
  if (
    moneyget >
    note_Hundred * 100 + note_fifty * 50 + note_twenty * 20 + note_ten * 10
  ) {
    return console.log("Not enough notes available");
  }
  // if enough money calculate notes
  else {
    // check if 100s are needed
    if (Math.trunc(moneyget / 100) === 0 || moneyget % 10 >= 1) {
      // if no hundreds are needed check lower notes
      if (Math.trunc(moneyget / 10) === 1) {
        note_ten -= 1;
        var note_ten2 = 1;
      } else if (Math.trunc(moneyget / 10) === 2) {
        note_twenty -= 1;
        var note_twenty2 = 1;
      } else if (Math.trunc(moneyget / 10) === 3) {
        note_ten -= 1;
        note_twenty -= 1;
        var note_ten2 = 1;
        var note_twenty2 = 1;
      } else if (Math.trunc(moneyget / 10) === 5) {
        note_fifty -= 1;
        var note_fifty2 = 1;
      } else if (Math.trunc(moneyget / 10) === 6) {
        note_ten -= 1;
        note_fifty -= 1;
        var note_ten2 = 1;
        var note_fifty2 = 1;
      } else if (Math.trunc(moneyget / 10) === 7) {
        note_twenty -= 1;
        note_fifty -= 1;
        var note_twenty2 = 1;
        var note_fifty2 = 1;
      } else if (Math.trunc(moneyget / 10) === 8) {
        note_ten -= 1;
        note_twenty -= 1;
        note_fifty -= 1;
        var note_ten2 = 1;
        var note_twenty2 = 1;
        var note_fifty2 = 1;
      }

      // Error messages if amount is not covered by notes or below 10
      else if (Math.trunc(moneyget / 10) === 0) {
        return console.log(
          "Only Notes of Hundred, Fifty, Twenty and Ten available"
        );
      } else {
        console.log("Not enough notes in combination of 10 20 50 available");
      }
    }

    // calculate if enough 100s are in the machine and lower stuck for given amount
    else if (Math.trunc(moneyget / 100) > note_Hundred) {
      return console.log("Not enough 100 € notes available");
    } else if (Math.trunc(moneyget / 100) === 1) {
      note_Hundred -= 1;
      var note_Hundred2 = 1;
    } else if (Math.trunc(moneyget / 100) === 2) {
      note_Hundred -= 2;
      var note_Hundred2 = 2;
    }
  }
  return console.log(
    `You get ${note_Hundred2} in 100 notes ${note_fifty2} in 50 notes ${note_twenty2} in 20 notes and ${note_ten2} in 10 notes.`
  );
};
atm(110);

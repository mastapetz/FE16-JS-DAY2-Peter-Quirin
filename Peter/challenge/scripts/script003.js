(function () {
  console.log("JS Connected");
})();
// ------------------ATM---------------------------------------
// ATM Stock at start
var note_hundred = 120;
var note_fifty = 200;
var note_twenty = 100;
var note_ten = 500;
var total_amount =
  note_hundred * 100 + note_fifty * 50 + note_twenty * 20 + note_ten * 10;
// var hundred_notes = 0;
// var hundred_Fit = 0;
// var fifty_notes = 0;
// var fifty_fit = 0;
// var twenty_notes = 0;
// var twenty_fit = 0;
// var ten_notes = 0;
// var ten_fit = 0;
// ------------------
const atm = (moneyget) => {
  // ================================Check stock
  if (
    moneyget >
    note_hundred * 100 + note_fifty * 50 + note_twenty * 20 + note_ten * 10
  ) {
    return console.log("Not enough notes available");
  }
  // ================================
  let hundred_notes = 0;
  hundred_Fit = Math.trunc(moneyget / 100); // How many 100s fit in the amount
  console.log("Einzelne Hunderter = " + hundred_Fit);
  if (hundred_Fit > note_hundred) {
    // If there are not enough 100 bills in account, take out all
    hundred_notes = note_hundred;
  } else {
    hundred_notes = hundred_Fit; // Else take out how many bills fit into the amount
  }
  moneyget = moneyget - hundred_notes * 100;
  console.log("Moneyget nach 100er = " + moneyget);
  // ================================
  let fifty_notes = 0;
  fifty_fit = Math.trunc(moneyget / 50); // How many 50s fit in the amount
  console.log("Fufziger = " + fifty_fit);
  if (fifty_fit > note_fifty) {
    // If there are not enough 50 bills in account, take out all
    fifty_notes = note_fifty;
  } else {
    fifty_notes = fifty_fit; // Else take out how many bills fit into the amount
    console.log("Einzelne fufziga " + fifty_notes);
  }
  moneyget = moneyget - fifty_notes * 50;
  console.log("Nach Fufziger = " + moneyget);
  //   ================================
  let twenty_notes = 0;
  twenty_fit = Math.trunc(moneyget / 20); // How many 50s fit in the amount
  console.log("zwanziger = " + twenty_fit);
  if (twenty_fit > note_twenty) {
    // If there are not enough 50 bills in account, take out all
    twenty_notes = note_twenty;
  } else {
    twenty_notes = twenty_fit; // Else take out how many bills fit into the amount
    console.log("Einzelne zwanziga " + twenty_notes);
  }
  moneyget = moneyget - twenty_notes * 20;
  console.log("Nach zwanziger = " + moneyget);

  // ================================
  let ten_notes = 0;
  ten_fit = Math.trunc(moneyget / 20); // How many 50s fit in the amount
  console.log("zehner = " + ten_fit);
  if (ten_fit > note_ten) {
    // If there are not enough 50 bills in account, take out all
    ten_notes = note_ten;
  } else {
    ten_notes = ten_fit; // Else take out how many bills fit into the amount
    console.log("Einzelne zehna " + ten_notes);
  }
  moneyget = moneyget - ten_notes * 20;
  console.log("Nach zehner = " + moneyget);

  // ================================
  return console.log(
    `You get ${hundred_notes} in 100 notes ${fifty_notes} in 50 notes ${twenty_notes} in 20 notes ${ten_notes} in 10 notes`
  );
  console.log(moneyget);
};
console.log("Total Amount = " + total_amount);
atm(380);

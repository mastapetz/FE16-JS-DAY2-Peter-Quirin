function timeConvert(minutes) {
    let hours = Math.floor(minutes / 60);
    let restMinutes = minutes % 60;

    document.write(`${minutes} minutes = ${hours} hour(s) and ${restMinutes}minute(s)`);
}

timeConvert(200);
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function timeConversion(str) {
  const period = str.substring(8);
  const hr = str.substring(0, 2);

  let newHr = "";
  if (period === "AM" && hr === "12") {
    newHr = "00";
  } else if (period === "AM") {
    newHr = hr;
  } else if (period === "PM" && hr !== "12") {
    newHr = parseInt(hr) + 12;
  } else {
    //12:00 PM
    newHr = hr;
  }
  const remain = str.substring(2, 8);

  console.log(newHr + remain);
}

readline.question("", (s) => {
  timeConversion(s);
  readline.close();
});

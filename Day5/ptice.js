const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ptice(n, ans) {
  let Adrin = "ABC";
  let Bruno = "BABC";
  let Goran = "CCAABB";

  let a = 0;
  let b = 0;
  let g = 0;
  for (let i = 0; i < ans.length; i++) {
    if (Adrin[i % 3] === ans[i]) {
      a += 1;
    }
    if (Bruno[i % 4] === ans[i]) {
      b += 1;
    }
    if (Goran[i % 6] === ans[i]) {
      g += 1;
    }
  }

  const max = Math.max(a, b, g);
  console.log(max);
  if (max === a) {
    console.log("Adrian");
  }
  if (max === b) {
    console.log("Bruno");
  }
  if (max === g) {
    console.log("Goran");
  }
}

readline.question("", (n) => {
  readline.question("", (key) => {
    ptice(parseInt(n), key);
    readline.close();
  });
});

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (str) => {
    toggleCase(n, str);
    readline.close();
  });
});

function toggleCase(n, s) {
  // your code here
  let res = "";

  for (let ch of s) {
    if (ch === ch.toUpperCase()) {
      res += ch.toLowerCase();
    } else {
      res += ch.toUpperCase();
    }
  }
  console.log(res);
}

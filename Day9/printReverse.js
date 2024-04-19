const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printtillN(n, s = "") {
  if (n === 0) {
    return s;
  }

  return printtillN(n - 1, s + " " + n);
}

rl.on("line", (N) => {
  const k = printtillN(parseInt(N));
  console.log(k.trim());
  rl.close();
});

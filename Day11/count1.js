const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function digits(n, c = 0) {
  if (n == 0) {
    return c;
  }
  const digit = n % 10;
  if (digit === 1) {
    c++;
  }
  return digits(Math.floor(n / 10), c);
}

rl.on("line", (n) => {
  console.log(digits(Number(n)));
  rl.close();
});

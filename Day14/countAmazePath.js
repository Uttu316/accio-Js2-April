const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function count(n, m) {
  if (n == 1 || m === 1) {
    return 1;
  }
  return count(n - 1, m) + count(n, m - 1);
}

rl.question("", (n) => {
  rl.question("", (m) => {
    // const [n, m] = input.split(' ').map(Number);
    n = Number(n);
    m = Number(m);
    console.log(count(n, m));
    rl.close();
  });
  rl.close();
});

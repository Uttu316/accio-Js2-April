const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function NumberSum(n, sum = 0) {
  if (n === 0) {
    return sum;
  }

  return NumberSum(n - 1, sum + n);
}

readline.question("", (N) => {
  console.log(NumberSum(Number(N)));
  readline.close();
});

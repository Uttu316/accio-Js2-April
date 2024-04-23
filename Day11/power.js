const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function power(x, y) {
  if (y === 0) {
    return 1;
  }

  return x * power(x, y - 1);
}

readline.question("", (line) => {
  const [x, n] = line.split(" ").map(Number);
  console.log(power(x, n));
  readline.close();
});

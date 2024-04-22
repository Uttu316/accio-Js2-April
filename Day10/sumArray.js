const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    console.log(sum(arr, arr.length));
    readline.close();
  });
});

function sum(arr, n, add = 0) {
  if (n == 0) {
    return add;
  }
  return sum(arr, n - 1, add + arr[n - 1]);
}

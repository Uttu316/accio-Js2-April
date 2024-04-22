const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    printArray(arr, n);
    readline.close();
  });
});

function printArray(arr, n) {
  printArrayRecursive(arr, 0, n);
}

function printArrayRecursive(arr, i, n) {
  if (i == n) return;
  process.stdout.write(arr[i] + " ");
  printArrayRecursive(arr, i + 1, n);
}

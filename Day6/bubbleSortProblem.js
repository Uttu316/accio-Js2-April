const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  let n = parseInt(input[0]);
  let arr = input[1].split(" ").map(Number);
  bubbleSort(arr, n);
});

function bubbleSort(arr, n) {
  let count = 0;
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n - 1; i++) {
      const left = arr[i];
      const right = arr[i + 1];

      if (left > right) {
        swap(arr, i, i + 1);
        count++;
      }
    }
  }

  console.log(count);
  console.log(arr[0]);
  console.log(arr[n - 1]);
}

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
  return arr;
}

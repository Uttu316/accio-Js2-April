const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (N) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    bubbleSort(N, arr);
    console.log(arr.join(" "));
    readline.close();
  });
});

function bubbleSort(N, arr) {
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N - 1; i++) {
      const left = arr[i];
      const right = arr[i + 1];

      if (left > right) {
        swap(arr, i, i + 1);
      }
    }
  }

  return arr;
}

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
  return arr;
}

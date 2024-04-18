const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let n = parseInt(input[0]);
  let arr = input[1].split(" ").map(Number);
  let l = parseInt(input[2]);

  let ans = sorting4(arr, n, l);
  console.log(ans);
});

function sorting4(arr, n, l) {
  arr.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < n - 2; i++) {
    let x = arr[i];

    for (let j = i + 2; j < n; j++) {
      let z = arr[j];
      const dist = z - x;
      if (dist <= l) {
        count += j - i - 1;
      }
    }
  }
  return count;
}

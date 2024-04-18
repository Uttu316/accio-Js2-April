const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  rl.on("line", (a) => {
    const nums = a.split(" ").map(Number);
    const ans = findMax(nums);
    console.log(ans);
    rl.close();
  });
});

function findMax(arr) {
  const n = arr.length;
  arr.sort((a, b) => a - b);

  let a = arr[0];
  let b = arr[1];

  let c = arr[n - 1];
  let d = arr[n - 2];

  let diff = c * d - a * b;
  return diff;
}

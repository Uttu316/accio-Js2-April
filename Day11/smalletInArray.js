const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    console.log(min(arr, n));
    readline.close();
  });
});

function min(arr, n, ans = Infinity) {
  if (n === 0) {
    return ans;
  }
  const curr = arr[n - 1];

  if (curr < ans) {
    ans = curr;
  }
  return min(arr, n - 1, ans);
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    let ans = Sorting021(n, arr);
    console.log(ans.join(" "));
    readline.close();
  });
});

function Sorting021(n, arr) {
  // Write your code here
  let zeros_count = 0;
  let ones_count = 0;
  let twos_count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) zeros_count++;
    else if (arr[i] == 1) ones_count++;
    else if (arr[i] == 2) twos_count++;
  }
  let result = [];
  for (let i = 0; i < zeros_count; i++) result.push(0);
  for (let i = 0; i < twos_count; i++) result.push(2);
  for (let i = 0; i < ones_count; i++) result.push(1);
  return result;
}

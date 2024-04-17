const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  zero_one_two_sorting(arr);
  console.log(arr.join(" "));
});

function zero_one_two_sorting(arr) {
  // Write your code here

  const obj = {};

  for (let i of arr) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i] += 1;
    }
  }

  let k = 0;
  for (let i = 0; i < obj["0"]; i++) {
    arr[k] = 0;
    k++;
  }
  for (let i = 0; i < obj["1"]; i++) {
    arr[k] = 1;
    k++;
  }
  for (let i = 0; i < obj["2"]; i++) {
    arr[k] = 2;
    k++;
  }
  return arr;
}

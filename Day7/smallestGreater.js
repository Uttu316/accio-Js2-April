var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let Arr = inputArr[1].split(" ").map((x) => parseInt(x));

  console.log(smallestGreaterElements(Arr).join(" "));
}

function smallestGreaterElements(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let minDiff = Infinity;
    let minDiffPos = -1;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        const currDiff = arr[j] - arr[i];
        if (currDiff < minDiff) {
          minDiff = currDiff;
          minDiffPos = j;
        }
      }
    }
    if (minDiffPos !== -1) {
      ans.push(arr[minDiffPos]);
    } else {
      ans.push(-10000000);
    }
  }
  return ans;
}

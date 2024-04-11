// your code here
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const str = inputArr[0];
  console.log(isPangram(str));
}

function isPangram(str) {
  str = str.toLowerCase();

  const buckets = new Array(26).fill(false);

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch >= "a" && ch <= "z") {
      const code = ch.charCodeAt();

      const index = code - 97;
      buckets[index] = true;
    }
  }

  let isPanagram = true;
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] === false) {
      isPanagram = false;
      break;
    }
  }

  return !isPanagram ? "not pangram" : "pangram";
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  console.log(isPalindrome(str));
  rl.close();
});

function isPalindrome(s) {
  s = s.toLowerCase();
  let newStr = "";
  for (let i of s) {
    if (i >= "a" && i <= "z") {
      newStr += i;
    }
  }

  let i = 0;
  let j = newStr.length - 1;
  let isPalindrome = 1;
  while (i < j && j >= 0 && i <= newStr.length) {
    if (newStr[i] === newStr[j]) {
      i++;
      j--;
    } else {
      isPalindrome = 0;
      break;
    }
  }
  return isPalindrome;
}

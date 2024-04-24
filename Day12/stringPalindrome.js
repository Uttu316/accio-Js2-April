const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  const result = isPalindrome(input);
  console.log(result ? "YES" : "NO");
  rl.close();
});

function isPalindrome(str, i = 0, j = str.length - 1) {
  if (i >= j) {
    return true;
  }
  if (str[i] === str[j]) {
    return isPalindrome(str, i + 1, j - 1);
  }
  return false;
}

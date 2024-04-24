const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  console.log(CountABC(input, 0));
  rl.close();
});
function CountABC(str, i = 0, ans = 0) {
  if (i === str.length - 2) {
    return ans;
  }
  const curr = str.slice(i, i + 3);
  if (curr === "abc" || curr === "aba") {
    ans += 1;
  }
  return CountABC(str, i + 1, ans);
}

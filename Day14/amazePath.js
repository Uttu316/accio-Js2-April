const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function count(n, m, i = 1, j = 1, ans = "") {
  // console.log(i,j)
  if (i == n && j === m) {
    console.log(ans);
    return 1;
  }
  if (i > n || j > m) {
    return 0;
  }

  return count(n, m, i, j + 1, ans + "h") + count(n, m, i + 1, j, ans + "v");
}

rl.question("", (n) => {
  rl.question("", (m) => {
    // console.log(Number(n),Number(m))
    // const [n, m] = input.split(' ').map(Number);
    count(Number(n), Number(m));
    rl.close();
  });
  rl.close();
});

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  const n = parseInt(input, 10);
  paths(n, "");
  rl.close();
});

function paths(n, ans = "") {
  if (n === 0) {
    console.log(ans);
    return;
  }
  if (n < 0) {
    return;
  }

  paths(n - 1, ans + "1");
  paths(n - 2, ans + "2");
  paths(n - 3, ans + "3");
}

//question:https://course.acciojob.com/idle?question=c6abdf5c-6981-4f50-8908-0ce691ee6851

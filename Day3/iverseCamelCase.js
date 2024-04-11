const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  solution(str);
  rl.close();
});

function solution(s) {
  let curr = "";
  let out = [];
  for (let ch of s) {
    if (ch === ch.toUpperCase()) {
      out.push(curr);
      curr = ch;
    } else {
      curr += ch;
    }
  }
  out.push(curr);
  out.shift();

  for (let i of out) {
    console.log(i);
  }
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function shuffleString(indices, s) {
  const arr = new Array(indices.length).fill("");

  for (let i = 0; i < s.length; i++) {
    const pos = indices[i];
    arr[pos] = s[i];
  }

  console.log(arr.join(""));
}

readline.question("", (n) => {
  readline.question("", (str) => {
    readline.question("", (arr) => {
      arr = arr.split(" ").map(Number);
      shuffleString(arr, str);
      readline.close();
    });
  });
});

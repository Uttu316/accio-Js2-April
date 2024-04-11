const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function hey(str) {
  // Your code here

  const number_of_e = str.length - 2;

  let result = "h";

  for (let i = 0; i < number_of_e; i++) {
    result += "ee";
  }

  // const es= "e".repeat(number_of_e*2)

  // result+=es
  result += "y";

  return result;
}

readline.question("", (str) => {
  let result = hey(str);
  console.log(result);
  readline.close();
});

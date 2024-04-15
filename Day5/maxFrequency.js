const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (s) => {
  console.log(MaximumFrequencyChar(s));
  readline.close();
});
function MaximumFrequencyChar(s) {
  //task -1 create an array where each index will denote one alphabet
  // let array=new Array(26).fill(0);
  // //task-2 store the frequency of the alphabet at each index of the array
  // for(let i=0;i<s.length;i++){
  //     let index=s.charCodeAt(i)-97;
  //     array[index]++;
  // }
  // //task-3 find the maximum frequency
  // let ma=Math.max(...array);
  // //task-4 print the alphabet with the maximum frequency
  // for(let i=0;i<26;i++){
  //     if(array[i]==ma){
  //         let ASCII=i+97;
  //         return String.fromCharCode(ASCII);
  //     }
  // }
  // return 'a';

  let obj = {};

  for (let i of s) {
    if (obj[i]) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }

  let maxChar = "";
  let max = -Infinity;

  for (let key in obj) {
    const value = obj[key];
    if (value > max) {
      max = value;
      maxChar = key;
    }
    if (max == value) {
      if (maxChar > key) {
        maxChar = key;
      }
    }
  }
  return maxChar;
}

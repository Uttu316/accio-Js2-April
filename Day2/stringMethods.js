str.charCodeAt(index); // ascci value of a particular char on that index

String.fromCharCode(asciiValue); // char of that ascii
let str = [1, 2, 3, 14, 26];

for (i = 0; i < str.length; i++) {
  const ascii = str[i] + 64;
  console.log(String.fromCharCode(ascii));
}

let st = "ABCZ";

for (let i = 0; i < str.length; i++) {
  console.log(st[i].charCodeAt() - 64);
}

let a = "Bhavesh is Cool boy";

console.log(a.toLowerCase());
console.log(a.toUpperCase());

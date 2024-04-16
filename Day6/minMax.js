let arr = [4, 3, 21, 11, 99, 1, 45];

let max = arr[0];
let maxPos = -1;
let min = arr[0];
let minPos = -1;

for (let i = 0; i < arr.length; i++) {
  const curr = arr[i];
  if (curr > max) {
    max = curr;
    maxPos = i;
  }
  if (curr < min) {
    min = curr;
    minPos = i;
  }
}

console.log({ max, min, maxPos, minPos });

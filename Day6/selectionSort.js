//step 1: loop for i  till n
//step 2: initalize two variables to find smallestPos
//step3: loop for j from i to n
//step 4: find the smallest positon
//step:5 after loop swap the smallestPos with ith element;

let arr = [5, 4, 32, 99, 1, 2];
let n = arr.length;

for (let i = 0; i < n; i++) {
  let min = arr[i];
  let minPos = i;
  for (let j = i; j < n; j++) {
    if (min >= arr[j]) {
      min = arr[j];
      minPos = j;
    }
  }
  swap(arr, minPos, i);
}

console.log(arr);
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  rl.on("line", (a) => {
    const arr = a.split(" ").map(Number);
    const result = isSorted(arr, N);
    console.log(result ? "Yes" : "No");
    rl.close();
  });
});

function isSorted(arr, n) {
  let s = -1;
  let e = -1;

  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      s = i;
      break;
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i - 1] > arr[i]) {
      e = i;
      break;
    }
  }

  /* if start to end, array is not in decreasing order, it can't be sorted by reversing*/
  for (let i = s; i < e; i++) {
    if (arr[i] < arr[i + 1]) {
      return false;
    }
  }

  //start element should not greater than end+1 element.
  if (arr[s] > arr[e + 1]) {
    return false;
  }

  //end element  should not smaller than the start+1 element
  if (arr[e] < arr[s - 1]) {
    return false;
  }

  return true;
}

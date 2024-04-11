let arr = ["Abhay", "ishan", "Deepak", "Shalini"];

arr.push(1); // adds value in the end of the array

arr.pop(); // remove the last value
arr.pop();

arr.shift(); // removes the first element

arr.unshift("Shubam"); // add the value in the begining

const isPresent = arr.includes("Abhay");

const arrayB = [1, 2, 3];

const arrayAB = arr.concat(arrayB);

console.log(arr, isPresent, arrayAB);
//splice
//slice
//fill
//reverse
//indexOf
//lastIndexOf
//join
//flat

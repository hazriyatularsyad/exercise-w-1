function sumArray(arr1, arr2) {
  return arr1.map((num, index) => num + (arr2[index] || 0));
}

let arr1 = [1, 2, 3];
let arr2 = [3, 2, 1];

let sum = sumArray(arr1, arr2);
console.log(sum);

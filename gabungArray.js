function gabungArray(arr1, arr2) {
  return [].concat(arr1, arr2);
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let gabung = gabungArray(arr1, arr2);

console.log(gabung);

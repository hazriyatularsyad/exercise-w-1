function findSecondSmallest(arr) {
  let angkaUrut = arr.slice().sort(function (a, b) {
    return a - b;
  });

  let angkaKedua = angkaUrut[1];

  return angkaKedua;
}

let arr = [5, 3, 1, 7, 2, 6];
console.log(findSecondSmallest(arr));

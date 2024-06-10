function lowest(arr) {
  let min = Math.min(...arr);

  let max = Math.max(...arr);

  let sum = arr.reduce((a, b) => a + b);
  let average = sum / arr.length;

  return {
    min: min,
    max: max,
    average: average,
  };
}

let arr = [12, 5, 23, 18, 4, 45, 32];
let hasil = lowest(arr);

console.log(`angka terendah = ` + hasil.min);
console.log("angka teringgi = " + hasil.max);
console.log(`rata rata = ` + hasil.average);

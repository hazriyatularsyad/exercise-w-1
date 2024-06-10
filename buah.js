function addAnd(arr) {
  arr.splice(3, 0, "and");
  return '"' + arr.join(", ") + '"';
}

let arr = ["apple", "banana", "cherry", "date"];
let result = addAnd(arr);
console.log(result);

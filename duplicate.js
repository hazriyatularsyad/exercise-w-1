function findDuplicates(arr) {
  return arr.filter((num, index) => arr.indexOf(num) !== index);
}

let number = [1, 2, 2, 2, 3, 3, 4, 5, 5];

let duplicates = findDuplicates(number);
console.log(duplicates); 

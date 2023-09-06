//arreglos, no usar push
const array = [1, 2, 3, 4];
let array2 = [...array, 5];
const array3 = array2.map((element) => element * 2);

console.log("array", array);
console.log("array2", array2);
console.log("array3", array3);

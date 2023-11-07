const myArray = [1, 2, 3];
console.log(myArray);

const myArray2 = new Array(1, 2, 3, 4);
console.log(myArray2);
const eqVar = myArray.toString() === myArray2.toString();
console.log(myArray.toString());
console.log(eqVar);
myArray2.length = 2;
console.log(myArray2.toString());
myArray2.length = 8;
console.log(myArray2.toString());

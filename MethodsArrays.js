const myNewArray = new Array();
myNewArray.push(12, 18, 99);
console.log(myNewArray);
const lastArrayElement = myNewArray.pop();
console.log(lastArrayElement, myNewArray);
myNewArray.unshift(55, 128);
console.log(myNewArray);
console.log(myNewArray.sort((a, b) => a - b));

const myNewStringArray = new Array("one", "fourthenn", "two", "three");
console.log(myNewStringArray.sort((a, b) => a.length - b.length));

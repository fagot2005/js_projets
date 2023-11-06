//Традиционные функции
const a = 10;
const b = 20;

function myFunc(a, b) {
  let c;
  a++;
  return (c = a + b);
}
//Стрелочные функции
console.log(myFunc(12, 15));
console.log(myFunc(55, 99));
console.log("============================================");
const myFunction = (x, y) => {
  return x ** y;
};

console.log(myFunction(20, 2));

console.log(myFunction(5, 3));
console.log("============================================");
const myNewFunction = (x, y) => x ** y;

console.log(myNewFunction(20, 2));

console.log(myNewFunction(5, 3));
console.log("==================================");

//Значение параматра по умолчанию если второй параметр не передается в функцию  
function multByFactory(value, multiplayer = 1) {
  return value * multiplayer;
}

console.log(multByFactory(20, 7));
console.log(multByFactory(20));

const multByFactoryFunct = (x, y = 1) => x ** y;
console.log(multByFactoryFunct(20, 3));
console.log(multByFactoryFunct(20));

const newPost = (post, addetAdd = Date()) => ({
  ...post,
  addetAdd,
});

const firstPost = {
  id: 1,
  autor: "Vitalii",
};

console.table(firstPost);
console.table(newPost(firstPost));

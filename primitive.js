const a = {
    first: 20,
    second: true
}

console.log(a.first);
console.log(a.second);

a.first = 50;

console.log(a.first);
console.log(a.second);

const b = a;
b.first = 1000;
console.log(a.first);
console.log(a.second);
console.log(b.first);
console.log(b.second);
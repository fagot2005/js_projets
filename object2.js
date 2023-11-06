const buttonRed = {
  color: "red",
  withButton: 180,
};

const buttonGrean = {
  hight: 200,
  year: 2023,
};

console.table(buttonRed);
console.table(buttonGrean);

const buttomAll = {
    ...buttonRed,
    ...buttonGrean
}

console.table(buttomAll)

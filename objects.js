const myCity = {
    country: 'USA',
    name: 'Uta',
    popular: true
}

console.log(myCity.country);
console.log(myCity);

myCity.countOfSitizens= 100000;

console.log(myCity);

delete myCity.name;

console.log(myCity);

myCity['name'] = 'Peru';
console.log(myCity);

const countryState = 'state';
myCity[countryState] = 'Minisota';
console.log(myCity);
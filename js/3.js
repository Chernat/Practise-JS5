var auto = new carContructor('UAZ', 1928, 123123, 'yellow');
var auto2 = new carContructor('BMW', 2010, 12000, 'red');

console.log(auto);
console.log(auto2);

function carContructor(brand, releaseYear, mileage, color) {
  this.brand = brand;
  this.releaseYear = releaseYear;
  this.mileage = mileage;
  this.color = color;
}

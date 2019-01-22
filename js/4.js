var city = new City('Kiev', 4000000, 'Ukraine');

console.log(city);
console.log(city.getCityName());
console.log(city.getPopulation());
console.log(city.addCitizen());
console.log(city.addCitizen());

function City(name, population, country) {
  this.name = name;
  this.population = population;
  this.country = country;
  this.getCityName = function() {
    return this.name;
  };
  this.getPopulation = function() {
    return this.population;
  };
  this.addCitizen = function() {
    return ++this.population;
  };
}

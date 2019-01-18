var auto = new carContructor('UAZ', 1928, 123123, 'yellow', true, true, 10);
var auto2 = new carContructor('BMW', 2010, 12000, 'red', false, true, 10);

console.log(auto);
console.log(auto2);

function carContructor(brand, releaseYear, mileage, color, ignition, start, fuelCount) {
  this.brand = brand;
  this.releaseYear = releaseYear;
  this.mileage = mileage;
  this.color = color;
  this.ignition = ignition,
  this.start = start,
  this.fuelCount = fuelCount,

  ignitionSwitcher: function(val) {
    if (this.fuelCount > 0) {
      this.ignition = val;
    } else {
      console.log('Заправь свой корч');
    }
  },

  startSwitcher: function() {
    if (this.ignition) {
      console.log('Машина ' + this.brand + ' марки ' +this.color + ' цвета поехала');
      this.start = true;
    } else {
      alert('Ignition off')
    }
  },

  stopSwitcher: function() {
    if (!this.ignition) {
      this.start = false;
      console.log('Зажигание и так выключено');
    } else {
      this.start = false;
      this.ignition = false;
      console.log('Машинка остановилась');
    }
  },

  fuelRefill: function(val) {
    fuelCount += val;
  }
}

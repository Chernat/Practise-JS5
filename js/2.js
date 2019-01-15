var num1 = {
  number: 9
};

var num2 = {
  number: 3
};

console.log(getDoubled.call(num1));
console.log(getDoubledTripled(getDoubled.call(num1)));
console.log(getDoubled.call(num2));
console.log(getDoubledTripled(getDoubled.call(num2)));

function getDoubled() {
  return this.number * 2;
}

function getDoubledTripled(num) {
  return num * 3;
}

var num1 = {
  number: 9
}
var num2 = {
  number: 2
}

console.log(getDoubled(num1));
console.log(getDoubledTripled(getDoubled(num1)));
console.log(getDoubled(num2));
console.log(getDoubledTripled(getDoubled(num2)));

function getDoubled(obj) {
  obj.number *= 2;
  return obj;
}

function getDoubledTripled(obj) {
  obj.number *= 3;
  return obj;
}

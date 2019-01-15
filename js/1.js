var man = {
  name: 'Kolya',
  getNameMan: function() {
    console.log(this.name);
  }
};

console.log(getName.call(man));
man.getNameMan();

function getName() {
  return this.name;
}

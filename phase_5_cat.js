function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  console.log(`${this.name} loves ${this.owner}!!! :3`);
}

const cat1 = new Cat("Tom", "Jerry");
const cat2 = new Cat("Garfield", "John");

cat1.cuteStatement();

Cat.prototype.cuteStatement = function() {
  return `Everyone loves ${this.name}!!! :3`;
}

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());

Cat.prototype.meow = function() {
  return "MEOW!";
}

console.log(cat1.meow());
console.log(cat2.meow());

cat1.meow = function() {
  console.log(`${this.name} says, "Give me tuna."`);
}

cat1.meow();
console.log(cat2.meow());
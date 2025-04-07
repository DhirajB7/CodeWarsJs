function Warrior(n) {
  let nme = n;

  this.name = (n) => {
    if (n) {
      nme = n;
    }
    return nme;
  };
}

Warrior.prototype.toString = function () {
  return "Hi! my name's " + this.name();
};

Warrior.prototype.greet = function () {
  return "Welcome " + this.name();
};
const dhiraj = new Warrior("dhiraj");

console.log(dhiraj.toString());
console.log(dhiraj.greet());

const Person = function (age, firstName, lastName = "") {
  this.fullName = `${firstName} ${lastName}`;
  this.age = age;

  this.greet = function () {
    return `Welcome, ${this.fullName} .`;
  };
};

const dhiraj = new Person(35, "Dhiraj", "Basavaraju");

console.log(dhiraj.fullName, dhiraj.age);
console.log(dhiraj.greet());

Person.prototype.goodMessage = function () {
  return ` Hello, ${this.fullName} . Hope you had ${
    this.age * 365
  } amazing days.`;
};

console.log(dhiraj.goodMessage());

const Person = {
    name: "John Doe",
    age: 20,
    greet: function () {
      console.log(`Hello! My name is ${this.name} and I am ${this.age} years old.`);
    },
  };
  Person.isAdult = function () {
    return this.age >= 18;
  };
  Person.greet(); 
  console.log(Person.isAdult());
  
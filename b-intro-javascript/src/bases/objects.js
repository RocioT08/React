//objetos literales
const person = {
  name: "Tony",
  age: 12,
  dni: 123456,
  address: {
    city: "ny",
    zip: 123,
    lat: 12.343,
    long: 23.54,
  },
};

const person2 = { ...person };
person2.name = "Harry";

console.log("person", person);
console.log("person2", person2);
//console.log({ person });
//console.table(person);

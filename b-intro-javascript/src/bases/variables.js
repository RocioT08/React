//variables
const firstName = "Juan";
const lastName = "Perez";

let value = 5;
value = 3;

console.log("inicio = ", firstName, lastName, value);

if (true) {
  let value = 5;
  const firstName = "Lucas";
  console.log("value local =", value, firstName);
}

console.log("fin = ", firstName, lastName, value);

//functions

function greet(name) {
  return `Hola ${name}`;
}

const greet2 = (name) => `Hola ${name}`;

console.log("COMMON FUNCTION = ", greet("PEPE"));
console.log("ARROW FUNCTION = ", greet2("PEDRO"));

const getUser = () => ({ uid: 123, name: "JOSE" });
console.log("getUser", getUser());

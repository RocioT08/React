//strings
const firstName = "Juan";
const lastName = "Perez";

const fullName = `Su nombre es = ${firstName} ${lastName}, ${1 + 1}`;

console.log(fullName);

function getSaludo(name) {
  return "Hola : " + name;
}

console.log(`Este es un texto ${getSaludo(fullName)}`);

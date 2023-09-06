//desestructuracion
const persona = {
  nombre: "ariana",
  edad: 23,
  uid: 12345,
  direccion: "quito",
};

const { nombre: name, uid, edad, direccion } = persona;
console.log("person = ", name, uid, edad, direccion);

const returnPersona = ({ nombre, edad, rango = "soldado" }) => {
  console.log("returnPersona = ", nombre, edad, rango);
};

returnPersona(persona);

const test = ({ uid, direccion }) => {
  return {
    dni: uid,
    address: direccion,
    lnglat: {
      lng: 12.566,
      lat: 98.77,
    },
  };
};

const {
  dni,
  address,
  lnglat: { lng, lat },
} = test(persona);

console.log(dni, address, lng, lat);

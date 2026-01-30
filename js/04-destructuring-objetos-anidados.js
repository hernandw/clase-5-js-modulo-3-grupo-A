const persona = {
  nombre: "Arly",
  apellido: "Donoso",
  edad: 22,
  ciudad: "Los Angeles",
  saludo: function () {
    console.log("Hola soy Arly");
  },
  ocupacion: {
    titulo: "Medico",
    aniosExp: 1,
    especialidad: {
      title: "Cirujano",
      estudios: "postgrado",
      ejecucion: function () {
        console.log("es una buena doctora");
      },
    },
  },
};

const { apellido } = persona;

//console.log(apellido)
/* const {
  ocupacion,
  ocupacion: { titulo },
} = persona; */

//console.log(titulo);

const {
  ocupacion: {
    especialidad: { estudios },
  },
} = persona;

console.log(estudios);

const {title} = persona.ocupacion.especialidad

console.log(estudios);

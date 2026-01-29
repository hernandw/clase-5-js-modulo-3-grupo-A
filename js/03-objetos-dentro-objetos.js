const productos = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
  ejecutar: function () {
    console.log("es un producto de buena calidad");
  },
  informacion: {
    peso: "1kg",
    medida: "20 pulgadas",
    fabricacion: {
      pais: "Chile",
      Empresa: "Spa Ventas",
      verificaPais: function () {
        console.log("el pais es de muy buena garantia");
      },
    },
  },
};

/* console.log(productos.nombre);
console.log(productos.informacion.peso);
console.log(productos);
console.log(productos.informacion.fabricacion.pais); */

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

/* console.log(persona.nombre);
console.log(persona.ciudad);

console.log(persona.ocupacion.aniosExp);
console.log(persona.ocupacion.especialidad.estudios)
console.log(persona.saludo()) */
console.log(persona.ocupacion.especialidad.ejecucion())

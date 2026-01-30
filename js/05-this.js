//let nombre = "Pedro"
//let edad = 50

const persona = {
  nombre : "Juan",
  edad: 30,
  profesion: "Desarrollador",
  saludar: function () {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  },
};

//console.log(persona.saludar())

const otraPersona = {
  nombre: "Maria",
  edad: 25,
  profesion: "Diseñadora",
  saludar: () => `Hola, mi nombre como estas y tengo hambre.`,
};

console.log(otraPersona.saludar());

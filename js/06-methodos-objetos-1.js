const persona = {
  nombre: "Juan",
  edad: 30,
    profesion: "Desarrollador", 
    saludar: function() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
};

//console.log(persona)

//obtener las claves del objeto

const claves= Object.keys(persona)

//console.log(claves)

//obtener los valores del objeto

const valores = Object.values(persona)

//console.log(valores)

//Obtener matriz de clave-valor del objeto

const entradas = Object.entries(persona)

console.log(entradas)


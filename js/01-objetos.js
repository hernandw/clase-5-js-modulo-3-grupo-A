//Objetos: son unap pieza clave en Js. Un Objeto es una colección de propiedades y métodos.

let nombre = "Pedro"
let edad = 30
let email = "correo@gmail.com"



//Objeto puede definirse en una variable

const persona = {
    nombre: "Pedro",
    edad: 30,
    email: "correo@gmail.com",
    saludar: function(){
       console.log("buenas tardes")
    }

}




//Notacion de puntos

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.email)
console.log(persona.saludar())




const producto = {
    
    price: 20,
    stock: 5,
    disponible: true, 
    nombre: "Teclado inalambrico"

}
console.log(producto.name)

//Notacion de Corchetes
console.log("notacion de puntos ", producto.nombre)
console.log("notacion de corchetes ", producto['nombre'])


let nombre2 = "Susana"

nombre2 = "Carlos"

producto.nombre = "Disco Duro Samsung"
producto.color = "Azul"

delete producto.nombre

console.log(producto)


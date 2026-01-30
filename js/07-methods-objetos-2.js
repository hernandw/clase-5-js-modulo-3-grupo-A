let array = [5, 7, 3, 8, 10, 5, 23];

//console.log(array)

//Con el metodo for

/* for(let i = 0; i < array.length ;i++){
    console.log(array[i])
}
 */
//con el metodo forEach

array.forEach((item) => console.log(item));

const letter = ["a", "b", "c", "d", "e"];

for (let i = 0; i < letter.length; i++) {
    console.log(`letra: ${letter[i]}`);
}
console.log("*****************")

letter.forEach(item=>console.log(`letra: ${item}`))


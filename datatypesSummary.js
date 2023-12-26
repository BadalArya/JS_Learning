// # Primitive Data Types
// These are of 7 types :
// String, Number, Boolean, null, undefined, Symbol, BigInt

const Id = Symbol('123')
const anotherId = Symbol('123')
// console.log(Id)
// console.log(anotherId)
// console.log(Id == anotherId) // Are not Equal because symbols are used to define uniqueness


/*

Is JavaScript statically type or dtnamically typed languaga ?
Dynamicall typed because we dont define data types in JS

 */

// #Reference TypeError(Non - Primitive)
// Arrays, Objects, Functions (3 - Types)

const heroes = ["shaktiman", "nagraj", "doga"]
console.log(heroes)
let myObj = {
    name : "Badal",
    age : "22"
}
// console.log(myObj)

const myFunction = function(){
    console.log("Hello, world");
}
// console.log((myFunction));
myFunction()
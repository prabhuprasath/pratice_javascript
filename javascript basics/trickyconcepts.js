/*
what is the difference between value and reference?

There are two types of datatypes in js
primitive and reference
primitive values won't affect the original value it is called passed by value
reference will affect the original value it is called passed by reference.
eg:*/

//primitive
let num1 = 100;

let num2 = 200;

let result = num2;
console.log(result);

result = 600;
console.log(result);

//reference
let shop = {name:'walmart'};
let shop2 = shop;
shop2.name = 'supermaket';

console.log(shop.name);
console.log(shop2.name);

//null and undefined

//both represents 'no-value' but indepth null is zero or nothing
//and undefined is yet to defined

let name ;

console.log(name);

name = 'jon'

console.log(name);

let age = null;

console.log( typeof age);

console.log(typeof null);


//truthy and falsy

//if condition has a single character then it is called as truthy
//eg:
//flasy eg are ``,'',"",0,-0,NaN,null,undefined.

const checktruthy = 'T';

if(checktruthy){
    console.log(`yes your value is truthy`);
}
else{
    console.log(`no your value is flasy`);
}

//Ternary operator

const numberofflowers = 5;
numberofflowers<2 ? console.log(`you are right`):console.log(`you are wrong`);







// javascript are loosely typed means you don't have to declare the type 
//numbers are always blue in console
//strings are always black in console

let price = 100;
price = 'hundred';
console.log(price);

let priceindecimal = '2.888';
console.log(priceindecimal);

//simple math operation
//% modules returns the reminder

let num1 =  200;

let num2  =  400;

console.log(num2 % num1);

num1 += 900;

const ans =   num1 + num2;

console.log(ans);


num2 --;

console.log(num2);

num2 = 2000;
num2 --;
console.log(num2);

//Datatypes in javascript

//two types of datatypes primitive and objects.

//primitive are string , number , boolean , null , undefined , symbol(ES6).
//objects are arrays , functions , objects .

const subject = 'computer science';

console.log(typeof subject);

const cerdits = 80;

console.log(typeof 80);
console.log(typeof true);

//arrays 

//arrays are always index based.
//arrays methods push,unshift,pop

let vegetables = ['carrot','beetroot','cucumber','ladiesfinger',10_03_2001,'true',null,];

console.log(vegetables);

console.log(vegetables.pop());
console.log(vegetables.push('papaya'));

vegetables.unshift('banana');

console.log(vegetables);

console.log(vegetables.length);

//functions 
//functions has two steps 
//step 1 declare
//step 2 invoke

function addnumber() {

    const sum1 = 1000;
    const sum2 = 200;
    console.log(sum1 + sum2);
    
}
addnumber();

//parameters are placeholders

function goodmorning(personname1,personname2 , personname3) {

   
    console.log(`Goodmorning ${personname1}`);
     console.log(`Goodmorning ${personname2}`);
       console.log(`Goodmorning ${personname3}`);
    
}
goodmorning('prabhu prasath','john');

//returing the functions

const findlandb = function  (L,B) {

    const v = L*B;
    return v;

    
};

const firstAnswer = findlandb(10,5);
const secondAnswer = findlandb(100,200);
const thirdAnswer = findlandb(70,5);

const storingvalue = [firstAnswer,secondAnswer,thirdAnswer];

storingvalue.push(0);

console.log(storingvalue);

//objects in javascript
//objects are collections of properties
//objects are key value pairs 
// using dot notation you can access things in object.

const person = {

    name : 'rock',
    age : 47,
    proffession : 'actor',
    friends : ['randy','stonecold','johncena','kingbookerT'],
    message : function (name) {
        console.log(`Hello ${name}`);
        
    }
};

console.log(person.friends[3]);
person.message('rock');


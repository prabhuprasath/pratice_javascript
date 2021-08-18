const randomstring = '                 javascript                              ';

console.log(randomstring.length);

let value = randomstring.substring(2,6);

console.log(value);

console.log(randomstring.indexOf('s'));

console.log(randomstring.split(''));

console.log(randomstring.valueOf());

console.log(randomstring.toUpperCase());

console.log(randomstring.trim());

//array properties and array methods

const items = ['cars','bike','cycle'];

const city = ['chennai','chengalpattu','madurai'];

const result = items.concat(city);


console.log(result);

console.log(result.reverse());

console.log(result.includes('cycle'));

console.log(result.push('hello people'));

console.log(result);

//array and for loop

const food = ['dosa','biriyani','chappati'];
const anotherfood = ['sambarrice'];
let newarray = [];

for(let i = 0; i < food.length; i++){
    console.log(i);
    console.log(food[i]);

};

const finalvalue = food.concat(anotherfood);
console.log(finalvalue);

console.log (newarray.concat(finalvalue));


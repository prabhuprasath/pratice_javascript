// variables can contain digits,underscore,letters,$
//cannot start with number
//variables seperation would be camelcase or underscore

const my_bike = 'mt-15';
console.log(my_bike);

const random123 = 0;
console.log(random123);

const $fav_series = "breaking bad";
console.log($fav_series);

//keywords for Assigning variables
//var,let,const
//var and let can re-assign
//const (constant ) can't re-assign

var company;

console.log(typeof company);

let $company  = "zoho";

$company = "Google";

console.log($company);

const _company = "facebook";
console.log(_company);


//"" or ''

const fav_dish = 'biriyani\'s is my favorite dish' ;
console.log(fav_dish);

const fav_cusine = 'chinese';

console.log(`my favorite cusine is ${fav_cusine}`);

//string concatenation
//you can to string concatenation in two ways either using + or ``(backticks)
//using backticks is called template string.

const greeting = 'Good morning';

console.log(greeting + ' prabhu prasath!');

console.log(`${greeting} prabhuprasath!`);


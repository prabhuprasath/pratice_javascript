//global scope

const name = 'bobo';

//global variable can access from anywhere in the program


function calculate() {

    console.log(name);
    
}
calculate();


//local scope

function todolist() {

    let work = 'coding';
    work = 'programming'
    //if you don't declare the keyword for the variable it will take is as global variable.
    isfun = true;
     return work;

}
let store = todolist();

console.log(store);

console.log(isfun);

//variable lookup

const globalnumber = 500;

function addnumber(a,b){


    const result = a + b + globalnumber;
    return result;

}
const finalresult = addnumber(100,100);

console.log(finalresult);



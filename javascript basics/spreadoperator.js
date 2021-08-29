//spread operator

const numbers = [1,2,3,4,5,6,7,8,9];


const alphabet = ['A,B,C,D,E,F,G,H'];

const  numbers2 = [10,11,12,13];

const newarray = [...alphabet ,...numbers,...numbers2];

console.log(newarray);

//cookies

document.cookie = 'stylelanguage = css';

//oops in js
const phonedetails = {

    phonename : 'realme 5 pro',
    lunchyear : 2020,
    color : 'green',
    unlock : () => {
        console.log(`swipe up to unlock ${phonedetails.phonename}`);
        
    }
};

console.log(phonedetails.color);
phonedetails.unlock();

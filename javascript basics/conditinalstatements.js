//conditional statements in js.

// ==,===,>,<,<=,>=,!=,!==
//== checks only value
//=== checks value and the type

const value = 100;

if(value<=101){
    console.log(`It's correct`);
}

const tshirt = 'Good vibes only';

if(tshirt=='Good vibes only'){
    console.log('yesss');
}

let value2 ;

if(value2===value2){
    console.log(typeof value2);
    console.log('hello');

}

/*logical operators

&& (and)
|| (or)
! (not)
*/

const planets = 9;

if(planets === 9 || planets ==10){
console.log(`Total planets are 9`);
};

//switch statements

const ourplanet  = 'earth';

switch (ourplanet){

    case 'earth' :{
        console.log(`our planet is:  ${ourplanet}`);
         break;
    }
    case 'mars' :{
        console.log(`mars is not our planet`);
        break;

    }

    default :{
        console.log(`can't find!`);
    }
   
};

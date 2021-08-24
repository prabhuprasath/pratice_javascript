const me ={

    firstname : 'prabhu',
    lastname : 'prasath',
    age : 20,
    sex : 'male',
    height : 5.6
}


for(const store in me){
        
    console.log(me[store]);

}


const items = ['one','two','three','four'];

for(const v in items){
    console.log(v);

}

for(const o of items){
    console.log(o);
}

//for in ----> objects
//for of ----> arrays

const keyboardshortcuts = {

    ctrlc : 'copy',
    ctrlv : 'paste',
    ctrlx : 'cut'
};


//console.log(keyboardshortcuts.ctrlc);

for(const s in keyboardshortcuts){
    console.log(keyboardshortcuts[s]);

}

const keyboardshortcuts2 = ['copy','paste','cut'];

for(const k of keyboardshortcuts2){
    console.log(k);

}


for(let x = 5000; x<=7000; x+=1000){
    console.log(x);
}


for(let r = 500; r>=0; r--){
    console.log(r);

}



function addnumber(value1,value2){

console.log(value1 + value2);

};


function addstring(name1,name2,cb,cb2,cb3){
    cb2();
    console.log(name1 + name2);
    cb(100,200);
    cb3(2001,2021);
    

}
addstring('hello',"world",addnumber,touppercase,calculateage);


function touppercase(){

    const stringname = 'prabhuprasath';
    const storevalue = stringname.toUpperCase();
    console.log(storevalue);
}


function calculateage(bornyear,currentyear){
    console.log(currentyear - bornyear);

};



const opendoor = () =>{

    
    console.log('door opened!');
}




const cardetails = (carname,carmodel,lunchyear,cb) =>{

    console.log(`car name is ${carname},car model is ${carmodel},car lunchyear is ${lunchyear}`);
    cb();
}

cardetails('rollsrocye','ghost',2014,opendoor);







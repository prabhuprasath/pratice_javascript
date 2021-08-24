//loops
//while loops

let cgpa = 6.1;

while (cgpa<=10) {
    console.log(cgpa);
    cgpa +=2;
    
}

//do while

let salary = 20_000;

do{
    console.log(`your salary is: ${salary}`);
    salary += 10_000;
}while(salary<50_000); 

//for loops

for(let n = 2000; n<=6000; n +=2000){

    console.log(`your value is ${n}`);

};


for (let y = 6000; y>=1000; y -=2000){
    console.log(`your value is ${y}`);

};

for(let e = 8; e <=80; e +=8){
    console.log(e);

};

for(let reverse = 1000; reverse>=0; reverse --){
    console.log(reverse);

};

for(even = 100; even>=2; even -=2){
    console.log(even);

}

//for of is for arrays

const items = ['book','scale','pencil'];

for(let i of items){

    console.log(i);


} 




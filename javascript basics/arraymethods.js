//arraymethods in JS

//filter,map,some,every,includes,find,foreach

const appleproducts = [
{

     name : 'macbook m1',
     year : 2019,
     price : 100000

},
{
     name : 'iphone11',
     year  : 2020,
     price : 67000
},
{ 
     name : 'ipad',
     year : 2018,
     price : 50000

}

];

//filter
//filter item in the object

const items = appleproducts.filter((i) =>{

     return i.name!=='ipad';

});

const saveitems = items;
console.log(saveitems);

//map
//map specific item

const mapeditems  = appleproducts.map((m)=>{

     return m.price;

});

const s = mapeditems;
console.log(s);

//find 
//finds the corresponding object 

const finditem = appleproducts.find((f)=>{

     return  f.price === 67000;

});

const savefinditems = finditem;
console.log(savefinditems);

//foreach 

for(let f of appleproducts){
     console.log(f.price);

};

//some(any)
//checks some items in the object and perform boolean operation

const someitems  = appleproducts.some((s)=>{
     return s.year<2018;
});

const savesomeitem = someitems;
console.log(savesomeitem);


//every
//checks every item in object and perform boolean operation

const everyitems = appleproducts.every((e)=>{

     return e.price >= 50000;
})

const saveeveryitem = everyitems;
console.log(everyitems);

const checkevery = appleproducts.every((ev)=>{
     return ev.year>=2018;
})
console.log(checkevery);


//includes

const randomnumbers = [10,90,80,70,true,'masterinjs'];
const includes = randomnumbers.includes('masterinjs');
console.log(includes);
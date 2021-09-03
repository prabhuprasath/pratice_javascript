//learning DOM

//getelementbyid
const value  =  document.getElementById('one');
value.style.color = 'red';

//getelementsbytagname
//nodelist it is arraylike object

const tag = document.getElementsByTagName('li');
tag[0].style.color = 'blue';
tag[1].style.color  ='yellow';
tag[2].style.color = 'green';
console.log(tag);
console.log(tag.length);

//getelementbyclassname
//nodelist it is arraylike object

const classname = document.getElementsByClassName('orderlist');
classname[1].style.color  ='blue';
classname[2].style.color = 'red';
classname[0].style.color  ='green';

console.log(classname);
console.log(classname.length);

//queryselector

const message = document.querySelector('#simplemsg');
message.style.color = 'green';
console.log(message.nodeName);

//queryselectorall

const all = document.querySelectorAll('.selectall');
console.log(all);
console.log(all.length);

//navigating the dom
//navigate to children

const choose  = document.getElementById('selection');
choose.style.color = 'red';
//childnodes will also include whitescape
//fristnode and lastnode are always whitescapes
//const save  = choose.childNodes;
const save  = choose.children;
console.log(save);

//navigate top parentnode

const findparent =document.getElementById('parent');

const save2 = findparent.parentNode;
console.log(save2);

//nextsibling will return whitescape
//to access it use nextelementsiblings

const findnextelementsibling = document.getElementById('next');
const applyred = findnextelementsibling.nextElementSibling;
applyred.style.color = 'red';
console.log(findnextelementsibling.nodeName);

//textcontent
//it basically displays text 
const findtext = document.getElementById('displaytext');
console.log(findtext.textContent);

//getattribute --> shows attribute value
//setattribute

const findattribute= document.getElementById('follow');

const saveid = findattribute.getAttribute('id');
console.log(saveid);

const find = document.getElementById('find');
const storehref = find.getAttribute('href');
console.log(storehref);

const set = document.querySelector('#find');
set.nextElementSibling.setAttribute('id','attributedone');

const setattribute = document.getElementById('attributedone');
const show = setattribute.getAttribute('id');
console.log(show);

const savenewtextcontent  = setattribute.textContent = 'i have id of attributedone';
console.log(savenewtextcontent);

//classlist

const setcolorred = document.getElementsByClassName('color');
//setcolorred[0].style.color = 'red';
//setcolorred[1].style.color = 'red';
console.log(setcolorred);

setcolorred[0].nextElementSibling.style.color = 'red';
setcolorred[1].previousElementSibling.style.color = 'red';


//createelement

const element = document.createElement('h1');

const addtext = document.createTextNode('hello new element');

element.appendChild(addtext);

const creatednewelement = document.body.appendChild(element);
console.log(creatednewelement);

//clickevents

const btn = document.getElementById('btn');
btn.addEventListener('click',() =>{
    document.getElementById('h1').style.color = 'red';
    document.getElementById('h1').style.backgroundColor = 'black';

});


const body = document.getElementById('bodycolor');
body.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'green';
    alert('Do you want to change body color?')
})

const setbtncolor = document.getElementById('bodycolor');
setbtncolor.style.color = 'red';
setbtncolor.style.backgroundColor = 'black';

//mouseevents
const sethovercolor = document.querySelector('#hoverchangecolor');
sethovercolor.addEventListener('mouseenter',function(){
     document.getElementById('hoverchangecolor').style.color = 'blue';
    
    
});

//eventobject


const eobj = document.getElementById('mybtn');
eobj.addEventListener('click',(e)=>{
    console.log(e);

});

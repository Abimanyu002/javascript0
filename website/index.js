//console.log('Hello');
//console.log('my pizza');
//ALERT
//window.alert('This is an emergency');
//window.alert('watch out!!!!');
//comment this 
/* this is a comment
a comment*/
/*document.getElementById("header1").textContent='Hello'
document.getElementById("para1").textContent='pizza!!!'
//VARIABLES AND DATATYPES
let x;
let X;
let age=100;
let price=99.9;
let gpa=8.0;
console.log(`you are ${age} year old`);
console.log(`my gpa is ${gpa} fucked`);
console.log(typeof age)
let nickname="abu";
console.log(typeof nickname);
console.log(`your name is ${nickname} from now on`);
let mail="abi1213@mail.com"
let sunset=true;
console.log(`the sun rises in east :${sunset}`);*/
/*let fullname="abimanyu Mutharasan";
let age=20;
let student=false;
document.getElementById("p1").textContent=`this is my name : ${fullname}`;
document.getElementById("p2").textContent=age;
document.getElementById("p3").textContent=`i am a good boy : ${student}`;*/
//ARITHMETIC OPERATORS
/*let students=30;

//students=students+1
//students=students-1
//students=students*2
//students=students/2
//students=students**2
students+=1;
console.log(students);*/
//USER INPUT
//window prompt,form
/*let username;
//username=window.prompt('whats your user name');
//console.log(username);
document.getElementById("submit").onclick=function(){
    username=document.getElementById("name").value;
    document.getElementById("header1").textContent=`Hello ${username}`;
}*/
//TYPE CONVERSION
/*//let age=window.prompt("age");
age=Number(age);
let z='pizza';
let x=false;
let y=1234
x=Number(x);
y=String(y)
z=Boolean(z)
age+=1;
console.log(age,typeof(age));
console.log(Boolean(z),typeof(z));
console.log(age,typeof(age));
console.log(age,typeof(age));
*/
//CONST
/*const PI=3.14159;
let radius;
let circumference;
//PI=420;
radius=window.prompt('enter the radius');
circumference=2*PI*radius;
console.log(circumference);*/
/*const PI=3.14159;
let radius;
let circumference;

document.getElementById("submit").onclick=function(){
    radius=document.getElementById("radius").value;
    circumference=2 * PI * radius;
    document.getElementById("p1").textContent=`Circumference of The Circle is ${circumference}`;
}
*/
//MATH
//console.log(Math.PI);
/*
Math.floor
Math.ceil
Math.trunc--del decimal
Mathpow(x,y)--power
Math.sqrt()
Math.log()
Math.tan()
Math.abs() --mod
Math.sign--returns -1 or 1
Math.max(x,y,z,....)--maximun int
,,,,,min*/
//RANDOM NUMBER GEN
//let ran=Math.floor(Math.random() *(max-max))+min;
//
//CHECKED PROPRTY
/*const mental=document.getElementById("checks1");
const insane=document.getElementById("checks2");
const crazy=document.getElementById("radio1");
const mad=document.getElementById("radio2");
const confess=document.getElementById("confess");
let advice=document.getElementById("p1");
confess.onclick=function(){
    if(mad.checked){
        advice.textContent=`calm down`;
    }
    else if(crazy.checked){
        advice.textContent=`you need help`;
    }
    else if(insane.checked){
        advice.textContent=`you need to be locked down`;
    }
    else if(mental.checked){
        advice.textContent=`every one is`;
    }
    else if(mental.checked & insane.checked){
        advice.textContent=`call ambulance`;
    }
    if(crazy.checked & mental.checked & insane.checked){
        document.getElementById("p2").textContent=`call the cops`;
    }
    if(mad.checked & mental.checked & insane.checked){
        document.getElementById("p2").textContent=`call the police`;
    }
}
*/
//TERNARY OPERATOR
/*
let age=14;
console.log(age>=18 ? "you is an adult" : "back off");*/
//SWITCH
/*
switch(parameter);
    case 1(condition);
        statements;
        break;
    default;
        break;
        */
//String Methods
let name='__abimanyu__';/*
console.log(name.charAt(5));
console.log(name.indexOf('u'));
console.log(name.length);
console.log(name.trim());
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.lastIndexOf('a'));
console.log(name.trim().repeat(5));
console.log(name.startsWith("a"));
console.log(name.endsWith(" "));
console.log(name.replaceAll(" ","_"));
console.log(name.padStart(15,"_"));
console.log(name.padEnd(15,"_"))*/
//String Slicing
console.log(name.slice(2,10));
console.log(name.slice(2,));
console.log(name.slice(0,10));
console.log(name.slice(-1));
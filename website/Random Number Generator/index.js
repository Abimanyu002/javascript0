
const but=document.getElementById("but");
const l1=document.getElementById("lab1");
const l2=document.getElementById("lab2");
const l3=document.getElementById("lab3");
const min=1;
const max=6;
but.onclick=function(){
    l1.textContent=Math.floor ( Math.random() * max) + min;
    l2.textContent=Math.floor ( Math.random() * max) + min;
    l3.textContent=Math.floor ( Math.random() * max) + min;
}

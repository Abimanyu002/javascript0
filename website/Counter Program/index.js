//COUNTER
const increaseBtn=document.getElementById("increaseBtn");
const decreaseBtn=document.getElementById("decreaseBtn");
const resetBtn=document.getElementById("resetBtn");
const countlabel=document.getElementById("countlabel");
let count=0;
increaseBtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}
decreaseBtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}
resetBtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
let mode=document.getElementById("theme");
let background=document.getElementById("bodyid");
let currentMode;
mode.onclick=function(){
    let currentMode=document.getElementById("theme").innerHTML
    if(currentMode=='dark'){
        document.body.style.background = 'dimgrey';
        document.getElementById("theme").textContent='light';
        document.getElementById("theme").style.background='white';
        document.getElementById("theme").style.color='black';
    }
    else{
        document.body.style.background = 'white';
        document.getElementById("theme").textContent='dark';
        document.getElementById("theme").style.background='dimgrey';
        document.getElementById("theme").style.color='white';
    }
}
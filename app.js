var close=document.querySelector(".close");
var changeColor=document.querySelector(".color-change");
let a=document.getElementById("f1");
let b=document.getElementById("f2");
let c=document.getElementById("f3");

let red=document.getElementById("red");
let green=document.getElementById("green");
let blue=document.getElementById("blue");
let black=document.getElementById("black");
let body1=document.getElementById("body");

let h1=document.querySelector(".box h1");

function menuClose(){

    changeColor.classList.toggle("toggled");
    // close.classList.toggle('');
    a.classList.toggle("ch1");
    b.classList.toggle("ch2");
    c.classList.toggle("ch3");


    // // a.classList.toggle('t2');
    // a.style.transform="rotate(45deg)translateY(10px)";
    // b.style.display="none";
    // c.style.transform="rotate(-45deg)translateY(-10px)";
 

    
};

red.addEventListener('click',function(){
    body1.style.backgroundColor="#A41C2E";
    h1.style.color="white";

});

green.addEventListener('click',function(){
    body1.style.backgroundColor="#556B2E";
    h1.style.color="white";

});

blue.addEventListener('click',function(){
    body1.style.backgroundColor="#006DB0";
    h1.style.color="white";

});
black.addEventListener('click',function(){
    body1.style.backgroundColor="#1B1B1B";
    h1.style.color="white";

});

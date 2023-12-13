let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');

let value;
let c =0;

function onclicked1(){
    button1.style.backgroundColor = '#ff7b00';
    button2.style.backgroundColor = '#848484';
    button3.style.backgroundColor = '#848484';
    button4.style.backgroundColor = '#848484';
    button5.style.backgroundColor = '#848484';

    value = 1;
    let v = JSON.stringify(value);
    localStorage.setItem('valuenumber', v);

}



function onclicked2(){
    button2.style.backgroundColor = '#ff7b00';
    button1.style.backgroundColor = '#848484';
    button3.style.backgroundColor = '#848484';
    button4.style.backgroundColor = '#848484';
    button5.style.backgroundColor = '#848484';

    value = 2;
    let v = JSON.stringify(value);
    localStorage.setItem('valuenumber', v);

}

function onclicked3(){
    button3.style.backgroundColor = '#ff7b00';
    button1.style.backgroundColor = '#848484';
    button2.style.backgroundColor = '#848484';
    button4.style.backgroundColor = '#848484';
    button5.style.backgroundColor = '#848484';

    value = 3;
    let v = JSON.stringify(value);
    localStorage.setItem('valuenumber', v);


}

function onclicked4(){
    button4.style.backgroundColor = '#ff7b00';
    button1.style.backgroundColor = '#848484';
    button2.style.backgroundColor = '#848484';
    button3.style.backgroundColor = '#848484';
    button5.style.backgroundColor = '#848484';

    value = 4;
    let v = JSON.stringify(value);
    localStorage.setItem('valuenumber', v);


}

function onclicked5(){
    button5.style.backgroundColor = '#ff7b00';
    button1.style.backgroundColor = '#848484';
    button2.style.backgroundColor = '#848484';
    button3.style.backgroundColor = '#848484';
    button4.style.backgroundColor = '#848484';

    value = 5;
    let v = JSON.stringify(value);
    localStorage.setItem('valuenumber', v);


}

let submit = document.getElementById('sub');


function hoversubbtn(){
    submit.style.backgroundColor = 'white';
    submit.style.color = '#ff7b00';
}

function hoversubbtnout(){
    submit.style.backgroundColor = '#ff7b00';
    submit.style.color = 'white'
}



submit.addEventListener('click',()=>{
    location.href = './conformation.html';
})
    
submit.addEventListener('mousedown',()=>{
    submit.style.boxShadow = '0px 0px 0px transparent';
    submit.style.transform = 'translateY(3px)'
})

let MC = document.getElementById('maincard');
// console.log(MC);

function load(){

    MC.style.animationName = 'MCAnime';
    MC.style.animationDuration = '2s';
}
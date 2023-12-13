let val = document.getElementById('value');

let newvaluenum = localStorage.getItem('valuenumber');


val.textContent = JSON.parse(newvaluenum);



let MC = document.getElementById('maincard1');
// console.log(MC);

function load(){

    MC.style.animationName = 'MCAnimerev';
    MC.style.animationDuration = '2s';
}
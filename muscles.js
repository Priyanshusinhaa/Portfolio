var counter = 0;
var leftarrow = document.getElementById('leftarrow');
var rightarrow = document.getElementById('rightarrow');
var rightanc = document.getElementById('rightanchor');
var leftanc = document.getElementById('leftanchor');
var seclength = document.getElementsByClassName('sec').length
var mystr = "";
var mystr1 = "";

rightarrow.addEventListener('click', ()=>{
    if (counter == seclength-1){counter = 0;}
    else{counter += 1;}
    mystr = `#second${counter}`;
    rightanc.setAttribute('href', mystr );})

leftarrow.addEventListener('click', ()=>{
    if(counter <= 0){counter = seclength-1;}
    else{counter -= 1;}
    mystr1 = `#second${counter}`;
    leftanc.setAttribute('href', mystr1)})

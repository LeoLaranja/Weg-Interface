
function mostrar (){
let ul1 = document.querySelector(".ul1")  
if(ul1.style.display==="block"){
    ul1.style.display = "none";
}else{
    ul1.style.display = "block";
}
if(ul1.style.display==="block"){
    ul2.style.display = false
}
}

function mostrar2(){
let ul2 = document.querySelector(".ul2");
if(ul2.style.display==="block"){
    ul2.style.display = "none";
}else{
    ul2.style.display = "block";
}
}

function mostrar3(){
let ul3 = document.querySelector(".ul3");
if(ul3.style.display==="block"){
    ul3.style.display = "none";
}else{
    ul3.style.display = "block";
}
}

function mostrar4(){
let ul4 = document.querySelector(".ul4");
if(ul4.style.display==="block"){
    ul4.style.display = "none";
}else{
    ul4.style.display = "block";
}
}

function mostrar5(){
    let ul5 = document.querySelector(".ul5");
    if(ul5.style.display==="block"){
        ul5.style.display = "none";
    }else{
        ul5.style.display = "block";
    }
    }   

function ocultar(){
let ul1 = document.querySelector(".ul1")
let ul2 = document.querySelector(".ul2")
let ul3 = document.querySelector(".ul3")
let ul4 = document.querySelector(".ul4")
let ul5 = document.querySelector(".ul5")
ul1.style.display = "none";
ul2.style.display = "none"
ul3.style.display = "none"
ul4.style.display = "none"
ul5.style.display = "none"
sobre.style.display = "none"
}



function mostrarsenha(){
    let input= document.querySelector(".inputusenha");
    if(input.type=="password"){
        input.type="text"
    }else{
        input.type="password"
    }
}

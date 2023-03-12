"use strict";

let img = document.createElement("img");
img.src = "crepe.png";

document.body.prepend(img);

document.querySelector("h1").after(img);

img.className = 'c5';

let div = document.createElement("div");

document.body.append(div);
//attribut
div.id='stats'
div.className = 'c3';

let div1 = document.createElement("div");
let div2 = document.createElement("div");


div.append(div1);
div.append(div2);



div2.id = 'compteur';
let vc = 0;
div2.innerText = vc;


div1.append("Nombre de crepes :");

img.addEventListener("click", f)

function f() {
    vc++;
    div2.innerText = vc;
}

let div3 = document.createElement("div");
div.append(div3)
div3.innerText = "Nombre de Bigoudenes :"

let div4 = document.createElement("div");
div.append(div4)
div4.id = 'Bigoudenes'
let nb = 1
div4.innerText = nb

let bouton = document.createElement("input");
div.append(bouton)
bouton.id='button'
bouton.type = "button"
bouton.value = 10

bouton.addEventListener("click", d)

function d() {
    if (vc < bouton.value) {
        alert("error")
    } else {
        vc = vc - bouton.value;

        nb++

        bouton.value=10*(bouton.value)^2
        
    }
}
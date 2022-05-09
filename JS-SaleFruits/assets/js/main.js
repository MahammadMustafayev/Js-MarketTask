let n = document.querySelector(".new-1");
let cherry=document.getElementById("c");
let mix= document.querySelector(".mix-basket");
let Fsize =document.querySelectorAll(".fruits-size");
var İmgid= document.getElementById("fruit"); 

let currentImg;

function nbasket() {
    let x=document.getElementById("new-1");
    if (x.style.display="none") {
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}

function calc() {
    
    alert();
}

n.addEventListener("dragover",function (e) {
    e.preventDefault();
})

mix.addEventListener("dragover",function (el) {
    el.preventDefault();
})

Fsize.forEach(p=>{
    p.addEventListener("dragstart",function (el) {
        currentImg=this;
    })
})

n.addEventListener("drop",function (elem) {
    if (n.getAttribute("data-target") == currentImg.getAttribute("data-id")) {
        n.appendChild(currentImg);
    }
    else{
        alert("Duzgun Yerlesdir");
    }
    currentImg="";
})










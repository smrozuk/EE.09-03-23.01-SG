const jeden1 = document.querySelector("#seniorzy");
const dwa2 = document.querySelector("#sportowa");
const trzy3 = document.querySelector("#babcia");
const cztery4 = document.querySelector("#zaginione");

function jeden(){
    jeden1.style.display = "block";
    dwa2.style.display = "none";
    trzy3.style.display = "none";
    cztery4.style.display = "none";
}

function dwa(){
    jeden1.style.display = "none";
    dwa2.style.display = "block";
    trzy3.style.display = "none";
    cztery4.style.display = "none";
}

function trzy(){
    jeden1.style.display = "none";
    dwa2.style.display = "none";
    trzy3.style.display = "block";
    cztery4.style.display = "none";
}

function cztery(){
    jeden1.style.display = "none";
    dwa2.style.display = "none";
    trzy3.style.display = "none";
    cztery4.style.display = "block";
}
window.onload = function(){
    let listNumeros= ["A", "2", "3", "4","5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let listSuits=["♦", "♥", "♣", "♠"];

    let suitTop = document.getElementById("suit-top");
    let number = document.getElementById("number");
    let suitBottom = document.getElementById("suit-base");

    let suitRandom = listSuits[Math.floor(Math.random() * (3 - 0 + 1) ) + 0];
    let numberRandom = listNumeros[Math.floor(Math.random() * (12 - 0 + 1) ) + 0];

    suitTop.textContent = suitRandom;
    number.textContent = numberRandom;
    suitBottom.textContent = suitRandom;

    if (suitRandom == "♦" || suitRandom == "♥"){
        suitBottom.style.color = "red"
        suitTop.style.color = "red"
    }


};
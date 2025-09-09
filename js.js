//1a
let primtall = [7, 11, 13, 17, 19, 23, 43, 47, 53, 59, 61, 67];

//1b
function skrivUtPrimtall() {
    document.write(primtall)
} 
skrivUtPrimtall();
document.write("<br>");

//1c, 1d
function allePrimtall() {
    return [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
        43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
    ];
}
document.write("<br>" + allePrimtall());


//oppgave 2a 
document.write("<br>" + "<br>");
let tilfeldigeTall = [];

function fyllArray(Liste, nummer) {
    for (let i = 0; i < nummer; i++) {
        Liste.push(Math.floor(Math.random() * 100) + 1); 
    }
}

fyllArray(tilfeldigeTall, 100);
console.log(tilfeldigeTall); 
document.write("Tilfeldige tall: " + tilfeldigeTall);
//VISES BÅDE I KONSOLL OG NETTSIDE FORDI DET ER TØFFT


//oppgave 2b
document.write("<br>" + "<br>");
let femtiTall = [];
fyllArray(femtiTall, 50);
document.write("50 tilfeldige tall: " + femtiTall + "<br>");

//oppgave 2c
document.write("<br>");
femtiTall.sort(function(a, b) {
    return b - a;
});
document.write("Sortert synkende: " + femtiTall + "<br>");

//oppgave 2d
document.write("<br>");
let største = femtiTall[0];
let minste = femtiTall[femtiTall.length - 1];
document.write("Største tall: " + største + "<br>");
document.write("Minste tall: " + minste + "<br>");

//oppgave 3
document.write("<br>" + "<br>");

function reverserArray(arr) {
    let nyArray = [];
    for (let i = 0; i < arr.length; i++) {
        nyArray[i] = arr[arr.length - 1 - i];
    }
    return nyArray;
}

let ikkeBokstaver = [1, 2, 3, 4, 5];
let reversertIkkeBokstaver = reverserArray(ikkeBokstaver); 

document.write("Opprinnelig array: " + ikkeBokstaver + "<br>");
document.write("Reversert array: " + reversertIkkeBokstaver);












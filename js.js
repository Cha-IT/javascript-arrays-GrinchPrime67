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


//oppgave 2 
let tilfeldigeTall = [];
let tall = Math.random() * 100
tall = Math.floor(tall) + 1;

function fyllArray (Liste, nummer) {
    for (let i = 0; i < nummer; i++) {
        Liste.push(Math.floor(Math.random() * 100) + 1);
    }
}

fyllArray (tilfeldigeTall, 100);



console.log(tall);










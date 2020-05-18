'use strict'

// while

var year = 2018;
while (year <= 2051) {
    //Ejecuta esto
    console.log("Estamos en el año " + year);

    year++;

}


var year2 = 2018;
while (year2 != 1991) {
    //Ejecuta esto
    console.log("Estamos en el año " + year2);

    if (year2 == 2000) {
        break;
    }
    year2--;
}

// Do while

var years = 30;

do {
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years--;
} while (years > 25);
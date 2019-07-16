
let auxiliar = 0;

let numero1 = parseFloat(prompt('Digite N1: '));
let numero2 = parseFloat(prompt('Digite N2: '));
let numero3 = parseFloat(prompt('Digite N3: '));
let numero4 = parseFloat(prompt('Digite N4: '));
let numero5 = parseFloat(prompt('Digite N5: '));


while (numero5 < numero1 && numero5 < numero4 && numero5 < numero3 && numero5 < numero2 && numero5 < numero1) {

    if (numero1 > numero2) {
        auxiliar = numero1;
        numero1 = numero2;
        numero2 = auxiliar;
    }

    if (numero2 > numero3) {
        auxiliar = numero2;
        numero2 = numero3;
        numero3 = auxiliar;
    }

    if (numero3 > numero4) {
        auxiliar = numero3;
        numero3 = numero4;
        numero4 = auxiliar;
    }

    if (numero4 > numero5) {
        auxiliar = numero4;
        numero4 = numero5;
        numero5 = auxiliar;
    }

    if (numero1 > numero2) {
        auxiliar = numero1;
        numero1 = numero2;
        numero2 = auxiliar;
    }

}

alert('O Maior numero é: ' + numero5);

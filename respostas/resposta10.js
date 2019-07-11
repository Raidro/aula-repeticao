let numero1 = parseFloat(prompt('Digite N1: '));
let numero2 = parseFloat(prompt('Digite N2: '));
let numero = '';
let auxiliar = 0;

if (numero1 > numero2) {

    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;

}

for (let i = numero1; i <= numero2; i++) {


    numero += i + ', ';

}


alert(numero);
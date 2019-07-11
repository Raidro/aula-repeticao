let numero1 = parseFloat(prompt('Digite N1: '));
let numero2 = parseFloat(prompt('Digite N2: '));
let numero = '';

if (numero1 > numero2) {

    for (let i = numero1; i <= numero2; i++) {


        numero += i;

    }

} else {

    for (let i = numero2; i <= numero1; i++) {


        numero += i;


    }

}

alert(numero + ' ,');
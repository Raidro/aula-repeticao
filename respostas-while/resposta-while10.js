
//Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.

let numero1 = parseFloat(prompt('Digite N1: '));
let numero2 = parseFloat(prompt('Digite N2: '));
let numero = '';
let auxiliar = 0;
let soma = 0;
let i = numero1;

while (numero1 > numero2) {

    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;

}

while (i <= numero2) {

    numero += i + ', ';
    i++
}

alert(numero);
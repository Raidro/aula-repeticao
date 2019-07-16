
//Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.

let numero = '';
let numero1 = '';
let i = 1;

while (i <= 20) {
    numero += i + '\n';
    numero1 += i + ' ,'
    i++;

}

alert(numero);
alert(numero1);
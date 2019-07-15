
//Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.

var numero = '';
var numero1 = '';
for (let i = 1; i <= 20; i++) {

    numero += i + '\n';
    numero1 += i + ' ,'
    
}

alert(numero);
alert(numero1);
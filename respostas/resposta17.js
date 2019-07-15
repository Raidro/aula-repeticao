
//Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120

let numero = parseInt(prompt('Entre com o numero para fazer o fatorial: '));

let fatorial = 0;

for (fatorial = 1; numero > 1; numero--) {

    fatorial = fatorial * numero;
}

alert(fatorial);

//Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.

let numero = 0;
//let par = 0;
//let impar = 0;
let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {

    numero = parseFloat(prompt('Entre com os numeros: '));

    if (numero % 2 == 0) {

        //par += numero + ', ';
        pares++;
    } else {
        //impar += numero + ', ';
        impares++
    }


}

alert('Numeros Pares: ' + pares + '\n' + 'Numeros Impares: ' + impares)


//Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

let valor = '';
let i = 0;

while (i <= 500) {

    if (i % 2 != 0) {
        valor += i + '\n';

    }

    i++;
}
//porque ele para em 47?
alert(valor);

//Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

let valor = '';

for (let i = 1; i <= 50; i++) {


    if (i % 2 != 0) {

        valor += i + '\n';


    }

}

alert(valor);
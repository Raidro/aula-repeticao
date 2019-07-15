
//A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa que gere a série até que o valor seja maior que 500.

let atual = 0;
let n1 = 1;
let n2 = 0;

let resultado = n2 + '\n ' + n1;

for (let i = 0; i < 15; i++) {

    if (atual < 500) {
        atual = n1 + n2;
        resultado += '\n' + atual;
        n2 = n1;
        n1 = atual;
    }
}

alert(resultado);

//A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.

let atual = 0;
let n1 = 1;
let n2 = 0;

let resultado = n2 + '\n ' + n1;

for (let i = 0; i < 15; i++) {
    
    
    atual = n1 + n2;
    resultado += '\n' +  atual;
    n2 = n1;
    n1 = atual;
}

alert(resultado);

/*
Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. 
O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
...
5 X 10 = 50
*/


let numero = parseInt(prompt('Entre com a Tabuada: '));
let resultado = '';


for (var i = 1; i <= 10; i++) {
    let mult = numero * i;
    resultado += numero + ' X ' + i + ' = ' + mult + '\n';

}
alert(resultado);
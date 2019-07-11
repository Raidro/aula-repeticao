let numero = parseInt(prompt('Entre com a Tabuada: '));
let resultado = '';


for (var i = 1; i <= 10; i++) {
    let mult = numero * i;
    resultado += numero + ' X ' + i + ' = ' + mult + '\n';

}
alert(resultado);
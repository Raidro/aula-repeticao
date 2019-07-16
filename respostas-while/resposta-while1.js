
let nota = parseInt(prompt('Entre com uma nota de 0 a 10: '));

while (nota < 0 || nota > 10) {

    alert('nota invalida! por favor entre com uma nota valida!');
    nota = parseInt(prompt('Entre com uma nota de 0 a 10: '));

}
alert('Nota Validada!');

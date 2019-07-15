
//Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

for (let i = 0; i <= 100; i++) {

    let nota = parseInt(prompt('Entre com uma nota: '));

    if (nota >= 0 && nota <= 10) {

        alert('Nota Validada!');
        break;

    } else {
        alert('nota invalida! por favor entre com uma nota valida!');
    }

   

}
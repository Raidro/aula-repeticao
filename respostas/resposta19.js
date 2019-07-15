

//Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.

let auxiliar = 0;
let soma = 0;

for (let i = 0; i <= 1; i++) {

    var numero1 = parseFloat(prompt('Digite N1: '));
    var numero2 = parseFloat(prompt('Digite N2: '));
    var numero3 = parseFloat(prompt('Digite N3: '));
    var numero4 = parseFloat(prompt('Digite N4: '));
    var numero5 = parseFloat(prompt('Digite N5: '));

    if (numero1 >= 0 && numero1 <= 1000 
        || numero2 >= 0 && numero2 <= 1000 
        || numero3 >= 0 && numero3 <= 1000 
        || numero4 >= 0 && numero4 <= 1000 
        || numero5 >= 0 && numero5 <= 1000) {


        if (numero1 > numero2) {
            auxiliar = numero1;
            numero1 = numero2;
            numero2 = auxiliar;
        }

        if (numero2 > numero3) {
            auxiliar = numero2;
            numero2 = numero3;
            numero3 = auxiliar;
        }

        if (numero3 > numero4) {
            auxiliar = numero3;
            numero3 = numero4;
            numero4 = auxiliar;
        }

        if (numero4 > numero5) {
            auxiliar = numero4;
            numero4 = numero5;
            numero5 = auxiliar;
        }

        if (numero1 > numero2) {
            auxiliar = numero1;
            numero1 = numero2;
            numero2 = auxiliar;
        }

    } else {

        alert('Valores tem que está entre 0 e 1000!');
    }




    soma = numero1 + numero2 + numero3 + numero4 + numero5;

    alert('O Maior numero é: ' + numero5 + '\n' + 'O Menor numero é: ' + numero1 + '\n' + 'A Soma dos numeros são: ' + soma);


}
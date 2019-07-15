//Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16.


let numero = parseInt(prompt('Entre com o numero para fazer o fatorial: '));

let fatorial;


for (fatorial = 1; numero > 1; numero--) {

    if (numero > 0 && numero < 16) {

        fatorial = fatorial * numero;

    } else {

        alert('Fatorial tem que ser positivo e menor que 16')
    }

}


alert(fatorial);


let numero = parseInt(prompt('Entre com o numero para fazer o fatorial: '));

let fatorial = 0;

for (fatorial = 1; numero > 1; numero--) {

    fatorial = fatorial * numero;
}

alert(fatorial);
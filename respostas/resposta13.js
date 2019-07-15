
//Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem.

let base = parseFloat(prompt('Entre com a Base: '));
let expoente = parseFloat(prompt('Entre com o expoente: '));

for (let i = 0; i <= 100; i++) {

    expo = base ** expoente;

}

alert('O resultado é: ' + expo + '\n' + 'Expresão: ' + base + '^' + expoente);
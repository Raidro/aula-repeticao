
let base = parseFloat(prompt('Entre com a Base: '));
let expoente = parseFloat(prompt('Entre com o expoente: '));

for (let i = 0; i <= 100; i++) {

    expo = base ** expoente;

}

alert('O resultado é: ' + expo + '\n' + 'Expresão: ' + base + '^' + expoente);
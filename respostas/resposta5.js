

//Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.

let paisA = parseFloat(prompt('Entre com a População de A: '));
let paisB = parseFloat(prompt('Entre com a População de B: '));
let ano = 0;
let taxaA = parseFloat(prompt('Entre com a Taxa de A: '));
let taxaB = parseFloat(prompt('Entre com a População de B: '));

taxaA = taxaA / 100;
taxaB = taxaB / 100;



for (let i = 0; i <= 100; i++) {

    if (paisA <= paisB) {

        paisA += paisA * taxaA;
        paisB += paisB * taxaB;
        ano++

    }
}

alert('Levou ' + ano + ' Anos');

let paisA = 80000;
let paisB = 200000;
let ano = 0;
let taxaA = 0.03;
let taxaB = 0.015;

for (let i = 1; i <= 100; i++) {

    if (paisA <= paisB) {

        paisA += paisA * taxaA;
        paisB += paisB * taxaB;
        ano++;

    } else {
        break;
    }

}

alert('Levou ' + ano + ' Anos');




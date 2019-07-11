
let paisA = 80000;
let paisB = 200000;
let ano = 0;
let taxaA = 0.03;
let taxaB = 0.015;

for (let i = 0; i <= 100; i++) {

    if (paisA <= paisB) {

        paisA = paisA + (paisA * taxaA);
        paisB = paisB + (paisB * taxaB);
        ano += 1;

    } else {

        alert('Levou ' + ano + ' Anos');

    }

    i += i;
}


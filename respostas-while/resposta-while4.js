let paisA = 80000;
let paisB = 200000;
let ano = 0;
let taxaA = 0.03;
let taxaB = 0.015;

while (paisA <= paisB) {
    paisA += paisA * taxaA;
    paisB += paisB * taxaB;
    ano++;
}

alert('Levou ' + ano + ' Anos');

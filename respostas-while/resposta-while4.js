
/*
Supondo que a população de um país A seja da ordem de 80000 habitantes com uma 
taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. 
Faça um programa que calcule e escreva o número de anos necessários para que a 
população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
*/

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

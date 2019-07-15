let atual = 0;
let n1 = 1;
let n2 = 0;

let resultado = n2 + '\n ' + n1;

for (let i = 0; i < 15; i++) {

    if (atual < 500) {
        atual = n1 + n2;
        resultado += '\n' + atual;
        n2 = n1;
        n1 = atual;
    } 
}

alert(resultado);
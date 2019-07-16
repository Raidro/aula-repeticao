
let nome = '';

while (nome.length < 3) {

    nome = prompt('Entre com um nome: ');

}

let idade = -1;
while (idade < 0 || idade > 150) {

    idade = parseInt(prompt('Entre com sua idade: '));


}

let salario = -1;

while (salario < 0) {

    salario = parseInt(prompt('Entre com seu salario: '));
}

let sexo = '';

while (sexo != 'm' && sexo != 'f') {

    sexo = prompt('Entre com (M) - Masculino ou (F) - Feminino: ').toLowerCase();

}

let estado_civil = '';

while (estado_civil != 's' && estado_civil != 'c' && estado_civil != 'v' && estado_civil != 'd') {

    estado_civil = prompt('Entre com (S) - Solteiro(a) / (C) - Casado(a) / (V) - Viuvo(a) / (D) - Divorciado(a): ').toLowerCase();

}
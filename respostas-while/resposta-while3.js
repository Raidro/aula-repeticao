
let nome = '';

while (nome.length < 3) {

    nome = prompt('Entre com um nome: ');

}

/*
Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';
*/

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
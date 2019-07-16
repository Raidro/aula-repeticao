
//Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

let nome = '';
let senha = '';

while (nome == senha) {


    nome = prompt('Digite o Usuario: ');
    senha = prompt('Digite sua Senha: ');
    alert('Senha igual a nome do usuario! Digite uma senha valida');


}

alert('Cadastro Efetuado!');



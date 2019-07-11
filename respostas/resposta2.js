
var nome = prompt('Digite o Usuario: ');

for (let i = 0; i <= 100; i++) {

    let senha = prompt('Digite sua Senha: ');

    if (nome == senha) {
        alert('Senha igual a nome do usuario! digite uma senha valida');
    } else {
        alert('Cadastro Efetuado!');
    }

    i += i;
}
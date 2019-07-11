

for (let i = 0; i <= 100; i++) {
    let nome = prompt('Digite o Usuario: ');
    let senha = prompt('Digite sua Senha: ');

    if (nome == senha) {
        alert('Senha igual a nome do usuario! Digite uma senha valida');
    } else {
        alert('Cadastro Efetuado!');
        break;
    }
}
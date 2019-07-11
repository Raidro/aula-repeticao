
for (let i = 0; i <= 100; i++) {

    let nome = prompt('Entre com seu nome: ');
    if (nome.length > 3) {
        for (let i = 0; i <= 100; i++) {
            let idade = parseInt(prompt('Entre com sua idade: '));
            if (idade > 0 && idade < 150) {
                for (let i = 0; i <= 100; i++) {
                    let Salario = parseInt(prompt('Entre com seu salario: '));
                    if (Salario > 0) {
                        for (let i = 0; i <= 100; i++) {
                            let Sexo = prompt('Sexo: \n(F) - Feminino \n(M) - Masculino').toUpperCase();
                            if (Sexo == 'F' || Sexo == 'M') {
                                for (let i = 0; i <= 100; i++) {
                                    let estado_civil = prompt('Estado civil? \n(S) - solteiro \n (C) - casado \n(V) - Viuva(o) \n(D) - divociado(a) ').toUpperCase();
                                    if (estado_civil == 'S' || estado_civil == 'C' || estado_civil == 'V' || estado_civil == 'D') {
                                        alert('Dados Validados com Sucesso!');
                                        break
                                    } else {
                                        alert('Estado Civil Invalidos!');
                                    }
                                    i += i;
                                }

                            } else {
                                alert('Sexo Invalido!')
                            }
                            i += i;
                        }

                    } else {
                        alert('Salario Invalido!')
                    }
                    i += i;
                }

            } else {
                alert('Idade Invalida!')
            }

            i += i;
        }

    } else {
        alert('Nome Invalido! nome tem que ter mais de 3 letras')
    }

    i += i;
}

import validator from 'validator';

const valor = document.querySelector('#inserir-texto');
const opcao = document.querySelector('#option');
const botao = document.querySelector('#botao');
const resposta = document.querySelector('#resposta')

botao.addEventListener('click', (event) => {
    event.preventDefault();

    const camposValidados = {
        cpf: validator.isTaxID(valor.value, 'pt-BR'),
        email: validator.isEmail(valor.value),
    };

    resposta.innerHTML = `A validação retornou ${camposValidados[opcao.value]} `
})
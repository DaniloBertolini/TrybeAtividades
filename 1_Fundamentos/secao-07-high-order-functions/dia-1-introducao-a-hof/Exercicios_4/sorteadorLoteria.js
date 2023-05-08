const numeroCheck = (numeroGerado, meuNumero) => {
    console.log(`Número Gerado: ${numeroGerado}, seu número: ${meuNumero}`);
    return (numeroGerado === meuNumero) ?
        'Parabéns, você ganhou' :
        'Tente novamente';
};

const geradorDeNumero = () => {
    const numeroGerado = Math.floor((Math.random() * 5) + 1);
    return numeroGerado;
}


console.log(numeroCheck(geradorDeNumero(), 5));
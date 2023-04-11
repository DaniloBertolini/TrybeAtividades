const substituaX = (nome) => {
    const frase = `Tryber x aqui!`;
    const fraseCortada = frase.split(" ");
    let fraseInteira = '';
    for(let key in fraseCortada) {
        (fraseCortada[key] === 'x') ? fraseCortada[key] = nome : '' ;
        fraseInteira += `${fraseCortada[key]} `;
    }
    return fraseInteira;
};

console.log(substituaX('Danilo'));

const minhasSkills = (string) => {
    const skills = ['HTML', 'CSS', 'JavaScript']
    let mensagem = `${string}Minhas três principais habilidades são: ${skills}`;
    return mensagem;
};

console.log(minhasSkills(substituaX('Danilo')));
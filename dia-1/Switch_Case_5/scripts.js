// #1
let status = "aprovada";

// #2
switch (status) {

    case 'aprovada':
        console.log('Parabéns, você está no grupo de pessoas aprovadas!');
        break;

    case 'lista':
        console.log('Você está na nossa lista de espera.');
        break;

    case 'reprovada':
        console.log('Infelizmente, você reprovou.');
        break;

    default:
        console.log('Informação incorreta.');
}
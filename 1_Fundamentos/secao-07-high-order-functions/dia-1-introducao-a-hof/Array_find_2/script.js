const numbers = [19, 21, 30, 3, 45, 22, 15];

const divPor3e5 = numbers.find((numero) => {
    return numero % 3 === 0 && numero % 5 === 0;
});

console.log(divPor3e5);

//

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const nome5Letras = names.find((nome) => {
    return nome.length === 5;
});

console.log(nome5Letras);

// '31031685'

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const musicaPorId = musicas.find((musica) => {
    return musica.id === '31031685';
});

console.log(musicaPorId);
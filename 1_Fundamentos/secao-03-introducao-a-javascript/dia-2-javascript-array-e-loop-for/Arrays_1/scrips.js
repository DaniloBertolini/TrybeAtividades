/*

.length - Mostra o tamanho
.unshift - coloca no começo
.push - coloca no final
.shift - tira o primeiro
.pop - tira o ultimo
.sort - ordem alfabetica
.indexOf

*/

// #1
let menu = ['Home', 'Serviços', 'Portifólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

// #2
let indexOfPortfolio = menu.indexOf('Portifólio');
console.log(indexOfPortfolio);

// #3
let final = menu.push('Contato')
console.log(menu);
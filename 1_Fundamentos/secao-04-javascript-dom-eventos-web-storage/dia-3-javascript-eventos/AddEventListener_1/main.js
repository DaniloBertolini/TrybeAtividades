const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.
const techElem = document.querySelector('.tech');
const addClass = (event) => {
    techElem.classList.remove('tech');
    event.target.classList('tech');
    input.value = '';
}

firstLi.addEventListener('click', addClass)
secondLi.addEventListener('click', addClass)
thirdLi.addEventListener('click', addClass)

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.

input.addEventListener('input', (event) => {
    techElem.innerText = event.target.value;
});


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.

myWebpage.addEventListener('dblclick', (event) => {
    window.location.replace('https://www.youtube.com/')
}
)

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.

// Segue abaixo um exemplo de uso do event.target.

myWebpage.addEventListener('mouseover',(event) => {
    event.style.color = setBg();
});

/* myWebpage.addEventListener('mouseout', (event) => {
    event.target.style.color = 'unset';
}); */

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    myWebpage.style.color = "#" + randomColor;
  }

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.
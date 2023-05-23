const localImg = document.querySelector('#imagem');
const localNome = document.querySelector('#nome');
const localBtn = document.querySelector('#botao');

const tokenDeAcesso = '3044918742480723';
const url = `https://superheroapi.com/api/${tokenDeAcesso}`;
const limiteMaximo = 732;

const randomId = () => Math.round(Math.random() * limiteMaximo);

localBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();

  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      localNome.innerHTML = data.name;
      localImg.src = data.image.url
    })

});
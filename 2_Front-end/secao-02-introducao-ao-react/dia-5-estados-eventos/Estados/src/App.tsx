import { useState } from 'react';

function App() {
  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  const [index, setIndex] = useState(0);

function handleNextClick() {
  if (index + 1 < toolKit.length) {
    setIndex(index + 1);
  } else {
    setIndex(0); // Volta para o primeiro elemento
  }
}

function handlePreviousClick() {
  if (index - 1 >= 0) {
    setIndex(index - 1);
  } else {
    setIndex(toolKit.length - 1); // Vai para o último elemento
  }
}

return (
  <>
    <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
    <h2>{toolKit[index]}</h2>
      <button onClick={handlePreviousClick}>Anterior</button>
      <button onClick={handleNextClick}>Próximo</button>
    </>
  );
}

export default App;

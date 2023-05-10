// Faça uma lista com as suas frutas favoritas
const specialFruit = ['melancia', 'caqui', 'maça'];

// // Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['banana', 'abacate', 'laranja'];

const fruitSalad = (fruit, additional) => {
  const frutas = [...specialFruit, ...additionalItens];
  return frutas;
};

console.log(fruitSalad(specialFruit, additionalItens));
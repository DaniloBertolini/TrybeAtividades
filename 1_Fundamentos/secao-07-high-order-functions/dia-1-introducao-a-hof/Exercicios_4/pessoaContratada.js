const geradorEmail = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_')
    return {nomeCompleto, email: `${email}@gmail.com`};
};

const newEmployees = () => {
    const employees = {
      id1: geradorEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: geradorEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: geradorEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees());
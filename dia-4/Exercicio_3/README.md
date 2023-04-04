# Exercicios

```
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```

1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso, utilize a sintaxe ```meuObjeto.chave```.
2. Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe ```meuObjeto['chave'] = valor.```
3. Faça um for/in que mostre todas as chaves do objeto.
4. Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto.
5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.

## Leitura de objetos

Com base neste objeto, faça os exercícios a seguir.

```
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
```

1. Acesse as chaves ```nome```, ```sobrenome``` e ```titulo``` – esta encontra-se dentro da chave ```livrosFavoritos``` – e faça um ```console.log``` no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

2. Adicione um novo livro favorito na chave ```livrosFavoritos```, que é um ```array```. Atribua a essa chave um objeto que contenha as seguintes informações:

```
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
```
3. Acesse as chaves ```nome``` e ```livrosFavoritos``` e faça um ```console.log``` no seguinte formato: “Julia tem {quantidade} livros favoritos”, em que “{quantidade}” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.

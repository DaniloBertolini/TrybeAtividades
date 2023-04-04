# Exercícios

## Lidando com arrays

```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

1. Percorra o array imprimindo todos os valores contidos nele com a função console.log().
2. Some todos os valores contidos no array e imprima o resultado.
3. Calcule e imprima a média aritmética dos valores contidos no array.
* A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
4. Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.
5. Utilizando for, descubra o maior valor contido no array e imprima-o.
6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
7. Utilizando for, descubra o menor valor contido no array e imprima-o.
8. Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
9. Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

## Lógica de programação e algoritmos

O fatorial é representado pelo sinal !
```
4! = 4 x 3 x 2 x 1 = 24
```
1. Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

2. Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.
```
let word = 'tryber';
```
3. Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
```
let array = ['java', 'javascript', 'python', 'html', 'css'];
```

## Bubblesort

```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
```

1. Ordene o array numbers em ordem crescente e imprima seus valores.
2. Ordene o array numbers em ordem decrescente e imprima seus valores.
3. Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

##

1. Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

```
n = 5

*****
*****
*****
*****
*****
```

2. Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

```
n = 5

*
**
***
****
*****
```

3. Agora, inverta o lado do triângulo. Por exemplo:

```
n = 5

    *
   **
  ***
 ****
*****
```

4. Depois, faça uma pirâmide com n asteriscos de base. Por exemplo:

```
n = 5

  *
 ***
*****
```

5. Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Para isso, assuma que o valor de n será sempre ímpar. Por exemplo:

```
n = 7

   *   
  * *  
 *   * 
*******
```

6. Faça um algoritmo que indique se um número definido em uma variável é primo ou não.

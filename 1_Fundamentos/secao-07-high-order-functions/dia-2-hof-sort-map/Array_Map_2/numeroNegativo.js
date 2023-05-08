// Sem map 

const numbers1 = [1, 2, 3, 4, -5];

const negativeNumbers1 = [];
for (let index = 0; index < numbers1.length; index += 1) {
  if (numbers1[index] > 0) {
    negativeNumbers1.push(numbers1[index] * -1);
  } else {
    negativeNumbers1.push(numbers1[index]);
  }
}

console.log(negativeNumbers1); // [ -1, -2, -3, -4, -5 ]
console.log(numbers1); // [ 1, 2, 3, 4, -5 ]

// Com map

const numbers2 = [1, 2, 3, 4, -5];

const negativeNumbers2 = numbers2.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers2); // [ -1, -2, -3, -4, -5 ]
console.log(numbers2); // [ 1, 2, 3, 4, -5 ]

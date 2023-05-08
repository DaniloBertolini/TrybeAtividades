const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// númerico

const inventory1 = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory1.sort();
console.log(inventory1); // [1, 10, 2, 3, 4, 5,  6, 7, 8, 9]

const inventory2 = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory2.sort((a, b) => a - b);
console.log(inventory2); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
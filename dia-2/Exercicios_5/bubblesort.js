let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let a = 0
for (let re = numbers.length; re > 0; re -= 1) {
    a = 0
    for (let b=1; b < re; b += 1) {
        for (a; a < b; a += 1) {
            if (numbers[a] > numbers[b]) {
                let position = numbers[a];
                numbers[a] = numbers[b];
                numbers[b] = position;
            }
        console.log('----------------------------')
        console.log("Tabela: " + numbers)
        }
    }
}

for (let i=0; i < numbers.length; i += 1) {
    console.log("Tabela: " + numbers[i])
}

console.log("final "+numbers)
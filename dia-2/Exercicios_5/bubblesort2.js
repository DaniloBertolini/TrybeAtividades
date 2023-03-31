let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let c = 0
for (let re = numbers1.length; re > 0; re -= 1) {
    c = 0
    for (let d=1; d < re; d += 1) {
        for (c; c < d; c += 1) {
            if (numbers1[c] < numbers1[d]) {
                let position = numbers1[d];
                numbers1[d] = numbers1[c];
                numbers1[c] = position;
            }
        console.log('----------------------------')
        console.log("Tabela: " + numbers1)
        }
    }
}

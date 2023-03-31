let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novaarray = [];
let mult;
/* let a = 0 */

for (let a=0; a < numbers.length-1; a += 1) {
    mult = numbers[a] * numbers[a+1]
    novaarray.push(mult)
}
novaarray.push(numbers[numbers.length-1]*2)


console.log(novaarray)


/* for (let b=1; b < numbers.length; b += 1) {
    for (a; a < b; a += 1) {
        mult = numbers[a] * numbers[b]
        novaarray.push(mult)
    }
    if (b === numbers.length-1) {
        nv2 = numbers[b] * 2
        novaarray.push(nv2)
    }
}

console.log(novaarray) */
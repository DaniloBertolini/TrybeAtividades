const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
    console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

const [ num1, num2, num3 ] = primeNumbers;
sum(num1, num3) // 54

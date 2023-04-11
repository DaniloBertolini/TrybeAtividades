salarioBruto = 3000;
inss = 0;
irrf = 0;
trybe = 0;


//INSS

if (salarioBruto < 1556.94) {
    inss = salarioBruto * 0.08
//    8%
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
inss = salarioBruto * 0.09
//    9%
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11
//    11%
}
else if (salarioBruto > 5189.82) {
    inss = 570.88
//    570,88
}


//IRRF

if (salarioBruto < 1903.98) {
    irrf = 0
}
else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
    irrf = (salarioBruto * 0.075) - 142.80
//    7,5% - 142,80
}
else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    irrf = (salarioBruto * 0.15) - 354.80
//    15% - 354,80
}
else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    irrf = (salarioBruto * 0.225) - 636.13
//    22,5% - 636,13
}
else if (salarioBruto > 4664.68) {
    irrf = (salarioBruto * 0.275) - 869.36
//    27,5% - 869,36
}


// Trybe

if (salarioBruto >= 3000) {
    trybe = salarioBruto * 0.2
}



//RESULTADO

resultado = salarioBruto - (inss + irrf)
console.log("Seu salário Bruto é de " + Math.ceil(salarioBruto))
console.log("Seu desconto do INSS é de " + Math.ceil(inss))
console.log("Seu desconto do IRRF é de " + Math.ceil(irrf))
console.log("Seu desconto da Trybe é de " + Math.ceil(trybe))
console.log("Seu salário líquido é de " + Math.ceil(resultado))
console.log("Seu salário líquido com desconto da Trybe é de "+ (Math.ceil(resultado-trybe)))
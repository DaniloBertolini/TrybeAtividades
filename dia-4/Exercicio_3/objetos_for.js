// #1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};
 
    
console.log('Bem-vinda, ' + info.personagem)

console.log()
// #2

info['recorrente'] = 'Sim'
console.log(info)


console.log()
// #3

for (let key in info) {
    console.log(key)
}


console.log()
// #4

for (let key in info) {
    console.log(info[key])
}


console.log()
// #5

for (let key in info) {
    if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
        console.log('Ambos concorrentes')
    } else {
        console.log(info[key]+ ' e ' + info2[key])
    }
}
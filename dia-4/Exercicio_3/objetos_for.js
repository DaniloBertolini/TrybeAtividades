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


// #2
info['recorrente'] = 'Sim'
console.log(info)


// #3
for (let key in info) {
    console.log(key)
}

// #4
for (let key in info) {
    console.log(info[key])
}

// #5
for (let key in info) {
    if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
        console.log('Ambos concorrentes')
    } else {
        console.log(info[key]+ ' e ' + info2[key])
    }
}
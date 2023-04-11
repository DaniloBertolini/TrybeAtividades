num = 5
let estrelaesq = "";

for (let i = 0; i < num; i += 1) {
    estrelaesq += "*"
    console.log(estrelaesq)
}

//


estreladir = "";
limite = num-1

for(let a=0; a < num; a += 1) {
    for(let b=0; b < num; b += 1) {
        if(b < limite) {
            estreladir += " "
        }
        else {
            estreladir += "*"
        }
    }
    console.log(estreladir)
    estreladir = "";
    limite -= 1
}
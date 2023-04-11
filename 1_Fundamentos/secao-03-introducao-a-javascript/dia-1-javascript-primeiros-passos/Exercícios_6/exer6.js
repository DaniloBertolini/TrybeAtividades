movimento = "peao";

switch (movimento) {

    case "peao":
        console.log("Peça: Peão");
        console.log("Movimento: Vertical");
        console.log("Primeiro movimento: 1-2 casas");
        console.log("Próximos movimentos: 1 casa");
        break;

    case "torre":
        console.log("Peça: Torre");
        console.log("Movimento: Vertical e Horizontal");
        console.log("Quantidade: 1-8 casas");
        break;

    case "cavalo":
        console.log("Peça: Cavalo");
        console.log("Movimento: Formato L");
        console.log("L: 2 em uma direção e 1 para um lado");
        break;

    case "bispo":
        console.log("Peça: Bispo");
        console.log("Movimento: Diagonal");
        console.log("Quantidade: 1-8 casas");
        break;

    case "rainha":
        console.log("Peça: Rainha");
        console.log("!!Peça mais forte!!");
        console.log("Movimento: Vertical, Horizontal e Diagonal");
        console.log("Quantidade: 1-8 casas");
        break;

    case "rei":
        console.log("Peça: Rei");
        console.log("!!Peça principal: Se morrer, perde o jogo!!")
        console.log("Movimento: Vertical, Horizontal e Diagonal");
        console.log("Quantidade: 1 casa");
}
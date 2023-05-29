const user = {
    nome: "Danilo",
    sobrenome: "Bertolini",
}

function Header() {
    return <h1>{`Olá, ${user.nome} ${user.sobrenome}`}</h1>;
}

export default Header;
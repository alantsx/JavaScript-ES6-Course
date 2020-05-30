const usuario = {
    nome: 'Alan',
    idade: 28,
    endereco: {
        cidade: 'Curitiba',
        estado: 'PR',
    },
};

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome, idade, cidade);

function mostraNome({ nome, idade, endereco: { cidade } }) {
    console.log(nome, idade, cidade);
}

mostraNome(usuario);
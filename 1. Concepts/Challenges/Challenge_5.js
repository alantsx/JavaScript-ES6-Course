// REST

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

function soma (...params) {
    let soma = 0;

    for (let param of params) {
        soma += param;   
    }

    return soma;
}

console.log(soma(1,2,7));


// SPREAD

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: 'Gabriel'};

const usuario3 = { ...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};

console.log(usuario3);
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    ];

// RETURNING AGE THROUGH MAP

const mapArr = usuarios.map(item => item.idade);

console.log(mapArr);

// RETURNING USERS THROUGH FILTER

const filterArr = usuarios.filter(item => item.empresa == 'Rocketseat' && item.idade >= 18);

console.log(filterArr);

// RETURNING USER THROUGH FIND

const findArr = usuarios.find(item => item.empresa == 'Google');

console.log(findArr);

// MIXING OPERATIONS MAP AND FILTER

const multipleArr = usuarios.map (item => {
        item.idade = item.idade * 2;
        return item;
});

const multipleArr2 = multipleArr.filter (item => item.idade <= 50);

console.log(multipleArr2);


const arr = [1, 2, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function (total, next) {
    return total + next;
});

console.log('total', sum);

const filter = arr.filter(function (item) {
    return item % 2 === 0;
});

console.log ('filter', filter);

const find = arr.find(function (item) {
    return item === 4;
});

console.log('find', find);

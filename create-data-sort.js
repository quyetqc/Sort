const n = 10000
const m = 1000
const arrayDad = [];
let arrayChill = [];
for (let i = 0; i < n; i++) {
    arrayChill = [];
    for (let j = 0; j < m; j++) {
        arrayChill.push(Math.floor(Math.random() * 1000))
    }
    arrayDad.push(arrayChill)
}

fs = require('fs');
fs.writeFile('data.txt', JSON.stringify(arrayDad), function (err) {
    if (err) return console.log(err);
});
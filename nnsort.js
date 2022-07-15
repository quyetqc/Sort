const fs = require('fs');

try {
    const startTime = Date.now();
    const inputdata = fs.readFileSync('data.txt', 'utf8');
    const input = JSON.parse(inputdata)

    const n = input.length;
    const m = input[0].length;

    const inputAfterSortChill = []
    for (let i = 0; i < n; i++) {
        const chill = input[i]
        // sort chill with m*m
        for (let k = 0; k < m; k++)
            for (let l = k + 1; l < m; l++)
                if (chill[k] > chill[l]) {
                    const middle = chill[k]
                    chill[k] = chill[l]
                    chill[l] = middle;
                }
        inputAfterSortChill.push(chill)
    }

    const inputAfterSortDad = [...inputAfterSortChill] // thay dia chi o nho

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = 0; k < m; k++) {
                if (inputAfterSortDad[i][k] > inputAfterSortDad[j][k]) {
                    const middle = inputAfterSortDad[i];
                    inputAfterSortDad[i] = inputAfterSortDad[j];
                    inputAfterSortDad[j] = middle;
                    break;
                }
                if (inputAfterSortDad[i][k] < inputAfterSortDad[j][k]) break
            }
        }
    }

    fs.writeFile('dataResultnn.txt', JSON.stringify(inputAfterSortDad), function (err) {
        if (err) return console.log(err);
    });
    console.log(Date.now() - startTime)
} catch (err) {
    console.error(err);
}


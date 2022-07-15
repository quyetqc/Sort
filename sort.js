const fs = require('fs');

try {
    const startTime = Date.now();
    const inputdata = fs.readFileSync('data.txt', 'utf8');
    const input = JSON.parse(inputdata)
    for (let i = 0; i < input.length; i++) {
        input[i].sort((a, b) => { return a - b })
    }

    input.sort((a, b) => {
        for (let i = 0; i < input.length; i++) {
            if (a[i] != b[i]) return a[i] - b[i];
        }
        return 0;
    })

    fs.writeFile('dataResult.txt', JSON.stringify(input), function (err) {
        if (err) return console.log(err);
    });
    console.log(Date.now() - startTime)
} catch (err) {
    console.error(err);
}


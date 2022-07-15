const fs1 = require('fs');
const outputFromNNsort = fs1.readFileSync('dataResultnn.txt', 'utf8');

const fs2 = require('fs');
const outputFromFasterSort = fs2.readFileSync('dataResult.txt', 'utf8');

if (outputFromFasterSort == outputFromNNsort) console.log("dung")
else console.log("sai")

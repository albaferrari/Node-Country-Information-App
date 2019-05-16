//part 2
const fs = require('fs');

let readFile = function (filename, JSONreader) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log("Error: " + err);
          throw err;
        };
        let text = JSON.parse(data);
        return JSONreader(text);
});
}

module.exports = readFile;
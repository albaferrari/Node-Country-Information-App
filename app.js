const fs = require('fs');
const readFile = require('./modules/json-filereader');
const countryName = process.argv[2];

//part1
/*
fs.readFile('./country/countries.json', 'utf8', (err, data) => {
    if (err) {
        console.log("Error: " + err);
      throw err;
    }

    let text = JSON.parse(data);

    text.find(function (country) {
        if (country.name == countryName){
            console.log('Country: ' + country.name);
            console.log('Top Level Domain: ' + country.topLevelDomain);
        }
    });
  });
  */

readFile('./country/countries.json', function(data){
    data.find(function (country) {
        if (country.name == countryName){
            console.log('Country: ' + country.name);
            console.log('Top Level Domain: ' + country.topLevelDomain);
        }
    });
  });

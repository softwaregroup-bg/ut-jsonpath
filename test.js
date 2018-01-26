var jp = require('./index');
var country = {
    name: 'Bulgaria',
    population: 7101859,
    cities: [
        {
            name: 'Sofia',
            'population': 1547472
        },
        {
            name: 'Plovdiv',
            'population': 544628
        }
    ]
};
// use a template to extract and/or rename certain fields.
var template = {
    countryName: '$.name',
    population: '$.population',
    cities: ['$.cities', {
        cityName: '$.name'
    }]
};

var extracted = jp.extract(country, template);

debugger;
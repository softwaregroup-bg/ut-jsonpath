# ut-jsonpath
This module provides all the functionality that [jsonpath](https://github.com/dchester/jsonpath) provides.

## Additional Methods

#### jp.extract(obj, template)

Extract and/or rename certain fields from an `obj` based on a `template`.

```javascript

var jp = require('ut-jsonpath');

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

var template = {
    countryName: '$.name',
    population: '$.population',
    cities: ['$.cities', {
        cityName: '$.name'
    }]
};

var extracted = jp.extract(country, template);

/*
    {
        countryName: 'Bulgaria',
        population: 7101859,
        cities: [
            {
                cityName: 'Sofia'
            },
            {
                cityName: 'Plovdiv'
            }
        ]
    }
*/
```

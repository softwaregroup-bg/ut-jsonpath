# ut-jsonpath
This module provides all the functionality that [jsonpath](https://github.com/dchester/jsonpath) provides.

## Additional Methods

#### jp.transform(obj, template)

Template based json-to-json transformation.

```javascript

const jp = require('ut-jsonpath');

const data = {
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

const template = {
    countryName: '$.name',
    population: '$.population',
    cities: ['$.cities', {
        cityName: '$.name'
    }]
};

const transformed = jp.transform(data, template);

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

Values are also composable. I.e. Multiple selectors can be specified. e.g: '$.name $.population'
The necessary interpolations will be applied as long as the selectors are jsonpath compliant.
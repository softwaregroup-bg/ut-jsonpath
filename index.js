const JSONPath = require('jsonpath').JSONPath;

class UtJSONPath extends JSONPath {
    extract(source, template, obj = {}, key) {
        if (Array.isArray(template)) {
            const path = template[0];
            const subpath = template[1];
            const arr = this.query(source, path)[0];
            if (arr.length && subpath) {
                obj = obj[key] = [];
                arr.forEach((record, i) => {
                    this.extract(record, subpath, obj, i);
                });
            } else {
                obj[key] = arr;
            }
        } else if (typeof template === 'object') {
            if (typeof key !== 'undefined') {
                obj = obj[key] = {};
            }
            for (let prop in template) {
                this.extract(source, template[prop], obj, prop);
            }
        } else if (typeof template === 'string') {
            if (template[0] === '$') {
                const val = this.query(source, template);
                obj[key] = val[0];
            } else {
                obj[key] = template;
            }
        }
        return obj;
    }
}

const instance = new UtJSONPath();

module.exports = instance;

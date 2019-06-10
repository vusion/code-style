const format = require('./ts-format');
const func = require('./ts-func');
const maintain = require('./ts-maintain');
const spec = require('./ts-spec');
const style = require('./ts-style');


module.exports = {
    rules: {
        ...format.rules,
        ...func.rules,
        ...maintain.rules,
        ...spec.rules,
        ...style.rules,
    }
}
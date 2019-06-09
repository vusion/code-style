import format from'./ts-format';
import func from'./ts-func';
import maintain from'./ts-maintain';
import spec from'./ts-spec';
import style from'./ts-style';


module.exports = {
    rules: {
        ...format.rules,
        ...func.rules,
        ...maintain.rules,
        ...spec.rules,
        ...style.rules,
    }
}
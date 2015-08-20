import assert from 'assert';
import is from 'is';

// Standard gcd function implementing Euclidean algorithm.
// TODO: flow annotation
export function euclidean (a, b, key) {
    assert((is.number(a) && is.number(b)) ||
           (is.object(a) && is.object(b) && !is.undefined(key)),
           `Only Number or Object type with key is supported,
            but a:${a} and b:${b} and key:${key} is supplied.`);

    var _a, _b, remainder;

    // TODO: Isolate key applying algorithm.
    if (is.function(key)) {
        _a = key(a);
        _b = key(b);
    } else if (is.string(key)) {
        _a = a[key];
        _b = b[key];
    } else {
        _a = a;
        _b = b;
    }

    while (_b !== 0) {
        remainder = _a % _b;
        _a = _b;
        _b = remainder;
    }

    return Math.abs(_a);
}

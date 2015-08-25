import is from 'is';
import assert from 'assert';

class Heap extends Object {
    constructor (list) {
        this.__validate(list);
        this.__heap = Heap.heapify(list);
    }

    __validate (heapable) {
        assert(is.array(list), 'First argument should be a list');
    }

    push (value) {
        Heap.heappush.apply(this)
    }

    static heappush () {

    }

    static heappop () {

    }

    static heappushpop () {

    }

    static heapify () {

    }

    static merge () {

    }

    static nlargest () {

    }

    static nsmallest () {

    }
}

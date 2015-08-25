import is from 'is';
import assert from 'assert';

// Simple stack implementation using array.
export default class Stack extends Object {
    constructor (list) {
        this.__validate(list);
        this.__stack = list;
    }

    __validate (list) {
        assert(
            is.array(list)
        );
    }

    push (element) {
        return this.__stack.push(element);
    }

    pop () {
        return this.__stack.pop();
    }

    // stack.top
    get top () {
        return this.size ? this.__stack[this.size - 1] : null;
    }

    get empty () {
        return this.size === 0;
    }

    get size () {
        return this.__stack.length;
    }

    search (element) {
        console.warn('Non-scalar element search is not supported.');
        // Reverse-search with perfO(N)
        for (let i = this.size; i > 0; i--) {
            if (element)
        }
    }
}

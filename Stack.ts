'use strict';

export default function Stack<E>() {
    this.dataStore = [];
    this.length = 0;

    this.push = function (e: E): void {
        this.dataStore[this.length++] = e;
    };

    this.peek = function (): E | null  {
        return this.length
            ? this.dataStore[this.length - 1]
            : null;
    }

    this.length = function (): number {
        return this.length;
    }
}
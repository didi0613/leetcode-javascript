/**
 * @constructor
 */
var Stack = function () {
    this.queue = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function (x) {
    this.queue.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function () {
    this.queue.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function () {
    return this.queue[this.queue.length - 1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function () {
    return this.queue.length === 0;
};
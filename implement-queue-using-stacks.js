/**
 * @constructor
 */
var Queue = function () {
    this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function (x) {
    this.stack.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function () {
    this.stack.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function () {
    return this.stack[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function () {
    return this.stack.length === 0;
};

/*
 * shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
 */
// 开一个容量为capacity的容器，
// 如果最近访问过(get和set都算访问)，就把这个元素放到第一个，
// 超出capacity就删掉最后一个元素

/**
 * @constructor
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.queue = [];
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function (key) {
    if (key in this.queue) {
        for (var i = 0; i < this.queue.lenght; i++) {
            if (this.queue[i].value === key) {
                var target = this.queue.splice(i, 1);
                this.queue.unshift(target);
                return target.value;
            } else {
                return -1;
            }
        }
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function (key, value) {
    if (key in this.queue) {
        for (var j = 0; j < this.queue.length; j++) {
            if (this.queue[j].value === value) {
                var target = this.queue.splice(j, 1);
                this.queue.unshift(target);
            }
        }
    } else {
        this.queue.unshift({key: key, value: value});
    }

    if (this.queue.length > this.capacity) {
        this.queue.pop();
    }
};
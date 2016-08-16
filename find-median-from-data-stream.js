/**
 * @constructor
 */
var MedianFinder = function () {
    this.arr = [];
};

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function (num) {
    var index = binarySearch(this.arr, num);
    this.arr.splice(index, 0, num);
};

function binarySearch(arr, num) {
    if (arr.length === 0) {
        return 0;
    }

    var start = 0, end = arr.length - 1;
    while (start <= end) {
        var mid = parseInt((start + end) / 2);
        if (arr[mid] <= num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return start;
}

/**
 * @return {double}
 * Return median of current data stream
 */
MedianFinder.prototype.findMedian = function () {
    if (this.arr.length % 2 === 0) {
        return (this.arr[this.arr.length / 2] + this.arr[this.arr.length / 2 - 1]) / 2;
    } else {
        return this.arr[parseInt(this.arr.length / 2)];
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var mf = new MedianFinder();
 * mf.addNum(1);
 * mf.findMedian();
 */
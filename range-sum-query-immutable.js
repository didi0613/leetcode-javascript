/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.total = [];
    var len = nums.length;
    var sum = 0;
    for (var i = 0; i < len; i++) {
        sum += nums[i];
        this.total[i] = sum;
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    if (i === 0) {
        return this.total[j];
    } else {
        return this.total[j] - this.total[i - 1];
    }
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
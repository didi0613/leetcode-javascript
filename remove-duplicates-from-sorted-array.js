/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1
var removeDuplicates = function (nums) {
    var len = nums.length;

    if (len <= 1) {
        return len;
    } else {
        var target = nums[0];
        var newIndex = 1;
        var dup = 0;
        for (var i = 1; i < len; i++) {
            if (nums[i] !== target) {
                nums[newIndex] = nums[i];
                newIndex++;
                target = nums[i];
            } else {
                dup++;
            }
        }
    }

    return len - dup;
};

// Solution 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var len = nums.length;
    if (len <= 1) {
        return len;
    }

    // Guarantee there is at least one element
    var index = 1;
    var last = nums[0];
    for (var i = 1; i < len; i++) {
        if (nums[i] === last) {
            continue;
        } else {
            nums[index] = nums[i];
            last = nums[i];
            index++;
        }
    }

    return index;
};
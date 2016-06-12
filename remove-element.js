// Solution 1
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var removeNum = 0;
    var len = nums.length;

    if (len === 0) {
        return 0;
    }

    for (var i = 0; i < len; i++) {
        if (nums[i] === val) {
            removeNum++;
            var mark = i;
            while (mark < len) {
                nums[mark] = nums[mark + 1];
                mark++;
            }
            i--;
        }
    }

    var removeNumDup = removeNum;
    for (var j = len - 1; removeNumDup > 0 && j >= 0; j--) {
        nums[j] = null;
        removeNumDup--;
    }

    return len - removeNum;

};

// Solution 2
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var len = nums.length;
    if (len === 0) {
        return len;
    }

    var index = 0;
    for (var i = 0; i < len; i++) {
        if (nums[i] === val) {
            continue;
        } else {
            nums[index] = nums[i];
            index++;
        }
    }

    return index;
};
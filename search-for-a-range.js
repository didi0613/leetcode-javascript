/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    var ret = [-1, -1];
    searchRangeBuilder(nums, 0, nums.length - 1, target, ret);
    return ret;
};

function searchRangeBuilder(nums, start, end, target, ret) {
    if (start > end) {
        return;
    }
    if (nums[start] === target && nums[end] === target) {
        ret[0] = start;
        ret[1] = end;
        return;
    }

    var mid = parseInt((start + end) / 2);
    if (nums[mid] < target) {
        searchRangeBuilder(nums, mid + 1, end, target, ret);
    } else if (nums[mid] > target) {
        searchRangeBuilder(nums, start, mid - 1, target, ret);
    } else {
        ret[0] = mid;
        ret[1] = mid;

        // left
        var tmpl = mid;
        while (nums[tmpl] === nums[tmpl - 1] && tmpl > start) {
            tmpl--;
            ret[0] = tmpl;
        }

        var tmpr = mid;
        while (nums[tmpr] === nums[tmpr + 1] && tmpr < end) {
            tmpr++;
            ret[1] = tmpr;
        }
        return;
    }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 时间O(2^n) 空间O(2^n)
 * 子集数为2^n
 */
var subsetsWithDup = function (nums) {
    var len = nums.length;

    if (len === 0) {
        return [];
    }

    var ret = [];
    var visited = new Array(len);
    subsetsBuilder(nums.sort(), [], ret, 0, visited);
    return ret;
};

function subsetsBuilder(nums, item, ret, index, visited) {
    ret.push(item.slice());

    for (var i = index; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) {
            continue;
        }

        if (!visited[i]) {
            visited[i] = true;
            item.push(nums[i]);
            subsetsBuilder(nums, item, ret, i, visited);
            visited[i] = false;
            item.pop();
        }
    }
}
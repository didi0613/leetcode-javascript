/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var ret = [];

    if (nums.length === 0) {
        return ret;
    }

    var visited = new Array(nums.length).fill(false);
    permuteBuilder(nums, ret, [], visited);
    return ret;
};

function permuteBuilder(nums, ret, item, visited) {
    if (nums.length === item.length) {
        ret.push(item.slice());
    }

    for (var i = 0; i < nums.length; i++) {
        if (!visited[nums[i]]) {
            item.push(nums[i]);
            visited[nums[i]] = true;
            permuteBuilder(nums, ret, item, visited);
            item.pop();
            visited[nums[i]] = false;
        }
    }
}
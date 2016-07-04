/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    var ret = [];
    var visited = new Array(nums.length);
    nums.sort();
    permuteUniqueBuilder(nums, ret, visited, []);
    return ret;
};

function permuteUniqueBuilder(nums, ret, visited, item) {
    if (item.length === nums.length) {
        ret.push(item.slice());
    }

    for (var i = 0; i < nums.length; i++) {
        if (i > 0 && !visited[i - 1] && nums[i] === nums[i - 1]) {
            continue;
        }
        if (!visited[i]) {
            item.push(nums[i]);
            visited[i] = true;
            permuteUniqueBuilder(nums, ret, visited, item);
            item.pop();
            visited[i] = false;
        }
    }
}
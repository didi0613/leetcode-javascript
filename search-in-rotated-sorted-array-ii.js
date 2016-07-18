/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    var left = 0, right = nums.length - 1;
    while (left <= right) {
        var mid = parseInt((left + right) / 2);
        if (nums[mid] === target) {
            return true;
        }

        if (nums[mid] > nums[left]) {
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (nums[mid] < nums[left]) {
            if (nums[mid] <= target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            // 遇到中间和边缘相等的情况，我们就丢失了哪边有序的信息，因为哪边都有可能是有序的结果
            // 解决的办法只能是对边缘移动一步，直到边缘和中间不在相等或者相遇
            left++;
        }
    }

    return false;
};
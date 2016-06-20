// Solution 1
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

    // Pay attention to k, k might be larger than the lengths
    k = k % nums.length;

    // get the last k digits of nums
    var tmp = nums.splice(-k, k);
    for (var i = k - 1; i >= 0; i--) {
        nums.unshift(tmp[i]);
    }
};

// Time Complexity: O(k * n)
// Space Complexity: O(1)

/*
 * push(elem0, elem1, elem2, …) 向数组的末尾添加元素，并返回新的长度
 * 
 * pop() 删除数组中最后的一个元素，同时返回该元素
 * 
 * shift() 把数组的第一个元素从其中删除，并返回第一个元素的值
 * 
 * unshift(elem0, elem1, elem2, …) 向数组的开头添加一个或更多元素，并返回新的长度
 * 
 * splice(start, len, elem0, elem1, elem2, …) 从数组的start位置删除len个元素，
 * 同时在该位置填充elem0, elem1等元素。如果elem为空，则直接进行删除，同时返回被删除的元素(array)
 * 
 * slice(start, len) 从数组的start位置删除len个元素，同时返回被删除的元素，而原数组不变
 * 
 * concat(array) 在数组的后面接上一个数组array，同时返回拼接完成的数组，而原数组不变
 * 
 *
 从上面的各个方法中，我们能够看到，只能使用前面5个方法，最后2个方法不能修改原数组。
 因此现在的思路为：使用splice()得到最后的k个元素，然后使用unshift()把得到的数据一个个填充到数组的前面
 * */

// Solution 2
// Reverse the array from 0 ~ k
// Reverse the array from k ~ len
// Reverse the array from 0 ~ len
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    var len = nums.length;
    k = k % len;

    reverse(nums, 0, len - k - 1);
    reverse(nums, len - k, len - 1);
    reverse(nums, 0, len - 1);
};

function reverse(num, start, end) {
    if (num.length <= 1) {
        return;
    }

    while (start < end) {
        var temp = num[start];
        num[start] = num[end];
        num[end] = temp;
        start++;
        end--;
    }
}

// Time Complexity: O(n)
// Space Complexity: O(1)
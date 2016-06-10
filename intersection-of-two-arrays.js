/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//Solution 1
var intersection = function (nums1, nums2) {
    var ret = [];

    var len1 = nums1.length, len2 = nums2.length;

    if (len1 < len2) {
        return intersection(nums2, nums1);
    }

    for (var i = 0; i < len2; i++) {
        if (nums1.includes(nums2[i]) && !ret.includes(nums2[i])) {
            ret.push(nums2[i]);
        }
    }

    return ret;
};

// Solution 2
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    var len1 = nums1.length;
    var len2 = nums2.length;

    if (len1 < len2) {
        return intersection(nums2, nums1);
    }

    //nums1 is larger than nums2
    var ret = [];
    for (var i = 0; i < len2; i++) {
        if (nums1.includes(nums2[i]) && !ret.includes(nums2[i])) {
            ret.push(nums2[i]);
        }
    }

    return ret;
};
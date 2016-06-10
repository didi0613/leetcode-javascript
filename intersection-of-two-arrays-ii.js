/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Solution 1
var intersect = function (nums1, nums2) {
    var len1 = nums1.length;
    var len2 = nums2.length;
    var hashmap = [];
    var ret = [];

    if (len1 < len2) {
        intersect(nums2, nums1);
    }

    // Save the less length array into hashmap
    // Record its show up times
    for (var i = 0; i < len2; i++) {
        if (nums2[i] in hashmap) {
            hashmap[nums2[i]]++;
        } else {
            hashmap[nums2[i]] = 1;
        }
    }


    // Loop the longer array to check matches in hashmap
    for (var j = 0; j < len1; j++) {
        if (hashmap[nums1[j]] > 0) {
            ret.push(nums1[j]);
            hashmap[nums1[j]]--;
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
var intersect = function (nums1, nums2) {
    var len1 = nums1.length;
    var len2 = nums2.length;
    var ret = [];

    if (len1 < len2) {
        return intersect(nums2, nums1);
    }

    for (var i in nums2) {
        if (nums1.includes(nums2[i])) {
            ret.push(nums2[i]);
            var index = nums1.indexOf(nums2[i]);
            nums1[index] = 'x';
        }
    }

    return ret;
};
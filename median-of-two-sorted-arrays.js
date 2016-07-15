/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var len1 = nums1.length, len2 = nums2.length;
    if ((len1 + len2) % 2 === 0) {
        return (findKthArray(nums1, 0, nums2, 0, Math.floor((len1 + len2) / 2) - 1) + findKthArray(nums1, 0, nums2, 0, Math.floor((len1 + len2) / 2))) / 2;
    } else {
        return findKthArray(nums1, 0, nums2, 0, Math.floor((len1 + len2) / 2));
    }
};

function findKthArray(A, a, B, b, k) {
    while (k >= 0 && a < A.length && b < B.length) {
        if (A[a] < B[b]) {
            k--;
            if (k < 0) {
                return A[a];
            }
            a++;
        } else {
            k--;
            if (k < 0) {
                return B[b];
            }
            b++;
        }
    }

    while (k >= 0 && a < A.length) {
        k--;
        if (k < 0) {
            return A[a];
        }
        a++;
    }

    while (k >= 0 && b < B.length) {
        k--;
        if (k < 0) {
            return B[b];
        }
        b++;
    }

    return 0;
}
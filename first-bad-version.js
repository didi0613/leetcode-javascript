/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        if (n === 1) {
            return isBadVersion(1) ? 1 : 0;
        }

        return solutionHelper(isBadVersion, 1, n);
    };
};

function solutionHelper(isBadVersion, start, end) {
    var mid = Math.ceil((start + end) / 2);
    if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
        return mid;
    } else if (isBadVersion(mid)) {
        return solutionHelper(isBadVersion, start, mid - 1);
    } else {
        return solutionHelper(isBadVersion, mid + 1, end);
    }

}
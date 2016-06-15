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
        return findBadVersion(1, n);

        function findBadVersion(start, end) {
            var mid = parseInt((start + end) / 2);
            if (isBadVersion(mid)) {
                if (!isBadVersion(mid - 1)) {
                    return mid;
                } else {
                    return findBadVersion(start, mid - 1);
                }
            } else {
                return findBadVersion(mid + 1, end);
            }
        }
    };
};
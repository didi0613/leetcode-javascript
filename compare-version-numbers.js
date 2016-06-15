/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    var arr1 = version1.split('.');
    var arr2 = version2.split('.');
    var len1 = arr1.length;
    var len2 = arr2.length;

    for (var i = 0; i < len1 && i < len2; i++) {
        if (parseInt(arr1[i]) > parseInt(arr2[i])) {
            return 1;
        } else if (parseInt(arr1[i]) < parseInt(arr2[i])) {
            return -1;
        }
    }

    if (len1 > len2) {
        for (var j = i; j < len1; j++) {
            if (parseInt(arr1[j]) > 0) {
                return 1;
            }
        }
    }

    if (len1 < len2) {
        for (j = i; j < len2; j++) {
            if (parseInt(arr2[j]) > 0) {
                return -1;
            }
        }
    }

    return 0;
};
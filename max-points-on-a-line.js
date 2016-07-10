/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function (points) {
    var len = points.length;
    var ret = 1;
    var ratio = Number.MAX_VALUE;

    if (len === 0) {
        return 0;
    }

    for (var i = 0; i < len; i++) {
        var same = 0;
        var hashmap = {};

        for (var j = i + 1; j < len; j++) {
            if (points[j].y === points[i].y && points[j].x === points[i].x) {
                same++;
                continue;
            } else if (points[j].x === points[i].x) {
                continue;
            } else if (points[j].y === points[i].y) {
                ratio = 0;
            } else {
                ratio = (points[i].y - points[j].y) / (points[i].x - points[j].x);
            }

            if (hashmap[ratio]) {
                hashmap[ratio]++;
            } else {
                hashmap[ratio] = 2;
            }
        }

        var localMax = Number.MIN_VALUE;
        for (var k in hashmap) {
            localMax = Math.max(localMax, hashmap[k]);
        }
        localMax += same;
        ret = Math.max(ret, localMax);
    }

    return ret;
};
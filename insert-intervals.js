/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function (intervals, newInterval) {
    intervals.push(newInterval);

    intervals.sort(function (a, b) {
        if (a.start === b.start) {
            return a.end - b.end;
        } else {
            return a.start - b.start;
        }
    });

    var pre = intervals[0];
    for (var i = 1; i < intervals.length; i++) {
        var cur = intervals[i];
        if (pre.end >= cur.start) {
            pre.end = Math.max(pre.end, cur.end);
            intervals.splice(i, 1);
            i--;
        } else {
            pre = cur;
        }
    }

    return intervals;
};
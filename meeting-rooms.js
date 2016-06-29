function canAttendMeetings(intervals) {
    if (intervals.length === 0) {
        return true;
    }

    intervals.sort(function (a, b) {
        return a.start - b.start;
    });

    var end = intervals[0].start;

    for (var i = 1; i < intervals.length; i++) {
        if (intervals[i].start < end) {
            return false;
        }
        end = Math.max(end, intervals[i].end);
    }

    return true;
}
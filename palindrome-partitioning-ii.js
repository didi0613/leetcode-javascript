/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
    var c = s.split('');
    var n = c.length;
    var cut = new Array(n);
    var pal = new Array(n);
    for (var i = 0; i < n; i++) {
        pal[i] = new Array(n);
        pal[i].fill(0);
    }

    for (var i = 0; i < n; i++) {
        var min = i;
        for (var j = 0; j <= i; j++) {
            if (c[j] == c[i] && (j + 1 > i - 1 || pal[j + 1][i - 1])) {
                pal[j][i] = true;
                min = j == 0 ? 0 : Math.min(min, cut[j - 1] + 1);
            }
        }
        cut[i] = min;
    }
    return cut[n - 1];
};
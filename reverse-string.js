/**
 * @param {string} s
 * @return {string}
 */
function swap(start, end, s) {
    var temp;
    var res = s.split("");
    temp = res[end];
    res[end] = res[start];
    res[start] = temp;
    return res.join('');
}

var reverseString = function(s) {
    var len = s.length;
    if(len < 2) {
        return s;
    } else {
        for(var i=0;i<len/2;i++) {
            s = swap(i, len-i-1,s);
        }
        return s;
    }
};
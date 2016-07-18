/**
 * @param {string} s
 * @return {string[]}
 * 我们只要控制这三个分割点就行了，
 * 注意约束条件有两个，
 * 一个是一段字符串不超过3个字母，
 * 另一个是控制好每段字符串最远结束的位置，比如第一个字符串最多延伸到倒数第4个字母。
 */
var restoreIpAddresses = function (s) {
    var ret = [];
    for (var i = 1; i < 4 && i < s.length - 2; i++) {
        for (var j = i + 1; j < i + 4 && j < s.length - 1; j++) {
            for (var k = j + 1; k < j + 4 && k < s.length; k++) {
                var s1 = s.substring(0, i);
                var s2 = s.substring(i, j);
                var s3 = s.substring(j, k);
                var s4 = s.substring(k, s.length);
                if (isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)) {
                    ret.push(s1 + "." + s2 + "." + s3 + "." + s4);
                }
            }
        }
    }
    return ret;
};

function isValid(s) {
    return s.length <= 3 && ((s[0] !== '0' && parseInt(s) <= 255) || (parseInt(s) === 0 && s.length === 1) );
}
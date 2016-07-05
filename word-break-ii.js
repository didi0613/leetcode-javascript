/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    var ret = [];
    var possible = new Array(s.length + 1);
    possible.fill(true);
    wordBreakBuilder(s, wordDict, ret, "", 0, possible);
    return ret;
};

// s: given string
// wordDict: given word dictionary 
// ret: return solutions
// cur: current solution
// start: start checking point
// Possible: s.substring(i)这个字符串能否分解
function wordBreakBuilder(s, wordDict, ret, cur, start, possible) {
    if (s.length === start) {
        ret.push(cur);
    }


    for (var i = start + 1; i <= s.length; i++) {
        var str = s.substring(start, i);
        if (wordDict.has(str) && possible[i]) {
            var prevSize = ret.length;
            wordBreakBuilder(s, wordDict, ret, cur + (cur.length === 0 ? "" : " ") + str, i, possible);

            // DFS后面部分结果没有变化，说明后面是没有解的  
            if (ret.length === prevSize) {
                possible[i] = false;
            }
        }
    }
}
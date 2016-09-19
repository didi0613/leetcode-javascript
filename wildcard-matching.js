// Dynamic Programming Solution
// If current characters match, result is same as
// result for lengths minus one. Characters match
// in two cases:
// a) If pattern character is '?' then it matches
//    with any character of text.
// b) If current characters in both match
if ( pattern[j – 1] == ‘?’) ||
     (pattern[j – 1] == text[i - 1])
    T[i][j] = T[i-1][j-1]

// If we encounter ‘*’, two choices are possible-
// a) We ignore ‘*’ character and move to next
//    character in the pattern, i.e., ‘*’
//    indicates an empty sequence.
// b) '*' character matches with ith character in
//     input
else if (pattern[j – 1] == ‘*’)
    T[i][j] = T[i][j-1] || T[i-1][j]

else // if (pattern[j – 1] != text[i - 1])
    T[i][j]  = false

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    var idxs = 0, idxp = 0, idxstar = -1, idxmatch = 0;
    while (idxs < s.length) {
        // 当两个指针指向完全相同的字符时，或者p中遇到的是?时
        if (idxp < p.length && (s[idxs] === p[idxp] || p[idxp] === '?')) {
            idxp++;
            idxs++;
        } else if (idxp < p.length && p[idxp] === '*') {
            // 如果字符不同也没有?，但在p中遇到是*时，我们记录下*的位置，但不改变s的指针
            idxstar = idxp;
            idxp++;
            //遇到*后，我们用idxmatch来记录*匹配到的s字符串的位置，和不用*匹配到的s字符串位置相区分
            idxmatch = idxs;
        } else if (idxstar !== -1) {
            // 如果字符不同也没有?，p指向的也不是*，但之前已经遇到*的话，我们可以从idxmatch继续匹配任意字符
            // 用上一个*来匹配，那我们p的指针也应该退回至上一个*的后面
            idxp = idxstar + 1;
            // 用*匹配到的位置递增
            idxmatch++;
            // s的指针退回至用*匹配到位置
            idxs = idxmatch;
        } else {
            return false;
        }
    }

    // 因为1个*能匹配无限序列，如果p末尾有多个*，我们都要跳过
    while (idxp < p.length && p[idxp] == '*') {
        idxp++;
    }

    // 如果p匹配完了，说明匹配成功
    return idxp == p.length;
};
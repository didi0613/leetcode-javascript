/**
 * @param {string} s
 * @return {number}
 * https://segmentfault.com/a/1190000002630583
 */
var longestValidParentheses = function (s) {
    var stack = [];
    var ret = 0;
    // 起始索引
    var left = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else if (s[i] === ")") {
            if (stack.length !== 0) {
                stack.pop();
                if (stack.length === 0) {
                    // 说明当前已经匹配到了起始索引出，从起始索引开始计算长度
                    ret = Math.max(ret, i - left + 1);
                } else {
                    // 说明当前还在连续匹配串内，从当前栈顶元素索引开始计算长度即可
                    // stack[stack.length-1] 是即将要匹配的“(”的index
                    ret = Math.max(ret, i - stack[stack.length - 1]);
                }
            } else {
                //当前匹配失效,且不是起始索引,移动起始索引
                // 只有在匹配失效之后，才重新选取起始位置
                left = i + 1;
            }
        }
    }

    return ret;
};
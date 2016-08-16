/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    if (s.length <= 1) {
        return s;
    }

    var hashmap = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        hashmap[s[i]]++;
    }

    var visited = new Array(26).fill(false);
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        hashmap[s[i]]--;
        if (visited[s[i]]) {
            continue;
        }

        while (stack.length > 0 && stack[stack.length - 1] > s[i] && hashmap[stack[stack.length - 1]] > 0) {
            visited[stack[stack.length - 1]] = false;
            stack.pop();
        }
        stack.push(s[i]);
        visited[s[i]] = true;
    }

    return stack.join('');
};
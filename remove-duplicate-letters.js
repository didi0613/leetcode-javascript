/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    if (s.length <= 1) {
        return s;
    }

    var hashmap = new Array(26);
    for (var i = 0; i < s.length; i++) {
        if (hashmap[s[i]]) {
            hashmap[s[i]]++;
        } else {
            hashmap[s[i]] = 1;
        }
    }

    var visited = new Array(26).fill(false);
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        hashmap[s[i]]--;
        if (visited[s[i]]) {
            continue;
        }

        while (stack.length > 0 && stack[0] > s[i] && hashmap[s[i]] > 0) {
            visited[stack[0]] = false;
            stack.pop();
        }
        stack.push(s[i]);
        visited[s[i]] = true;
    }

    return stack.join('');
};
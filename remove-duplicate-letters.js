/**
 * @param {string} s
 * @return {string}
 * Return is the smallest lexi order
 */
var removeDuplicateLetters = function (s) {
    if (s.length <= 1) {
        return s;
    }

    // Add all the characters' frequency in hashmap
    var hashmap = {};
    for (var i = 0; i < s.length; i++) {
        if (hashmap[s[i]]) {
            hashmap[s[i]]++;
        } else {
            hashmap[s[i]] = 1;
        }
    }

    // maintain a stack to get the smallest on top
    var stack = [];
    var visited = {};
    for (var i = 0; i < s.length; i++) {
        hashmap[s[i]]--;
        if (visited[s[i]]) {
            continue;
        }

        while (s[i] < stack[stack.length - 1] && hashmap[stack[stack.length - 1]] > 0) {
            visited[stack[stack.length - 1]] = false;
            stack.pop();
        }
        stack.push(s[i]);
        visited[s[i]] = true;
    }

    return stack.join('');
};
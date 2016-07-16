/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    var hashmap = {
        2: ["a", "b", "c"], 3: ["d", "e", "f"], 4: ["g", "h", "i"], 5: ["k", "j", "l"], 6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"], 8: ["t", "u", "v"], 9: ["w", "x", "y", "z"]
    };
    var ret = [];
    for (var i = 0; i < digits; i++) {
        if (digits[i] in hashmap) {
            if (ret.length === 0) {
                ret = hashmap[digits[i]];
                continue;
            }

            // insert into each of the characters in ret
            var nextLevel = [];
            while (ret.length > 0) {
                var item = ret.pop();
                // loop each character in digits
                for (var k = 0; k < hashmap[digits[i]].length; k++) {
                    var tmp = item + hashmap[digits[i]][k];
                    nextLevel.push(tmp);
                }
            }
            ret = nextLevel;
        }
    }

    return ret;
};
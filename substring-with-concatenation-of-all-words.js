/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * https://segmentfault.com/a/1190000002625580
 */
var findSubstring = function (s, words) {
    var ret = [];
    if (s.length === 0 || words.length === 0) {
        return ret;
    }

    var strlen = s.length;
    var wordlen = words[0].length;
    var hashmap = {};
    // mapping word => show up times
    for (var i = 0; i < words.length; i++) {
        if (words[i] in hashmap) {
            hashmap[words[i]]++;
        } else {
            hashmap[words[i]] = 1;
        }
    }

    for (i = 0; i < wordlen; i++) {
        var curmap = {};
        var count = 0, left = i;

        // search the word starting from position i, and end with s.length-wordlen
        for (var j = i; j <= s.length - wordlen; j += wordlen) {
            var curStr = s.substring(j, j + wordlen);
            if (curStr in hashmap) {
                if (curStr in curmap) {
                    curmap[curStr]++;
                } else {
                    curmap[curStr] = 1;
                }

                if (curmap[curStr] <= hashmap[curStr]) {
                    count++;
                } else {
                    // there are more word string needed
                    while (true) {
                        var tmp = s.substring(left, left + wordlen);
                        curmap[tmp]--;
                        left += wordlen;
                        if (tmp === curStr) {
                            break;
                        } else {
                            count--;
                        }
                    }
                }

                if (count === words.length) {
                    ret.push(left);
                    // remove the first left and keep searching
                    tmp = s.substring(left, left + wordlen);
                    curmap[tmp]--;
                    left += wordlen;
                    count--;
                }
            } else {
                // if the current word is not in the hashmap
                curmap = {};
                count = 0;
                left = j + wordlen;
            }
        }
    }

    return ret;
};
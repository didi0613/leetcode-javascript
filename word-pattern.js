/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var str_array = str.split(' ');
    var pattern_array = pattern.split('');
    var map = [];
    var map2 = [];

    if(str_array.length !== pattern_array.length) {
        return false;
    }

    for(var i=0;i<pattern_array.length;i++) {
        if(pattern_array[i] in map) {
            if(str_array[i] !== map[pattern_array[i]]) {
                return false;
            }
        } else {
            map[pattern_array[i]] = str_array[i];
        }
    }

    for(var ii=0;ii<str_array.length;ii++) {
        if(str_array[ii] in map2) {
            if(pattern_array[ii] !== map2[str_array[ii]]) {
                return false;
            }
        } else {
            map2[str_array[ii]] = pattern_array[ii];
        }
    }

    return true;
};
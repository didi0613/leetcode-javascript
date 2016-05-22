/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/\W/g,'').toLowerCase();

    var arr = s.split('');
    var len = arr.length;

    if(len < 2) {
        return true;
    }
    var start=0,end=len-1;
    while(start<end) {
        if(arr[start] !== arr[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};

/*
* Summarize
* \W
* 匹配一个非单字字符 <=> [^A-Za-z0-9_]
*/
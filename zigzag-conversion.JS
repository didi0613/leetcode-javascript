/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) {
        return s;
    }

    var ret = "";
    var diff = numRows*2-2;
    for(var i=0;i<numRows;i++) {
        for(var j=i;j<s.length;j+=diff) {
            ret += s[j];

            if(i!==0 && i!== numRows-1) {
                var temp = j+diff-2*i;
                if(temp<s.length) {
                    ret+=s[temp];
                }
            }
        }
    }

    return ret;
};
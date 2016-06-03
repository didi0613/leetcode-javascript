/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if(s.length < 2) {
        return s;
    } else {
        return s.split('').reverse().join('');
    }
};

/**
 * Summarize:
 * - split(''): Transform String into Array, split by parameters
 * - join(''): Concatenate each item in array into String, join by parameters
 */


 /*
 var reverseString = function(s) {
     var len = s.length;
     if(len <= 1) {
         return s;
     }

     var start = 0, end = len-1;
     var s_arr = s.split('');
     while(start < end) {
         var temp = s_arr[end];
         s_arr[end] = s_arr[start];
         s_arr[start] = temp;
         start++;
         end--;
     }

     return s_arr.join('');
 };
 */
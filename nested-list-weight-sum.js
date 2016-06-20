function depthSum(){
    var arr = [[1,1],2,[1,1]];
    return helper(arr,1);
}

function helper(arr, level) {
    var ret = 0;
    for(var i=0;i<arr.length;i++) {
        if(Number.isInteger(arr[i])) {
            ret += arr[i]*level;
        } else {
            return helper(arr[i], level+1);
        }
    }

    return ret;
}

console.log(depthSum());
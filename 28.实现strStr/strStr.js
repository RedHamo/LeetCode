/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle=="") return 0;
    for(let i=0; i<haystack.length; i++){
        if(haystack[i]!=needle[0]) continue;
        let flag = true;
        for(let j=1; j<needle.length; j++){
            if(haystack[i+j]==needle[j]) continue;
            flag = false;
            break;
        }
        if (flag) return i;
    }
    return -1;
};

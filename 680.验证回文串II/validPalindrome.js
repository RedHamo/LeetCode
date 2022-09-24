/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    return helper(0, s.length-1, 2)

    function helper(l, r, k){
        while(r>l){
            if(s[l]==s[r]){
                l++;r--;
            }else{
               if(k>0) {
                   return helper(l+1,r,k-1) || helper(l,r-1,k-1)
               }else{
                   return false
               }
            }
        }
        return true
    }
};

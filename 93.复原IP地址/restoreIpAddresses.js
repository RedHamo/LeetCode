/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let len = s.length
    if(len < 4 || len > 12) return []
    let res = []
    helper("", 0, 1)
    return res;
    function helper(str, idx, round){
        let currentlen = (5-round)*3
        if(round > len-idx && len-idx > currentlen) return;
        
        if(round!=4){
            let numstr = s[idx]
            if(numstr=="0")  return helper(str+numstr+".", idx+1, round+1)
            helper(str+numstr+".", idx+1, round+1)
            numstr+=s[idx+1]
            helper(str+numstr+".", idx+2, round+1)
            numstr+=s[idx+2]
            if(+numstr <= 255) helper(str+numstr+".", idx+3, round+1)
        }else{
            let numstr = ""
            for(let i=idx; i<s.length; i++){
                if(i==idx && s[idx]==0) {
                    if(len!=idx+1) return;
                }
                numstr+=s[i]
            }
            if(numstr=="") return
            if(+numstr <= 255) res.push(str+numstr)
        }
        
    }
};

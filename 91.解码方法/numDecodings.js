/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === '0') return 0
    let dp = [ 1 ]
    for (let i = 0; i <s.length; i++) {
        if(s[i]=='0'){
            if(s[i-1]!='1'&&s[i-1]!='2') return 0;
            dp[i+1] = dp[i-1]
        }else if(s[i-1]=='1'||(s[i-1]=="2"&&s[i]<'7')){
            dp[i+1] = dp[i-1] + dp[i]
        }else{
            dp[i+1] = dp[i]
        }
    }
    return dp[s.length]
};

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    if(s.length<3) return [];
    let res = []
    let memo = [];
    for(let i=0; i<s.length-2; i++){
        if(s[i]==s[i+1]&&s[i]==s[i+2]) {
            if(memo[1]==i+1) memo[1]=i+2;
            else memo = [i,i+2]
        }else{
            if(memo.length!=0) res.push(memo)
            memo=[]
        }
    }
    if(memo.length!=0) res.push(memo)
    return res;
};

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(trust.length==0) return n==1?1:-1
    let du = {}
    for(let i=0; i<trust.length; i++){
        let el = trust[i];
        (du[el[0]])
        ? du[el[0]].ru++
        :du[el[0]]={
            ru:1,
            chu:0
        };
        (du[el[1]])
        ? du[el[1]].chu++
        :du[el[1]]={
            ru:0,
            chu:1
        };
    }
    for(let i in du){
        if(du[i].ru==0&& du[i].chu==n-1) return i
    }
    return -1;
    
};

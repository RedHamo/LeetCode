/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let res = Array(s.length)
    let targetList = []
    for(let i in s){
        if(s[i]==c) targetList.push(i)
    }

    for(let i=0; i<s.length; i++){
        let min = 1/0.0;
        targetList.forEach(o=> {
            min=Math.min(Math.abs(o-i),min)
        })
        res[i] = min;
    }
    return res;
};

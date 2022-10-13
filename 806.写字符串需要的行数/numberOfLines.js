/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let aCode = "a".charCodeAt()
    let res = [1,0]
    for(let el of s){
        let val = widths[el.charCodeAt()-aCode]
        if(res[1]+val > 100){
            res[1]=val;
            res[0]++;
        }else{
            res[1]+=val;
        }
    }
    return res;
};

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let result = []
    let l=0, r=s.length;

    for(let el of s){
        if(el=="I"){
            result.push(l)
            l++
        }else{
            result.push(r)
            r--
        }
    }
    result.push(l)
    return result;
};

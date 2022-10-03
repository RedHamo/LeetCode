/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res = []
    for(let i=left; i<=right; i++){
        let el = i.toString();
        let temp = true;
        for(let j=0; j<el.length; j++){
            if(el%el[j]!=0){
                temp = false;
                break;
            }
        }
        if(temp) res.push(i)
    }
    return res;
};

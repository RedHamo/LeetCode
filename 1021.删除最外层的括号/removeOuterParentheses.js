/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = []
    let ret = ""
    for(let el of s){
        if(el=="("&&stack.length==0) {
            stack.push('(')
            continue
        }
        if(el==")"&&stack.length==1){
            stack.pop()
            continue
        }
        if(el=="(") stack.push('(')
        if(el==")") stack.pop()
        ret += el
    }
    return ret;
}; 

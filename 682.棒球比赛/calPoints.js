/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let res = 0;
    let memo = []
    for(let el of operations){
        let temp = 0;
        switch(el){
            case "C":
                temp -= memo.pop()
                break;
            case "D":
                temp =  memo[memo.length-1]*2;
                memo.push(temp)
                break;
            case "+":
                temp = memo[memo.length-1] + memo[memo.length-2]
                memo.push(temp)
                break;
            default:
                temp =  +el;
                memo.push(temp)
        }
        res += temp;
    }
    return res;
};

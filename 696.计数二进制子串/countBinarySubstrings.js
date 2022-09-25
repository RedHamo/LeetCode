/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let res = 0
    //匹配字符串，拿出连续0和1字段，返回数组
    let m = s.match(/([1]+)|([0]+)/g)
    for (let i = 0; i < m.length - 1; i++) {
        res += Math.min(m[i].length,m[i + 1].length)
    }
    return res

    // let res = 0;
    // let stack = []
    // let brk = false;
    // for(let i=0; i<s.length; i++){
    //     let  first = s[i]
    //     stack = [first];
    //     brk = false;
    //     for(let j=i+1; j<s.length; j++){
    //                 console.log(stack)
    //         if(first == s[j]) {
    //             if(brk) break;
    //             stack.push(first);
    //         } else {
    //             brk = true;
    //             stack.pop()
    //             if(stack.length == 0) {
    //                 console.log(i,j)
    //                 res++;
    //                 break;
    //             }
    //         }
    //     }
    // }
    // return res;
    
};

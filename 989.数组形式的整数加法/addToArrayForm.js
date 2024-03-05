/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let res = []
    add(num, k, 0)
    return res;
    function add(p1, p2, over){
        if(p1.length==0 && p2==0)  return (over==1)? res.unshift(1) : ''
        let val = over;
        if(p1.length>0) val+=p1.pop();
        if(p2>0) val+=p2%10;
        over = (val<10) ? 0 : 1
        res.unshift(val%10)
        add(p1, ~~(p2/10), over)
    }
};

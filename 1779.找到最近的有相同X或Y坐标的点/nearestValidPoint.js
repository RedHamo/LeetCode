/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let min = {
        idx:-1,
        val:Infinity
    };
    points.map((o,i)=>{ return {idx:i, val:(o[0]==x||o[1]==y)?o:null} })
    .filter(o=>o.val != null)
    .forEach(o=>{
        let mhd = Math.abs(x-o.val[0]) + Math.abs(y-o.val[1]);
        if(mhd<min.val) min = { idx:o.idx, val:mhd}
    })
    return min.idx
};

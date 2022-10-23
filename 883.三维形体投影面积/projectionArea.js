/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let xy = 0,xz=0,yz=0;
    let temp = []
    for(let i=0; i<grid.length; i++){
        let el = grid[i];
        xz+=Math.max(...el)
        for(let j=0; j<el.length; j++){
            if(el[j]!=0) xy++;
            temp[j] = temp[j]||0;
            temp[j] = Math.max(temp[j], el[j])
        }
    }
    for(let el of temp){
        yz += el;
    }
    console.log(xy)
    console.log(xz)
    console.log(yz)
    return xy+xz+yz
};

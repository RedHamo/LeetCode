/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let sum = 0;
    for(let i in grid){
        for(let j in grid[i]){
            let el = grid[i][j];
            sum+=el*6;
            let temp = 0;
            if(el>1) temp+=el-1;
            if(i>=1) temp+=Math.min(el,grid[i-1][j]);
            if(j>=1) temp+=Math.min(el,grid[i][j-1]);
            sum-=temp*2;
        }
    }
    return sum;
};

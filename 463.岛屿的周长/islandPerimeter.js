/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    let res = 0;
    for(let i=0; i<grid.length; i++){
        let el = grid[i];
        for(let j=0; j<el.length; j++){
            res += getLen(i,j,grid.length,el.length,grid)
        }
    }
    return res;
};
function getLen(i,j,glen,elen,grid){
    if(grid[i][j]!=1) return 0;
    let k = 4;
    if(i-1>=0 && grid[i-1][j] == 1) k--;
    if(i+1<glen && grid[i+1][j] == 1) k--;
    if(j-1>=0 && grid[i][j-1] == 1) k--;
    if(j+1<elen && grid[i][j+1] == 1) k--;
    return k;
}
// @lc code=end



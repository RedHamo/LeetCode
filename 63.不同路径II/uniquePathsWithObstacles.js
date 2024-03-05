/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    if(obstacleGrid[0][0]==1 ||obstacleGrid[m-1][n-1]==1) return 0;
    let dp = Array.from({ length: m }, ()=>Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(obstacleGrid[i][j]==1) {
                dp[i][j]==0
                continue
            }
            if (i === 0 && j===0){
                dp[i][j] = 1
            } else if (i === 0){
                if(dp[i][j-1]!=0) dp[i][j] = 1
            } else if ( j === 0) {
                if(dp[i-1][j]!=0) dp[i][j] = 1
            }else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }
    console.log(dp)
    return dp[m - 1][n - 1]
};

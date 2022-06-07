/*
 * @lc app=leetcode.cn id=1037 lang=javascript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
// 三点不共线
// 面积公式S=1/2[(x1y2-x2y1)+(x2y3-x3y2)+(x3y1-x1y3)],
var isBoomerang = function(points) {
    let [x1,y1] = [...points[0]]
    let [x2,y2] = [...points[1]]
    let [x3,y3] = [...points[2]]
    return ((x1*y2-x2*y1)+(x2*y3-x3*y2)+(x3*y1-x1*y3))!=0;
};
// @lc code=end


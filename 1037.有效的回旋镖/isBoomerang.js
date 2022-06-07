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
// 斜率解法，斜率相同即是共线
// k=(y1-y2)/(x1-x2)
// k=(y1-y2)/(x1-x2)=(y1-y3)/(x1-x3)
// 因为可能存在除0的情况，此处利用乘法来做计算
// (y1-y2)(x1-x3) = (y1-y3)(x1-x2)
var isBoomerang = function(points) {
    let [[x1,y1],[x2,y2],[x3,y3]] = points;
    return (y1-y2)*(x1-x3) != (y1-y3)*(x1-x2);
};
// @lc code=end


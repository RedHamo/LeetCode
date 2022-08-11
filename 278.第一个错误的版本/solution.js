/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        let mid = ~~(n/2)
        let isBad = false;
        while(true){
            mid = ~~((right-left)/2)+left;
            if(right-left<=1) break;
            isBad = isBadVersion(mid)
            if(isBad) {
                right=mid
            }else{
                left=mid
            }
        }
        if(isBadVersion(left)) return left;
        return right;
    };
};
// @lc code=end



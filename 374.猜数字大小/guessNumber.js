/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start = 0;
    while(true){
        let temp = Math.ceil((start+n)/2)
        let ret = guess(temp)
        if(ret == 0) return temp;
        if(ret == 1) start = temp;
        if(ret == -1) n = temp;
    }
};
// @lc code=end



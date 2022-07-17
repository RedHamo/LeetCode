/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function (n) {
    let result = []
    for (let index = 1; index <= n; index++) {
        result.push(
            index % 5 == 0 ? 
                index % 3 == 0?"FizzBuzz": "Buzz":
            index % 3 == 0 ? "Fizz" :
            index + ""
        )
    }
    return result;
};
// @lc code=end


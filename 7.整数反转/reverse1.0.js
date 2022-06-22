/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    if(x==0) return 0;
    if(x>0){
        return rev(x)
    }else{
        return -rev(-x)
    }
};
function rev (num){
    let ret = 0
    while(num>=10){
        let temp = num%10;
        num = ~~(num/10)
        ret = ret*10 + temp;
    }
    ret = ret*10 + num;
    if (ret < Math.pow(-2, 31) || ret > Math.pow(2, 31) - 1) return 0;
    return ret;
}
// @lc code=end


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // 如果n变为1，则说明递归可以结束了，最后一个x进行返回
    if(n==1) return x;
    // 如果n是负数，幂计算应该计算的是分母
    if(n<0) return 1/myPow(x,-n)
    //如果n不是偶数，res = x的n-1次方 * x
    if(n%2) return x * myPow(x,n-1)
    //如果n是偶数，res = x*x的n/2次方
    return myPow(x*x, n/2)
};

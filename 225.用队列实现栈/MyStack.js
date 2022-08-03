/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
var MyStack = function() {
    this.stack = []
    this.help = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let len = this.stack.length;
    while(len-1>0){
        this.stack.push(this.stack.shift())
        len--;
    }
    return this.stack.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.stack[0]===undefined;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end



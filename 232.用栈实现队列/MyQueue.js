/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function() {
    this.stack = []
    this.helper = []
};


/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.stack.length==0) return undefined;
    this.helper = []
    while(this.stack.length>1){
        this.helper.push(this.stack.pop())
    }
    let ret = this.stack.pop();
    while(this.helper.length>0){
        this.stack.push(this.helper.pop())
    }
    return ret;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.stack.length==0) return undefined;
    this.helper = []
    while(this.stack.length>1){
        this.helper.push(this.stack.pop())
    }
    let ret = this.stack.pop();
    this.stack.push(ret)
    while(this.helper.length>0){
        this.stack.push(this.helper.pop())
    }
    return ret;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length==0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end



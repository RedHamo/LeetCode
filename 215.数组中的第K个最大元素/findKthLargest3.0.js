/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 堆排序 
class MinHeap{
    constructor(k){
        this.arr = []
        this.size = 0;
        this.max = k;
    }
    push(val){
        this.arr.push(val);
        this.size++;
        if (this.size>1) {
            let cur = this.size-1,
            parent = (cur-1)>>1;
            while(cur>0&&this.arr[cur]<this.arr[parent]){
                [this.arr[parent],this.arr[cur]] = [this.arr[cur],this.arr[parent]];
                cur = parent,parent = (cur-1)>>1;
            }
        }
        if(this.size>this.max) this.pop();
    }
    pop(){
        this.arr[0] = this.arr.pop();
        this.size--;
        let cur = 0,
        childl = 1,childr = 2;
        while(
            (childl<this.size&&this.arr[childl]<this.arr[cur])||
            (childr<this.size&&this.arr[childr]<this.arr[cur])
        ){
            if(childr<this.size&&this.arr[childr]<this.arr[childl]){
                [this.arr[cur],this.arr[childr]] = [this.arr[childr],this.arr[cur]];
                cur = childr;
            }else{
                [this.arr[cur],this.arr[childl]] = [this.arr[childl],this.arr[cur]];
                cur = childl;
            }
            childl = cur*2+1,childr = cur*2+2;
        }
    }
    top(){
        return this.arr[0]
    }
}
var findKthLargest = function (nums, k) {
    const heap = new MinHeap(k);
    for (let i = 0; i < nums.length; i++) {
        if (heap.size<k||nums[i]>heap.top()) {
            heap.push(nums[i]);
        }
    }
    // 返回堆顶元素
    return heap.top();
};
// @lc code=end


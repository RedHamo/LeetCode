/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // 初始化一个返回的数组
    let result=[]
    // 递归调用
    helper(nums,[])
    // 返回
    return result;
    /**
     * 每轮递归确定一个数字，然后将剩余数字传入递归
     * 当只剩下一个数字的时候，将数字补齐，保存到result中即可
     */
    function helper(arr, item){
        if(arr.length==1) {
            item.push(arr[0])
            result.push(item)
            return 
        }
        for(let i=0;i<arr.length; i++){
            let temp = [...item]
            temp.push(arr[i]);
            helper(arr.filter(o=>o!=arr[i]),temp)
        }
    }
}; 

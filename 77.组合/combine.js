/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = []
    let arr = []
    for(let i=0; i<n; i++) arr.push(i+1)
    //console.log(arr)
    helper(arr,[])
    return res;

    function helper(arr,item){
        if(item.length == k) return res.push(item)
        for(let i=0; i<arr.length; i++){
            let temp = [...item]
            temp.push(arr[i])
            helper(arr.filter(o=>o>arr[i]),temp)
        }
    }
};

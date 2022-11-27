/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let max = Math.max(...arr);
    let l=0;r=arr.length-1;
    if(max==arr[l] || max == arr[r]) return false;
    while(arr[l]<max){
        if(arr[l]<=arr[l-1]) return false;
        l++;
    }
    console.log(1)
    while(arr[r]<max){
        if(arr[r]<=arr[r+1]) return false;
        r--;
    }
    console.log(2,l,r)
    return l==r;
};

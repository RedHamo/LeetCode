/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m=matrix[0].length,n=matrix.length;
    let rowIndex = getRow();
    console.log(rowIndex)
    if(rowIndex===false) return false;

    matrix = matrix[rowIndex]
    let l=0, r=m-1, mid=Math.floor((l+r)/2)
    while(l<=r){
        mid = Math.floor((l+r)/2)
        if(matrix[l]==target || matrix[mid]==target) return true;
        if(l==r) return false;
        if(matrix[mid]<target){
            l=mid+1;
        }else{
            r=mid;
        }
    }
    return false;
    
    function getRow(){
        let left=0, right=n-1, mid=Math.floor((left+right)/2)
        
        while(left<=right){
            mid = Math.floor((left+right)/2)
            if(matrix[mid][0]<=target&&matrix[mid][m-1]>=target) return mid
            if(left==right) return false;
            if(matrix[mid][0]<target){
                left=mid+1;
            }else{
                right=mid;
            }
        }
        return false;
    }
};

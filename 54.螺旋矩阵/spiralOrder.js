/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let eachList = { top:0, left:0, right:0, bottom:0}
    let r = matrix.length, c=matrix[0].length, num=r*c;
    let currentFunc = toRight;
    let point = [0,0]
    let result = [matrix[0][0]]
    while(result.length<num){
        currentFunc()
    }
    return result;
    function toRight(){
        if(point[1]+2 > c-eachList.right){
            currentFunc = toBottom;
            eachList.right++;
        }else{
            point[1]++;
            result.push(matrix[point[0]][point[1]])
        }
    }    
    function toBottom(){
        if(point[0]+2 > r-eachList.bottom){
            currentFunc = toLeft;
            eachList.bottom++;
        }else{
            point[0]++;
            result.push(matrix[point[0]][point[1]])
        }
    }    
    function toLeft(){
        if(point[1] <= eachList.left){
            currentFunc = toTop;
            eachList.left++;
        }else{
            point[1]--;
            result.push(matrix[point[0]][point[1]])
        }
    }    
    function toTop(){
        if(point[0]-1 <= eachList.top){
            currentFunc = toRight;
            eachList.top++;
        }else{
            point[0]--;
            result.push(matrix[point[0]][point[1]])
        }
    }
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let result = false;
    let m=board.length, n=board[0].length;
    if(word.length>m*n) return false;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(board[i][j]!=word[0]) continue;
            if(word.length==1) return true;
            board[i][j]=1;
            helper(i,j,1)
            board[i][j]=word[0];
        }
    }
    return result;

    function helper(i,j, idx){
        // console.log(idx)
        if(word.length==idx) return result=true
        let char = word[idx]
        idx++;
        if(i>0 && board[i-1][j]==char) {
            // console.log("上")
            board[i-1][j]=1;
            helper(i-1,j, idx)
            board[i-1][j]=char;
        }
        if(i<m-1 && board[i+1][j]==char) {
            // console.log("下")
            board[i+1][j]=1;
            helper(i+1,j, idx)
            board[i+1][j]=char;
        }
        if(j>0 && board[i][j-1]==char) {
            // console.log("左")
            board[i][j-1]=1;
            helper(i,j-1, idx)
            board[i][j-1]=char;
        }
        if(j<n-1 && board[i][j+1]==char) {
            // console.log("右")
            board[i][j+1]=1;
            helper(i,j+1, idx)
            board[i][j+1]=char;
        }
    }
};

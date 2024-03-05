/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let rook;
    let result = 0;
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j]=="R") rook = [i,j]
        }
    }
    let x=rook[0],y=rook[1];
    for(let i=x+1; i<8; i++){
        if(board[i][y]=="B") break;
        if(board[i][y]==".") continue;
        if(board[i][y]=="p") {
            result++;
            break;
        }
    }
    for(let i=x-1; i>=0; i--){
        if(board[i][y]=="B") break;
        if(board[i][y]==".") continue;
        if(board[i][y]=="p") {
            result++;
            break;
        }
    }
    for(let i=y+1; i<8; i++){
        if(board[x][i]=="B") break;
        if(board[x][i]==".") continue;
        if(board[x][i]=="p") {
            result++;
            break;
        }
    }
    for(let i=y-1; i>=0; i--){
        if(board[x][i]=="B") break;
        if(board[x][i]==".") continue;
        if(board[x][i]=="p") {
            result++;
            break;
        }
    }
    return result;
};

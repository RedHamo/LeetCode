/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let hashList = { 
        r0:{},r1:{},r2:{},r3:{},r4:{},r5:{},r6:{},r7:{},r8:{},
        c0:{},c1:{},c2:{},c3:{},c4:{},c5:{},c6:{},c7:{},c8:{},
        b00:{},b01:{},b02:{},b10:{},b11:{},b12:{},b20:{},b21:{},b22:{},
     }
     for(let r=0; r<board.length; r++){
        for(let c=0; c<board.length; c++){
            let el = board[r][c]
            if(el==".") continue;
            let ri=(~~(r/3)),ci=(~~(c/3));
            if(hashList['r'+r][el]) return false;
            if(hashList['c'+c][el]) return false;
            if(hashList['b'+ri+''+ci][el]) return false;
            hashList['r'+r][el] = 1
            hashList['c'+c][el] = 1
            hashList['b'+ri+''+ci][el] = 1
        }
     }
     return true;
};

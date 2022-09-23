/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    if(moves.length%2 == 1) return false;
    let memo = { U:0, D:0, L:0, R:0 }
    for(let i of moves) memo[i]++;
    return memo.U == memo.D && memo.L == memo.R
};

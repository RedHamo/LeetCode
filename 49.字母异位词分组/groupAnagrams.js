/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashs = {}
    for(let str of strs){
        let hash = gethash(str)
        hashs[hash]?hashs[hash].push(str):hashs[hash]=[str]
    }
    return Object.values(hashs)
};

function gethash(str){
    return str.split("").sort().join("")
}

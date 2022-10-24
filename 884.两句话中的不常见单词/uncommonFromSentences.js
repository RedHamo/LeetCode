/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let hash = {}
    for(let el of s1.split(" ")){
        hash[el] = hash[el]?hash[el]+1:1
    }
    for(let el of s2.split(" ")){
        hash[el] = hash[el]?hash[el]+1:1
    }
    let res = []
    for(let el in hash){
        if(hash[el]==1) res.push(el)
    }
    return res;
};

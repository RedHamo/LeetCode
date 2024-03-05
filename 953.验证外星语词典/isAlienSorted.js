/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let hash = {}
    let result = true;
    for(let index in order){
        let el = order[index]
        hash[el]=index;
    }

    for(let i=0; i<words.length-1; i++){
        if(!helper(words[i].split(""), words[i+1].split(""))) result=false;
    }

    return result;
    function helper(w1,w2){
        if(!w1[0]) return true;
        if(!w2[0]) return false;
        if(w1[0]!=w2[0]) return +hash[w1[0]] < +hash[w2[0]];
        w1.shift()
        w2.shift()
        return helper(w1,w2)
    }
};

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result = words[0]
    for(let i=1; i<words.length; i++){
        result = getCommonChar(result, words[i])
    }
    return result;

    function getCommonChar(w1, w2){
        let hash = {}
        let res = []
        for(let s1 of w1){
            hash[s1]?hash[s1]++:hash[s1]=1;
        }
        for(let s2 of w2){
            if(hash[s2]>0){
                hash[s2]--;
                res.push(s2)
            }
        }
        return res;
    }
};

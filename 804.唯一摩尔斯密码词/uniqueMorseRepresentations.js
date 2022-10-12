/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let res = new Set()
    let map = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let aCode = "a".charCodeAt()
    for(let word of words){
        let temp = ""
        for(let el of word){
            temp += map[el.charCodeAt()-aCode]
        }
        res.add(temp)
    }
    return res.size;
};

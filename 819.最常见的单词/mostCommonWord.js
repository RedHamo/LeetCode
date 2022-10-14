/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let list = paragraph.match(/\w+/g)
    .map(o=>o.toLocaleLowerCase().replace(/[^\w]/g,""))
    .filter(o=>!banned.includes(o));
    let hash = {}
    for(let i of list){
        hash[i]?hash[i]++:hash[i]=1;
    }
    let max = 0;
    for(let key in hash) max = Math.max(hash[key],max)
    for(let key in hash) if(hash[key]==max) return key;
};

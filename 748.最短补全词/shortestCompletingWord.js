/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    let hash={}
    let count = 0;
    for(let el of licensePlate){
        el = el.toLocaleLowerCase()
        if(el>"z" || el<"a") continue;
        count++;
        if(hash[el]) {
            hash[el]++;
        } else {
            hash[el] = 1;
        }
    }
    words.sort((a,b)=> a.length-b.length)
    for(let el of words){
        if(el.length<count) continue;
        let temp = calcHash(el)
        let flag = true;
        for(let i in hash){
            if(!temp[i] || temp[i]<hash[i]) {
                flag=false;
                break;
            }
        } 
        if(flag) return el;
    }
    return -1;


    function calcHash(str){
        let hash={}
        for(let el of str){
            if(hash[el]) {
                hash[el]++;
            } else {
                hash[el] = 1;
            }
        }
        return hash;
    }
};

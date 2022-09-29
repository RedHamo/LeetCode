/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    let sHash = {}
    for(let i in s){
        if(sHash[s[i]]) sHash[s[i]].push(i)
        else sHash[s[i]] = [i]
    }

    let aCode = "a".charCodeAt();
    for(let el in sHash){
        let num = el.charCodeAt() - aCode;
        if(distance[num]!=sHash[el][1]-sHash[el][0]-1) return false;
    }
    return true;
};

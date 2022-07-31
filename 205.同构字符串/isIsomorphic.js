/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let hashs = {},
    hasht = {}
    if(s.length!=t.length) return false;

    for(let i=0; i<s.length; i++){
        if(hashs[s[i]]!=hasht[t[i]]) return false;
        if(!hashs[s[i]]) hashs[s[i]]=i;
        if(!hasht[t[i]]) hasht[t[i]]=i;
    }
    return true;
};

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length != goal.length) return false;
    if(s.length==1) return false;
    let temp = [],hash = {},flag = false;
    for(let i=0; i<s.length; i++){
        if(hash[s[i]]) flag = true;
        hash[s[i]] = true;

        if(s[i]!=goal[i]) {
            temp.push(i);
            if(temp.length>2) return false;
        }
    }
    if(temp.length==0) return flag;
    if(temp.length==1) return false;
    if(s[temp[0]]!=goal[temp[1]] || goal[temp[0]]!=s[temp[1]]) return false;
    return true;
};

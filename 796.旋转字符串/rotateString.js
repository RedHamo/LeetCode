/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length != goal.length) return false;

    let bulk = s.split("")
    let conter = s.length;

    while(conter!=0){
        if(bulk.join("")==goal) return true;
        bulk.push(bulk.shift())
        conter--;
    }
    return false;
};

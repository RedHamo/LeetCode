/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let Acode = "A".charCodeAt();
    let Zcode = "Z".charCodeAt();
    let temp = "a".charCodeAt()-Acode;
    let res = ""
    for(let el of s){
        let elcode = el.charCodeAt()
        if(elcode>=Acode&&elcode<=Zcode) {
            res += String.fromCharCode(elcode+temp);
        } else{
            res += el
        }
    }
    return res;
};

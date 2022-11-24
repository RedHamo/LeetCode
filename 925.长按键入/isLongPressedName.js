/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let s1=name.split(""), s2=typed.split("");
    let last = ""
    for(let i=s2.length-1; i>=0; i--){
        let el = s2[i];
        if(s1[s1.length-1] != el && last != el) return false;
        if(s1[s1.length-1] == el || last != el){
            last = el;
            s1.pop()
        }
    }
    return s1.length ==0;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let arr = []
    for(let el of s) el=="#" ? arr.pop() : arr.push(el);
    let str = arr.join("");
    arr = []
    for(let el of t) el=="#" ? arr.pop() : arr.push(el);
    return str == arr.join("")
};

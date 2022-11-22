/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let l=0, r=s.length-1;
    let result = s.split("");
    while(l<r){
        while(!isaZ(result[l]) && l<r) l++;
        while(!isaZ(result[r]) && l<r) r--;
        let temp = result[r];
        result[r] = result[l]
        result[l] = temp
        l++;r--;
    }
    return result.join("");
    function isaZ(s){
        return (s>="a" && s<="z") || (s>="A" && s<="Z")
    }
};

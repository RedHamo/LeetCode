/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n==1) return '1';
    let result ='1';
    while(n>1){
        result = helper(result)
        n--;
    }
    return result;
    function helper(res){
        let result = ""
        let el={
            num: res[0],
            count:1
        }
        for(let i=1; i<res.length; i++){
            if(el.num==res[i]) {
                el.count++;
            } else{
                result+= `${el.count}${el.num}`
                el={
                    num: res[i],
                    count:1
                }
            }
        }
        result+= `${el.count}${el.num}`
        return result;
    }
};

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let aeiou = {a:true,e:true,i:true,o:true,u:true};
    let res = "";
    sentence = sentence.split(" ");
    for(let i=0,j="a"; i<sentence.length; i++,j+="a"){
        let el = sentence[i].split("");
        if(aeiou[el[0].toLocaleLowerCase()]) {
            el = el.join("") + "ma";
        }else{
            let tmp = el.shift()
            el = el.join("") + tmp + "ma";
        }
        el += j;
        console.log(el)
        res += el + " ";
    }
    return res.trim();
};

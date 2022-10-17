/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let hash = { 1:0, 0:1 }
    let res = [];
    for(let eli of image){
        let temp = [];
        for(let elj of eli){
            temp.unshift(hash[elj])
        }
        res.push(temp);
    }
    return res;
};

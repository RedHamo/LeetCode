/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let res = [];
    for(let i=0; i<img.length; i++){
        res[i] = [];
        for(let j=0; j<img[i].length; j++){
            res[i][j] = helper(i,j)
        }
    }
    return res;
    
    function helper(i,j){
        let sum = 1;
        let count = img[i][j];
        if(img[i][j-1]>=0){
            count += img[i][j-1]
            sum++
        }
        if(img[i][j+1]>=0){
            count += img[i][j+1]
            sum++
        }

        if(img[i-1]){
            count += img[i-1][j]
            sum++
            if(img[i-1][j-1]>=0){
                count += img[i-1][j-1]
                sum++
            }
            if(img[i-1][j+1]>=0){
                count += img[i-1][j+1]
                sum++
            }
        }

        if(img[i+1]){
            count += img[i+1][j]
            sum++
            if(img[i+1][j-1]>=0){
                count += img[i+1][j-1]
                sum++
            }
            if(img[i+1][j+1]>=0){
                count += img[i+1][j+1]
                sum++
            }
        }
        return ~~(count/sum);
    }
};

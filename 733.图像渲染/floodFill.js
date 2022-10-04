/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let temp = image[sr][sc];
    if(temp==color) return image;
    helper(sr, sc)
    return image;
    function helper(sr, sc){
        if(image[sr][sc] != temp) return;
        image[sr][sc] = color;
        if(image[sr]&&image[sr][sc+1]==temp) helper(sr, sc+1)
        if(image[sr]&&image[sr][sc-1]==temp) helper(sr, sc-1)
        if(image[sr+1]&&image[sr+1][sc]==temp) helper(sr+1, sc)
        if(image[sr-1]&&image[sr-1][sc]==temp) helper(sr-1, sc)
    }
};

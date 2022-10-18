/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    let [x1, y1, x2, y2] = rec1;
    let [x3, y3, x4, y4] = rec2;
    if(x1==x2||y1==y2) return false;
    if(x3==x4||y3==y4) return false;

    if(
        (x1<x3 && x2>x3)||
        (x1<x4 && x2>x4)||
        (x3<x1 && x4>x1)||
        (x3<x2 && x4>x2)
    ){
        if(
            (y1<y3 && y2>y3)||
            (y1<y4 && y2>y4)||
            (y3<y1 && y4>y1)||
            (y3<y2 && y4>y2)
        ){
            return true;
        }
    }
    return false;
};

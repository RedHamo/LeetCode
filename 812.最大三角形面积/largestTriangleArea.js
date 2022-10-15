/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let res = 0;
    for(let i=0; i<points.length-2; i++){
        for(let j=i+1; j<points.length-1; j++){
            for(let k=j+1; k<points.length; k++){
                res = Math.max(res, calcArea(points[i],points[j],points[k]))
            }
        }
       
    }
    return res;

    // 鞋带公式
    // 三个顶点分别是 A:(x1, y1) , B:(x2, y2) , C:(x3, y3)
    // S三角形=0.5∗((x1∗y2+x2∗y3+x3∗y1)−(y1∗x2+y2∗x3+y3∗x1))
    function calcArea(a,b,c){
        return Math.abs(
            (
                (a[0]*b[1] + b[0]*c[1] + c[0]*a[1]) 
                - 
                (a[1]*b[0] + b[1]*c[0] + c[1]*a[0])
            ) / 2
        )
    }
};

/**
 *  * @param {number} x
 *   * @return {number}
 *    */
var mySqrt = function(x) {
	    let ans = 1;
	    for(let i=1; i<=x; i++){
		            if(i*i > x) return ans;
		            ans = i;
		            if(i*i == x) return ans;
		        }
	    return 0;
};

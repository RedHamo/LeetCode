/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let lunci = 0;
    let result = Array(num_people).fill(0)
    while(candies>0){
        for(let i=0; i<num_people; i++){
            let num = num_people*lunci + i+1;
            console.log(i, num)
            if(num<candies) {
                result[i] += num;
                candies -= num;
            }else{
                result[i] += candies
                candies = 0;
            }
        }
        lunci++;
    }
    return result;
};

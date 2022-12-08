/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    return opertion(stones)
    function opertion(stones){
        if(stones.length==1) return stones[0]
        if(stones.length==0) return 0
        console.log(stones)
        stones.sort((a,b)=>b-a)
        let max = stones.shift();
        let no2 = stones.shift();
        if(max!=no2) stones.push(max-no2)
        return opertion(stones)
    }
};

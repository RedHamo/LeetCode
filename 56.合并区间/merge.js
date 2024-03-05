/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    let mergedIndexs = {}
    let result = []
    for(let i=0; i<intervals.length; i++){
        if(mergedIndexs[i]) continue;
        let eli = intervals[i]
        let current = eli;
        for(let j=i+1; j<intervals.length; j++){
            if(mergedIndexs[j]) continue;
            let elj = intervals[j]
            // eli全包含elj
            if(current[0]<=elj[0] && current[1]>=elj[1]) {
                mergedIndexs[j]=true;
                continue;
            }
            // elj全包含current
            if(current[0]>=elj[0] && current[1]<=elj[1]) {
                current=elj;
                mergedIndexs[j]=true;
                continue;
            }
            //current右半包含elj
            if(current[0]<=elj[0] && current[1]<=elj[1] && elj[0]<=current[1]) {
                current=[current[0],elj[1]];
                mergedIndexs[j]=true;
                continue;
            }
            //current左半包含elj
            if(elj[0]<=current[0] && elj[1]<=current[1] && current[0]<=elj[1]) {
                current=[elj[0],eli[1]];
                mergedIndexs[j]=true;
                continue;
            }
        }
        result.push(current)
    }
    console.log(mergedIndexs)
    return result;
};

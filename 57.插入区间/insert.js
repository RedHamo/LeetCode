/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let res = [], 
    len = intervals.length, 
    i = 0, 
    newStart = newInterval[0], 
    newEnd = newInterval[1]
    while (i < len && newStart > intervals[i][1]) {
        // 区键没有重合
        res.push(intervals[i])
        i++
    }
    while (i < len && newEnd >= intervals[i][0]) {
        newStart = Math.min(newStart, intervals[i][0])
        newEnd = Math.max(newEnd, intervals[i][1])
        i++
    }
    res.push([newStart, newEnd])
    while (i < len) {
        res.push(intervals[i])
        i++
    }
    return res
};

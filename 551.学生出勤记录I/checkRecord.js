/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let lateCount = 0;
    let AbsentCount = 0;
    for(let i=0; i<s.length; i++){
        if(s[i]=="L"){
            lateCount++;
            if(lateCount==3) return false;
        }else{
            lateCount = 0;
            if(s[i]=="A") {
                AbsentCount++;
                if(AbsentCount==2) return false;
            }
        }
    }
    return true;
};
// @lc code=end



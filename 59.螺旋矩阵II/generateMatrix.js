/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let outline = 0;
    const total = n**2;
    const res = []
    for(let i=0; i<n; i++) res[i]=[]

    let index = 0;
    while(index<total){
        // 从左往右,从左层元素开始到右层元素结束个元素
        for(let i=outline; i<=n-1-outline; i++) res[outline][i] = ++index; 

        
        // 从上往下,从上层元素加已经添加的一层到下层元素结束个元素
        for(let i=outline+1; i<=n-1-outline; i++) res[i][n-1-outline] = ++index;

        // 从右往左,从右层元素开始加已经添加的一层到左层元素结束个元素
        for(let i=n-2-outline; i>=outline;i--) res[n-1-outline][i] = ++index 

        // 从下往上,从下层元素加已经添加的一层到上层元素加已经添加的一层结束个元素
        for(let i=n-2-outline; i>=outline+1;i--) res[i][outline] = ++index
        outline++
    }
    return res;
};

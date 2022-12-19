/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1=="0"||num2=="0") return "0";
    let len1 = num1.length,len2 = num2.length,res=new Array(len1+len2).fill(0)

    for(let i=len1-1; i>=0; i--){
        for(let j=len2-1;j>=0; j--){
            // 从个位开始，逐步相乘
            const mul = num1[i]*num2[j]
            // 乘积在结果数组中对应的位置
            /**
             * 123 * 123 
             = 123*3 + 123*20 + 123*100
             = 100*3 + 20*3 + 3*3 + ...
             * 两个个位数相乘，其结果肯定在两位及两位以内
             * p1是前一位位，p2是当前位位置
             */
            
            const p1 = i+j,p2 = i+j+1
            // 对结果进行累加，重新计算个位和十位的值
            const sum = mul + res[p2]
            res[p1] += (~~(sum/10))
            res[p2] = sum%10
        }
    }
    // 当前两位乘积不足10的时候，需要将计算结果前部去零
    if(res[0]===0) res.shift()
    return res.join("");
};

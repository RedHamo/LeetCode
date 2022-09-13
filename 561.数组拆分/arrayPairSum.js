    nums.sort((a,b)=>b-a)
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        if(i%2==1) sum+=nums[i]
    }
    return sum;

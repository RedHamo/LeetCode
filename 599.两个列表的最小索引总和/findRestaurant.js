/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let res = []
    let indexSum = Infinity;
    for(let i=0; i<list1.length; i++){
        for(let j=0; j<list2.length; j++){
            if(j+i>indexSum) break;
            if(list1[i] == list2[j]){
                if(j+i==indexSum){
                    res.push(list1[i])
                }else{
                    res = [list1[i]]
                }
                indexSum = j+i;
            }
        }
    }
    return res;
};

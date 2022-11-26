var RecentCounter = function() {
    this.li=[]
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.li.push(t)
    let val = this.li[this.li.length-1];
    let result = []
    for(let i=this.li.length-1; i>=0 && val-this.li[i]<=3000; i--){
        result.push(this.li[i])
    }
    return result.length
}; 

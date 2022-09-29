var MyHashMap = function() {
    this.items = []
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let hash = this.hash(key)
    this.items[hash] = value;
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let hash = this.hash(key)
    return this.items[hash]==undefined? -1:this.items[hash]
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let hash = this.hash(key)
    this.items[hash] = undefined
};


/** 
 * @param {number} key
 * @return {string}
 */
MyHashMap.prototype.hash = function(key) {
    return key.toString(2);
};
/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

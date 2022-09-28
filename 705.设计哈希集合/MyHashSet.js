var MyHashSet = function() {
    this.items = []
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.items[this.hash(key)] = true;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    this.items[this.hash(key)] = undefined;
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.items[this.hash(key)]===true;
};

MyHashSet.prototype.hash = function(key) {
    // 此处可以自定义哈希的生成算法
    return key.toString(2)
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

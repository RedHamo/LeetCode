/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let xobj = {
        parent: root,
        deep:0,
        val:x
    }
    let yobj = {
        parent: root,
        deep:0,
        val:y
    }
    let res = false;
    helper(root, 0, null)
    return res;
    function helper(node, deep, old){
        if(yobj.deep!=0 && xobj.deep!=0) {
            console.log(33,xobj,yobj)
            if(xobj.parent!=yobj.parent && xobj.deep==yobj.deep) res=true
            return
        }
        if(!node) return;
        if(xobj.deep!=0 && deep>xobj.deep) return;
        if(yobj.deep!=0 && deep>yobj.deep) return;
        if(node.val==x) {
            xobj = {
                parent: old,
                deep:deep,
                val:x
            }
        }
        if(node.val==y) {
            yobj = {
                parent: old,
                deep:deep,
                val:y
            }
        }

        helper(node.left, deep+1, node)
        helper(node.right, deep+1, node)
    }
};

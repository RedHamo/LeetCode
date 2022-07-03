var inorderTraversal = function (root){
	let ret = [];
	const func = (root)=>{
		if(!root) return;
		if(root.left) func(root.left);
		ret.push(root.val);
		if(root.right) func(root.right);
	}
	func(root)
	return ret;
}

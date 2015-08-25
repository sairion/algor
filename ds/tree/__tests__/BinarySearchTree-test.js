import assert from 'assert';
import { BinarySearchTree, BinarySearchTreeNode } from '../BinarySearchTree';

var result;

const arrayOutputCallback = (node) => {
  result.push(node.data);
};

/* Simple binary tree test.
      0
    /   \
   1     2
  / \   / \
 3   4 5   6
*/
const tree = new BinarySearchTree();
tree.root = new BinarySearchTreeNode();
tree.root.addChild(5);
tree.root.addChild(2);
tree.root.addChild(4);
tree.root.addChild(9);
tree.root.addChild(6);
tree.root.addChild(1);

result = [];
tree.root.preorderWalk(arrayOutputCallback);
console.warn(result);
assert.deepEqual(result, [0, 1, 3, 4, 2, 5, 6], 'should walk correctly on preorder traversal');
/*
result = [];
tree.root.inorderWalk(arrayOutputCallback);
assert.deepEqual(result, [3, 1, 4, 0, 5, 2, 6], 'should walk correctly on inorder traversal');

result = [];
tree.root.postorderWalk(arrayOutputCallback);
console.warn(result);
assert.deepEqual(result, [3, 4, 1, 5, 6, 2, 0], 'should walk correctly on postorder traversal');
*/
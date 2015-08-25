import assert from 'assert';
import { BinaryTreeNode, BinaryTree } from '../BinaryTree';

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
const tree = new BinaryTree();
tree.root = new BinaryTreeNode(0);
tree.root.addLeftChild(1);
tree.root.addRightChild(2);

tree.root.left.addLeftChild(3);
tree.root.left.addRightChild(4);

tree.root.right.addLeftChild(5);
tree.root.right.addRightChild(6);

result = [];
tree.root.preorderWalk(arrayOutputCallback);
assert.deepEqual(result, [0, 1, 3, 4, 2, 5, 6], 'should walk correctly on preorder traversal');

result = [];
tree.root.inorderWalk(arrayOutputCallback);
assert.deepEqual(result, [3, 1, 4, 0, 5, 2, 6], 'should walk correctly on inorder traversal');

result = [];
tree.root.postorderWalk(arrayOutputCallback);
console.warn(result);
assert.deepEqual(result, [3, 4, 1, 5, 6, 2, 0], 'should walk correctly on postorder traversal');

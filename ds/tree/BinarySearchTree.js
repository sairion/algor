// import log from '../../log';
import { BinaryTreeNode, BinaryTree } from './BinaryTree';


// a, b -> Scalar Number values
function numericCmp(a: number, b: number): number {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;  // Same
  } else if (a < b) {
    return -1;
  }
}

export class BinarySearchTreeNode extends BinaryTreeNode {
  parent = null; // .p
  left = null;   // .left
  right = null;  // .right

  static defaultCmp = (currentNodeData, nextNodeData) => numericCmp(currentNodeData, nextNodeData);

  constructor(data) {
    super(data);
    this.data = data;
  }

  addChild(data, cmp = BinarySearchTreeNode.defaultCmp) {
    const cmpResult = cmp(this.data, data);
    if (cmpResult > 0) {
      this.addChildRight.call(this);
    } else if (!BinarySearchTree.disallowDuplicate && cmpResult === 0) {
      this.addChildLeft.call(this);
    // Error
    } else if (BinarySearchTree.disallowDuplicate && cmpResult === 0) {
      throw new Error('duplicate disallowed, data was ' + data);
    } else if (cmpResult < 0) {
      this.addChildLeft.call(this);
    }
  }

  addChildLeft(data) {
    if (this.left) {
      this.left.addChild(data);
    } else {
      this.left = new BinarySearchTreeNode(data);
    }
  }

  addChildRight(data) {
    if (this.right) {
      this.right.addChild(data);
    } else {
      this.right = new BinarySearchTreeNode(data);
    }
  }
}

export class BinarySearchTree extends BinaryTree {
  static disallowDuplicate = true;
  constructor(props) {
    super(props);
  }
  /*
  constructor(rootNode) {
    super(rootNode);
    if (rootNode != null) {
      if (rootNode instanceof BinarySearchTree) {
        this.root = rootNode;
      } else {
        throw new Error('BinarySearchTree(): input should be instance of BinaryTreeNode');
      }
    }
  }
  */

  root : BinarySearchTreeNode = null;
  data : any = null;
}

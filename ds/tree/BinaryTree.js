import log from '../../log';


export class BinaryTreeNode {
  parent = null; // .p
  left = null;   // .left
  right = null;  // .right

  static defaultTraversalCallback = (node) => { log(log.C.DEBUG, 'walked(): ', node.data); };
  static defaultCmp = (currentNode, nextNode) => {
    return numericCmp(currentNode.data, nextNode.data);
  };

  constructor(data) {
    this.data = data;
  }

  addLeftChild(data, overwrite=false) {
    if (this.left && overwrite === false) {
      throw new Error('Cannot overwrite left child');
    }
    this.left = new BinaryTreeNode(data);
    this.left.parent = this;
  }

  addRightChild(data, overwrite=false) {
    if (this.right && overwrite === false) {
      throw new Error('Cannot overwrite right child');
    }
    this.right = new BinaryTreeNode(data);
    this.right.parent = this;
  }

  preorderWalk(callback = BinaryTreeNode.defaultTraversalCallback) {
    log(log.C.DEBUG, `${this.data}: started`);
    if (callback) {
      callback(this);
    }

    if (this.left) {
      this.left.preorderWalk(callback)
    } else {
      log(log.C.DEBUG, `${this.data}: no more left child exist`);
    }

    if (this.right) {
      this.right.preorderWalk(callback)
    } else {
      log(log.C.DEBUG, `${this.data}: no more right child exist`);
    }
    log(log.C.DEBUG, `${this.data}: end`);
  }
  
  inorderWalk(callback = BinaryTreeNode.defaultTraversalCallback) {
    log(log.C.DEBUG, `${this.data}: started`);
    if (this.left) {
      this.left.inorderWalk(callback)
    } else {
      log(log.C.DEBUG, `${this.data}: no more left child exist`);
    }

    if (callback) {
      callback(this);
    }

    if (this.right) {
      this.right.inorderWalk(callback)
    } else {
      log(log.C.DEBUG, `${this.data}: no more right child exist`);
    }
    log(log.C.DEBUG, `${this.data}: end`);
  }
  
  postorderWalk(callback = BinaryTreeNode.defaultTraversalCallback) {
    log(log.C.DEBUG, `${this.data}: started`);
    if (this.left) {
      this.left.postorderWalk(callback)
    } else {
      log(log.C.DEBUG, `${this.data}: no more left child exist`);
    }

    if (this.right) {
      this.right.postorderWalk(callback)
    } else {
      log(log.C.DEBUG, `${this.data}: no more right child exist`);
    }

    if (callback) {
      callback(this);
    }
    log(log.C.DEBUG, `${this.data}: end`);
  }
}

export class BinaryTree {
  /*
  constructor(rootNode) {
    if (rootNode != null) {
      if (rootNode instanceof BinaryTreeNode) {
        this.root = rootNode;
      } else {
        throw new Error('BinaryTree(): input should be instance of BinaryTreeNode');
      }
    }
  }
  */
  root : BinaryTreeNode = null;
  data : any = null;
}

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BinarySearchTree = exports.BinarySearchTreeNode = exports.BinaryTree = exports.BinaryTreeNode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _log = function(){}
var _log2 = {'default': function(){} };
_log2['default'].C = { DEBUG: null } 

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BinaryTreeNode = exports.BinaryTreeNode = function () {
  // .right

  // .p

  function BinaryTreeNode(data) {
    _classCallCheck(this, BinaryTreeNode);

    this.parent = null;
    this.left = null;
    this.right = null;

    this.data = data;
  } // .left


  _createClass(BinaryTreeNode, [{
    key: 'addLeftChild',
    value: function addLeftChild(data) {
      var overwrite = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      if (this.left && overwrite === false) {
        throw new Error('Cannot overwrite left child');
      }
      this.left = new BinaryTreeNode(data);
      this.left.parent = this;
    }
  }, {
    key: 'addRightChild',
    value: function addRightChild(data) {
      var overwrite = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      if (this.right && overwrite === false) {
        throw new Error('Cannot overwrite right child');
      }
      this.right = new BinaryTreeNode(data);
      this.right.parent = this;
    }
  }, {
    key: 'preorderWalk',
    value: function preorderWalk() {
      var callback = arguments.length <= 0 || arguments[0] === undefined ? BinaryTreeNode.defaultTraversalCallback : arguments[0];

      (0, _log2.default)(_log2.default.C.DEBUG, this.data + ': started');
      if (callback) {
        callback(this);
      }

      if (this.left) {
        this.left.preorderWalk(callback);
      } else {
        (0, _log2.default)(_log2.default.C.DEBUG, this.data + ': no more left child exist');
      }

      if (this.right) {
        this.right.preorderWalk(callback);
      } else {
        (0, _log2.default)(_log2.default.C.DEBUG, this.data + ': no more right child exist');
      }
      (0, _log2.default)(_log2.default.C.DEBUG, this.data + ': end');
    }
  }, {
    key: 'inorderWalk',
    value: function inorderWalk() {
      var callback = arguments.length <= 0 || arguments[0] === undefined ? BinaryTreeNode.defaultTraversalCallback : arguments[0];

      (0, _log2.default)(_log2.default.C.DEBUG, this.data + ': started');
      if (this.left) {
        this.left.inorderWalk(callback);
      } else {
        (0, _log2.default)(_log2.default.C.DEBUG, this.data + ': no more left child exist');
      }

      if (callback) {
        callback(this);
      }

      if (this.right) {
        this.right.inorderWalk(callback);
      } else {
        (0, _log2.default)(_log2.default.C.DEBUG, this.data + ': no more right child exist');
      }
      (0, _log2.default)(_log2.default.C.DEBUG, this.data + ': end');
    }
  }, {
    key: 'postorderWalk',
    value: function postorderWalk() {
      var callback = arguments.length <= 0 || arguments[0] === undefined ? BinaryTreeNode.defaultTraversalCallback : arguments[0];

      (0, _log2.default)(_log2.default.C.DEBUG, this.data + ': started');
      if (this.left) {
        this.left.postorderWalk(callback);
      } else {
        (0, _log2.default)(_log2.default.C.DEBUG, this.data + ': no more left child exist');
      }

      if (this.right) {
        this.right.postorderWalk(callback);
      } else {
        (0, _log2.default)(_log2.default.C.DEBUG, this.data + ': no more right child exist');
      }

      if (callback) {
        callback(this);
      }
      (0, _log2.default)(_log2.default.C.DEBUG, this.data + ': end');
    }
  }]);

  return BinaryTreeNode;
}();

BinaryTreeNode.defaultTraversalCallback = function (node) {
  (0, _log2.default)(_log2.default.C.DEBUG, 'walked(): ', node.data);
};

BinaryTreeNode.defaultCmp = function (currentNode, nextNode) {
  return numericCmp(currentNode.data, nextNode.data);
};

var BinaryTree =
/*
static getLeftToRight(node: TreeNode) {
  return node.left || node.right;
}
 min() {
  
}
 max() {
  
}
 search(data: any) {
 }
*/
exports.BinaryTree = function BinaryTree() {
  _classCallCheck(this, BinaryTree);

  this.root = null;
  this.data = null;
  this.Node = BinaryTreeNode;
}
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


// 다형성을 위한 Tree#Node 인터페이스...
;

// a, b -> Scalar Number values


function numericCmp(a, b) {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0; // Same
  } else if (a < b) {
      return -1;
    }
}

var BinarySearchTreeNode = exports.BinarySearchTreeNode = function (_BinaryTreeNode) {
  _inherits(BinarySearchTreeNode, _BinaryTreeNode);

  // .left

  function BinarySearchTreeNode(data) {
    _classCallCheck(this, BinarySearchTreeNode);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BinarySearchTreeNode).call(this, data));

    _this.parent = null;
    _this.left = null;
    _this.right = null;

    _this.data = data;
    return _this;
  } // .right

  // .p


  _createClass(BinarySearchTreeNode, [{
    key: 'addChild',
    value: function addChild(data) {
      var cmp = arguments.length <= 1 || arguments[1] === undefined ? BinarySearchTreeNode.defaultCmp : arguments[1];

      var cmpResult = cmp(this.data, data);
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
  }, {
    key: 'addChildLeft',
    value: function addChildLeft(data) {
      if (this.left) {
        this.left.addChild(data);
      } else {
        this.left = new BinarySearchTreeNode(data);
      }
    }
  }, {
    key: 'addChildRight',
    value: function addChildRight(data) {
      if (this.right) {
        this.right.addChild(data);
      } else {
        this.right = new BinarySearchTreeNode(data);
      }
    }
  }]);

  return BinarySearchTreeNode;
}(BinaryTreeNode);

BinarySearchTreeNode.defaultCmp = function (currentNodeData, nextNodeData) {
  return numericCmp(currentNodeData, nextNodeData);
};

var BinarySearchTree = exports.BinarySearchTree = function (_BinaryTree) {
  _inherits(BinarySearchTree, _BinaryTree);

  /*
  static getLeftToRight(node: TreeNode) {
    return node.left || node.right;
  }
   min() {
    
  }
   max() {
    
  }
   search(data: any) {
   }
  */

  function BinarySearchTree() {
    var _Object$getPrototypeO;

    var _temp, _this2, _ret;

    _classCallCheck(this, BinarySearchTree);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(BinarySearchTree)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.root = null, _this2.data = null, _this2.Node = BinarySearchTreeNode, _temp), _possibleConstructorReturn(_this2, _ret);
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

  // 다형성을 위한 Tree#Node 인터페이스...


  return BinarySearchTree;
}(BinaryTree);

BinarySearchTree.disallowDuplicate = true;


var result;

var arrayOutputCallback = function arrayOutputCallback(node) {
  result.push(node.data);
};

/* Simple binary tree test.
      0
    /   \
   1     2
  / \   / \
 3   4 5   6
*/
var tree = new BinarySearchTree();
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
_assert2.default.deepEqual(result, [0, 1, 3, 4, 2, 5, 6], 'should walk correctly on preorder traversal');
/*
result = [];
tree.root.inorderWalk(arrayOutputCallback);
assert.deepEqual(result, [3, 1, 4, 0, 5, 2, 6], 'should walk correctly on inorder traversal');

result = [];
tree.root.postorderWalk(arrayOutputCallback);
console.warn(result);
assert.deepEqual(result, [3, 4, 1, 5, 6, 2, 0], 'should walk correctly on postorder traversal');
*/


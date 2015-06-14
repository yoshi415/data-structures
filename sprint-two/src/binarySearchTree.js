var BinarySearchTree = function(value){

  var bst = new Node(value);

  bst.insert = function(value) {
    var newNode = new Node(value);

    var findEmptyNode = function(searchNode) {
      if (value < searchNode.value) {
        if (searchNode.left === null) {
          searchNode.left = newNode;
        } else {
          findEmptyNode(searchNode.left)
        }
      } 
      else if (value > searchNode.value) {
        if (searchNode.right === null) {
          searchNode.right = newNode;
        }
        else {
          findEmptyNode(searchNode.right)
        }
      }  
    }
    findEmptyNode(this);
  }

  bst.contains = function(val) {
    var result = false;
    var containsValue = function(searchNode) {
      if (searchNode.value === val) {
        result = true;
      } else if (val < searchNode.value) {
        if (!searchNode.left) {
          result = false;
        } else {
          containsValue(searchNode.left)
        }
      } else if (val > searchNode.value) {
        if (!searchNode.right) {
          result = false;
        } else {
          containsValue(searchNode.right) 
        }
      }
    }
    containsValue(this);
    return result;
  }

  bst.depthFirstLog = function(cb) {
    var results = [];
    results.push(cb(this.value))
    var runCB = function(searchNode) {    
      if (searchNode.left) {
        results.push(cb(searchNode.left.value)); 
        runCB(searchNode.left)
      } 
      if (searchNode.right) {
        results.push(cb(searchNode.right.value))
        runCB(searchNode.right)
      } 
    }
    runCB(this)
    return results;
  }

  return bst;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.left = null;
  node.right = null;

  return node;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

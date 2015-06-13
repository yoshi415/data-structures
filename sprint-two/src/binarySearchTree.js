var BinarySearchTree = function(value){

  var bst = {}
  bst._root = null;

  bst.insert = function(value) {
    var newNode = new Node(value);
    if (this.left === null) {
      this.left = newNode;
    } 
    else if (this.right === null) {
      this.right = newNode;
    } else {
      // go to next node and recurse?
    }
    //check if parent exists
    //does node go on left or right side
      //
    //
  }

  bst.contains = function(value) {
    var found = false,
      current = this._root;

    return found;
  }

  bst.depthFirstLog = function(cb) {

  }

  return bst;
};

var Node = function(value) {
  var node = {};
  this.value = value;
  this.left = null;
  this.right = null;

  return node;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

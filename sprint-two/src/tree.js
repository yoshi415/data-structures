var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = new Tree(value);
  this.children.push(newTree);

};

treeMethods.contains = function(target){
  //
  var found,
      searchChild = 
  if (this.value === target) {
    return true;
  }
  // define recursive function
  var search = function() {
    for (var i = 0, len = this.children.length; i < len; i++) {
      
    }
  }
  search();
  return some variable;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// [[0, 1, 2, 3], [0, 1, 2, 3, 4]]

// array[0][3] = 3
// array[0][4] = 4
[{a: 1, b: {c: 2}}]
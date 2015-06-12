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
  // create new object to push to children array
  var newTree = new Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target){
  var searchNode = this,
      found = false;
  // checks parent for target
  if (_.contains(searchNode, target) === true) {
    return true;
  }
  // recursive function to traverse tree
  var search = function(something) {
    // iterate over children's array
    _.each(searchNode.children, function(child, index) {
      // checks if target is found
      if (child.value === target) {
        return found = true;
      } else {
        // redefines to sub-children
        searchNode = child;
        search();
      }
    })
  }

  search();
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


// var parent = {value : "parent", 
//   [{value: "first child", [{value: "1st GC"}]}, {value: "second child"}]
// }
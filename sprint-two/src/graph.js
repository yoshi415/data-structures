

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  var newNode = new GraphNode(node);
  this.storage[node] = newNode;
};

Graph.prototype.contains = function(node){
  if (node in this.storage){
    return true;
  }
  else {
    return false;
  }
};

Graph.prototype.removeNode = function(node){
  for (var node in this.storage) {
    delete this.storage[node];
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var GraphNode = function(value){
   this.value = value;
   this.edges = [];
 }


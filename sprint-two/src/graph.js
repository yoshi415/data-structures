

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
  if (this.storage[fromNode].edges.indexOf(toNode) > -1) {
    return true;
  }
  else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edges.push(toNode);
  this.storage[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromArray = this.storage[fromNode].edges
      toArray = this.storage[toNode].edges,
      fromIndex = toArray.indexOf(fromNode),
      toIndex = fromArray.indexOf(toNode);
  fromArray.splice(fromIndex, 1);
  toArray.splice(toIndex, 1)
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.storage, function(value, key) {
    cb(key)
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var GraphNode = function(node){
   // this.value = value;
   this.edges = [];
 }


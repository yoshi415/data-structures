var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, val){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var tuple = [key, val];
  //var headOfHash = new 
  if (!this._storage[i]) {
    this._storage[i] = [];
  }
  this._storage[i].push(tuple);
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var result = null;
  _.each(this._storage[i], function(subArray) {
    if (subArray[0] === key) {
      result = subArray[1];
    }
  })
  return result;
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  _.each(this._storage[i], function(subArray) {
    if (subArray[0] === key) {
      subArray[1] = null;
    }
  })
};

// var HashTable = function(){
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };

// HashTable.prototype.insert = function(key, val){
//   var i = getIndexBelowMaxForKey(key, this._limit);
//   var tuple = [key, val];
//   //var headOfHash = new 
//   if (!this._storage[i]) {
//     this._storage[i] = new LinkedHashList(tuple);
//   } else {
//     if (this._storage[i].next === null)
//       this._storage[i].next = new HashNode(tuple);
//   }
// };

// HashTable.prototype.retrieve = function(key){
//   var i = getIndexBelowMaxForKey(key, this._limit);
//   return this._storage[i].value[1];
// };

// HashTable.prototype.remove = function(key){
//   var i = getIndexBelowMaxForKey(key, this._limit);
//   this._storage[i].value[1] = null;
// };

// var LinkedHashList = function(tuple) {
//   var list = {};

//   list.head = null;
//   list.tail = null;
//   list.value = tuple;


//   return list;
// }

// var HashNode = function(tuple) {  
//   var node = {};

//   node.value = tuple;
//   node.next = null;

//   return node;
// }



/*
 * Complexity: What is the time complexity of the above functions?
 */

// this._storage = [{first linked, {second hash}}, ]
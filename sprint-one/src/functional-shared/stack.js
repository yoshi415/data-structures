var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.count = 0;
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {};

stackMethods.push = function(val){
  this.count++;
  this[this.count] = val;
}

stackMethods.pop = function(){
  if (this.count >= 1){
    var temp = this[this.count];
    delete this[this.count];
    this.count--;
    return temp;
  }
}

stackMethods.size = function(){
  return this.count;
}


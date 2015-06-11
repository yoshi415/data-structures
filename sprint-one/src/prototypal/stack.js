var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stacker = Object.create(stackMethods);
  stacker.size = 0;
  return stacker;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.size++;
  this[this.size] = val;
}

stackMethods.pop = function() {
  if(this.size >= 1){
    var temp = this[this.size];
    delete this[this.size];
    this.size--;
    return temp;
  }
}
stackMethods.size = function() {
  return this.size;
}
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stacker = Object.create(Stack.stuff);
  stacker.size = 0;
  return stacker;
};

var stackMethods = {};

stackMethods.push = function(val) {

}

stackMethods.pop = function() {

}
stackMethods.size = function() {
  return this.size;
}
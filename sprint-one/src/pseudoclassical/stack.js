var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
};

Stack.prototype.push = function(val){
  this.count++;
  this[this.count] = val;
};

Stack.prototype.pop = function() {
  if (this.count >= 1) {
    var temp = this[this.count];
    delete this[this.count];
    this.count--;
    return temp;
  }
};

Stack.prototype.size = function() {
  return this.count;
};



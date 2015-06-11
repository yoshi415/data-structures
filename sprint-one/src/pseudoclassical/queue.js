var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.start = 1;
  this.end = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(val) {
  this.start++;
  this.end++;
  this.count++;
  this[this.end] = val;
}

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    if (this.end >=1) {
      var temp = this[this.start - this.end];
      delete this[this.start - this.end];
      this.start++;
      this.count--;
      return temp
    }
  }
}

Queue.prototype.size = function() {
  return this.count;
}
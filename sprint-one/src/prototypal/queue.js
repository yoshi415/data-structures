var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queuer = Object.create(queueMethods);
  queuer.count = 0;
  queuer.start = 1;
  queuer.end = 0;
  return queuer;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.end++;
  this.start++
  this.count++;
  this[this.end] = val;
}

queueMethods.dequeue = function() {
  if (this.count > 0) {
    if (this.end >= 1) {
      this.count--
      var temp = this[this.start - this.end];
      delete this[this.start - this.end];
      this.start++
      return temp;
    }
  }
}

queueMethods.size = function() {
  return this.count;
}
var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.end = 0;
  storage.start = 1;
  storage.count = 0;
  _.extend(storage, queueMethods);
  return storage;

};

var queueMethods = {};

queueMethods.enqueue = function(val){
  this.end++;
  this.start++;
  this.count++;
  this[this.end] = val;
};

queueMethods.dequeue = function(){
  if (this.count > 0) {
    this.count--; 
    if (this.end >= 1){
      var temp = this[this.start - this.end];
      delete this[this.start - this.end];
      this.start++;
      return temp;
    }
  }
};

queueMethods.size = function(){
 
  return this.count;
};



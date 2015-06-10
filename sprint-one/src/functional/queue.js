var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var end = 0; // 5
  var start = 1; // 6
  someInstance.enqueue = function(value){
    // adds 1 to end & start
    end++;
    start++;
    // stores value at current number of end
    storage[end] = value;
  };

  someInstance.dequeue = function(){
    if (end >= 1) {
      var temp = storage[start - end]
      delete storage[start - end]
      start++;
      
      return temp;
    }
  };

  someInstance.size = function(){
    var count = 0;
    for (var key in storage) {
      count++
    }
    return count;
  };

  return someInstance;
};

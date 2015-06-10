var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  someInstance.push = function(value){
    size++;
    storage[size] = value;

  };

  someInstance.pop = function(){
    if (size >= 1) {
      var temp = storage[size];
      delete storage[size];
      size--;
      return temp;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
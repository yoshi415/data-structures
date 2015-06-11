var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // adds value to end of list
    // update list.tail
    // update previous node.next to added node
    if (this.tail === null) {
      // if list is completely empty
      // assign tail to new object 
      this.tail = new Node(value);
      // head and tail are the same
      this.head = this.tail;
    } else {
      // if list has nodes
      // assign new object to 
      this.head.next = new Node(value);
      this.tail = this.head.next;
    }
  };

  list.removeHead = function(){
    // store value in temp variable
    // delete node from start (head) of list
    // return temp
    var temp = this.head;
    delete this.head;
    this.head = temp.next; 
    return temp;
  };

  list.contains = function(target){
    // loop over nodes and returns boolean if value exists
    for (var key in this) {
      
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

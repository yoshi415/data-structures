var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // adds value to end of list
    // update list.tail
    // update previous node.next to added node
    var newNode = new Node(value);
    if (this.tail === null) {
      // if list is completely empty
      // assign tail to new object 
      this.head = this.tail = newNode;
      // head and tail are the same
    } else {
      // if list has nodes
      // assign new object to 
      this.tail = this.head.next = newNode;
    }
  };

  list.removeHead = function(){
    // store value in temp variable
    // delete node from start (head) of list
    // return temp
    var temp = this.head;
    delete this.head;
    this.head = temp.next; 
    return temp.value;
  };

  list.contains = function(target){
    // check if head node has target value
    var test,
        //redefine head to variable search node
        searchNode = this.head;
    if (this.head.value === target){
      test = true;
    }
    //function to search each following node
    var search = function() {
      //base case - stops at null
      if (searchNode.value === target) {
        return test = true;
      } 
      else if (searchNode.next === null) {
        return test = false;
      }
      else {
        //recursive search
        searchNode = searchNode.next;
        search();
      }
    };
    search();
    return test;
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

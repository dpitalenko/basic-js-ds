//const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newItem = new ListNode(value);
    if (!this.head) this.head = newItem;
    else this.tail.next = newItem;
    this.tail = newItem;
    //this.elements[this.tail] = value;
  }

  dequeue() {
    const deletedItem = this.head;
    this.head++;  
    this.head = deletedItem.next;
    //delete this.elements[this.head];
    //this.tail--;
    return deletedItem.value;
  }
}

module.exports = {
  Queue
};

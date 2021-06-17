import SingleNode from "./SingleNode";

// * LinkedList are useful when we need to add or remove items from the begening of the list.
export default class LinkedList<A> {

  public head: SingleNode<A> | null;
  public tail: SingleNode<A> | null;
  public length: number;

  constructor(value: A) {
    const newNode = new SingleNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  /** Creates a new SingleNode which is added to the end */
  push(value: A) {
    const newNode = new SingleNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  /** Removed the last node from the list and returns it */
  pop() {
    if (!this.head) return null;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next!;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  /** Creates a new SingleNode which is added to the beginning */
  unshift(value: A) {
    const newNode = new SingleNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  /** Removes the first node from the list and returns it */
  shift() {
    if (!this.head) return null;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  /** Gets the node that is at a particular index */
  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp!.next;
    }
    return temp;
  }
  /** Updates the node that is at a particular index */
  set(index: number, value: A) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  /** Creates a new SingleNode which is inserted in a specific index */
  insert(index: number, value: A) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const newNode = new SingleNode(value);
    const before = this.get(index - 1);
    const after = before!.next;
    before!.next = newNode;
    newNode.next = after;
    this.length++;
    return this;
  }
  /** Deletes the node which is at a particular index and returns it */
  remove(index: number) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    const before = this.get(index - 1);
    const temp = before!.next;
    before!.next = temp!.next;
    temp!.next = null;
    this.length--;
    return temp;
  }
  /** Reverses the linked list */
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp!.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp!.next;
      temp!.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

import DoublyNode from './DoublyNode';

export default class DoublyLinkedList<A> {

  public head: DoublyNode<A> | null;
  public tail: DoublyNode<A> | null;
  public length: number;

  constructor(value: A) {
    const newNode = new DoublyNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  /** Creates a new DoublyNode which is added to the end */
  push(value: A) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /** Removed the last node from the list and returns it */
  pop() {
    if (this.length === 0) return null;
    let temp = this.tail!;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev!;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
  /** Creates a new DoublyNode which is added to the beginning */
  unshift(value: A) {
    const newNode = new DoublyNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  /** Removes the first node from the list and returns it */
  shift() {
    if (this.length === 0) return null;
    let temp = this.head!;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  /** Gets the node that is at a particular index */
  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp!.next;
      }
    } else {
      let temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp!.prev;
      }
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
    const newNode = new DoublyNode(value);
    const before = this.get(index - 1);
    const after = before!.next;
    before!.next = newNode;
    newNode.next = after;
    newNode.prev = before;
    after!.prev = newNode;
    this.length++;
    return this;
  }
  /** Deletes the node which is at a particular index and returns it */
  remove(index: number) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    const temp = this.get(index);
    temp!.prev!.next = temp!.next;
    temp!.next!.prev = temp!.prev;
    temp!.next = null;
    temp!.prev = null;
    this.length--;
    return temp;
  }
}
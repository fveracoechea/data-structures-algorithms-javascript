import SingleNode from './SingleNode';


export default class Queue<A> {
  public first: SingleNode<A> | null;
  public last: SingleNode<A> | null;
  public length: number;

  constructor(value: A) {
    const newNode = new SingleNode(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
  /** Adds a new node to the beginning of the Queue */
  enqueue(value: A) {
    const newNode = new SingleNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  /** Removes the first item in the Queue */
  dequeue () {
    if (this.length === 0) return null;
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first!.next;
      temp!.next = null;
    }
    this.length--;
    return temp;
  }
}
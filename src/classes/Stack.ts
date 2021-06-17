import SingleNode from './SingleNode';


export default class Stack<A> {
  public top: SingleNode<A> | null;
  public length: number;

  constructor(value: A) {
    this.top = new SingleNode(value);
    this.length = 1;
  }
  /** Creates a new SingleNode which is added to the TOP */
  push(value: A) {
    const newNode = new SingleNode(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  /** Removes the first node from the stack and returns it */
  pop() {
    if (this.length === 0) return null;
    let temp = this.top;
    this.top = this.top!.next;
    temp!.next = null;
    this.length--;
    return temp;
  }
} 
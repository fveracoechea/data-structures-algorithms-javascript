export default class DoublyNode<A> {
  public value: A;
  public next: DoublyNode<A> | null;
  public prev: DoublyNode<A> | null;

  constructor(value: A) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
export default class SingleNode<A> {
  public value: A;
  public next: SingleNode<A> | null;

  constructor(value: A) {
    this.value = value;
    this.next = null;
  }
}
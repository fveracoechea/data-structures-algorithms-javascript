export default class TreeNode<A> {
  public value: A;
  public left: TreeNode<A> | null;
  public right: TreeNode<A> | null;

  constructor(value: A) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
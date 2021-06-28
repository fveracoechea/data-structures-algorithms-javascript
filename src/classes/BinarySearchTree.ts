import TreeNode from "./TreeNode";

export default class BinarySearchTree<A> {
  public root: TreeNode<A> | null;

  constructor (value?: A) {
    if (value) {
      const newNode = new TreeNode(value);
      this.root = newNode;
    } else {
      this.root = null;
    }
  }

  /** Creates a new TreeNode which is inserted in the tree */
  insert(value: A) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {

      if (newNode.value === temp.value) return this;

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right
      }
      
    }
  }
  
  /** Determines whether the tree includes a certain element, returning true or false as appropriate. */
  contains(value: A) {
    if (!this.root) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left!;
      } else if (value > temp.value) {
        temp = temp.right!;
      } else if (value === temp.value) {
        return true;
      }
    }
    return false;
  }
}
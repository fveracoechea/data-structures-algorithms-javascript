import bigOArrays from './BigO/arrays';
import LinkedList from './classes/LinkedList';

// bigOArrays();

const myLinkedList = new LinkedList(0);

// console.log('----- PUSH -----')
// console.log(myLinkedList.push(4));

// console.log('----- POP -----');
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());
// console.log(myLinkedList);

// console.log('----- UNSHIFT -----');
// console.log(myLinkedList.push(6).push(9).push(7));
// console.log(myLinkedList.unshift(4));

// console.log('----- SHIFT -----');
// console.log(myLinkedList.push(2));
// console.log(myLinkedList.shift());
// console.log(myLinkedList);

// console.log('----- GET -----');
// console.log(myLinkedList.push(1).push(2).push(3));
// console.log(myLinkedList.get(-2));
// console.log(myLinkedList.get(12));
// console.log(myLinkedList.get(2));

console.log('----- SET -----');
console.log(myLinkedList.push(1).push(2).push(3));
console.log(myLinkedList.set(-2, 77));
console.log(myLinkedList.set(12, 77));
console.log(myLinkedList.set(2, 77));
console.log(myLinkedList.get(2));
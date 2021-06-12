// https://www.bigocheatsheet.com/

// Big O Arrays
export default function bigOArrays () {

  const array = [11, 2, 23, 7];

  // * push and pop are O(1) operations
  array.push(12);
  array.pop();

  console.log(array);

  // * both are O(n) because they have to reinxed the array
  array.shift();
  array.unshift(11);

  console.log(array);

  // * splice is also O(n) because it reindexs the arry
  array.splice(1, 0, 17);

  console.log(array);
}
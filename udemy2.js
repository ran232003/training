//from trees

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
  add(child) {
    let data = new Node(child);
    this.children.push(data);
  }
  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    let array = [];
    array.push(this.root);
    while (array.length > 0) {
      let n = array.shift(); //remove first element in the array
      array = [...array, ...n.children];
      // console.log(n);
      fn(n);
    }
  }
  traverseDF(fn) {
    let array = [];
    array.push(this.root);
    while (array.length > 0) {
      let n = array.shift(); //remove first element in the array
      array = [...n.children, ...array];
      //console.log(n);
      fn(n);
    }
  }
}

//breadth traversal חיפוש לרוחב
//sol: create an array with the root inside.
//while array is not empty: remove first element, add to the array the children of the element that is out, activate the function on that element
const testBreadth = () => {
  const t = new Tree();
  const n1 = new Node(12);
  t.root = n1;
  n1.add(16);
  n1.add(20);
  n1.children[0].add(40);
  t.traverseBF((node) => {
    node.data = node.data + 10;
  });
  console.log(t);
  console.log(n1);
  console.log(n1.children[0]);
};
//testBreadth();

//depth first
//sol: same as BF but here we will put the children not at the back of the array but first

const testDF = () => {
  const t = new Tree();
  const n1 = new Node(12);
  t.root = n1;
  n1.add(16);
  n1.add(20);
  n1.children[0].add(40);
  n1.children[0].add(70);
  n1.children[1].add(90);
  t.traverseDF((node) => {
    node.data = node.data + 10;
  });
  console.log(t);
  console.log(n1);
  console.log(n1.children[0]);
};
//testDF();

// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  console.log("s");
  if (!root) {
    return [0];
  }
  let array = [root, "flag"];
  let arrayLevel = [0];
  let index = 0;
  while (array.length > 0) {
    let node = array.shift();
    if (node === "flag") {
      index++;
      arrayLevel[index] = 0;
      if (array.length !== 0) {
        array.push("flag");
      }
    } else {
      arrayLevel[index] = arrayLevel[index] + 1;
      array = [...array, ...node.children];
    }
  }
  if (arrayLevel[arrayLevel.length - 1] === 0) {
    arrayLevel.pop();
  }
  return arrayLevel;
}
const testLevelWidth = () => {
  const t = new Tree();
  const n1 = new Node(12);
  t.root = n1;
  n1.add(16);
  n1.add(20);
  n1.children[0].add(40);
  n1.children[0].add(70);
  n1.children[1].add(90);
  console.log(levelWidth(n1));
  //   console.log(t);
  //   console.log(n1);
  //   console.log(n1.children[0]);
};
testLevelWidth();

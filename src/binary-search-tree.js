const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree { 
  constructor() { 
  this.root = null; 
  } 
  
  root() { 
  return this.root 
  } 
  
  add(data) { 
  class Node { 
  constructor(data) { 
  this.data = data; 
  this.left = null; 
  this.right = null; 
  } 
  } 
  let nodeNew = new Node(data); 
  
  if (this.root === null) { 
  this.root = nodeNew; 
  } else { 
  this.addNode(this.root, nodeNew); 
  } 
  } 
  addNode(node, nodeNew) { 
  if (nodeNew.data < node.data) { 
  if (node.left === null) { 
  node.left = nodeNew; 
  } else { 
  this.addNode(node.left, nodeNew); 
  } 
  } else { 
  if (node.right === null) { 
  node.right = nodeNew; 
  } else { 
  this.addNode(node.right, nodeNew); 
  } 
  } 
  } 
  
  has(data) { 
  
  } 
  
  find(data) { 
  
  } 
  
  remove(data) { 
  
  } 
  
  min() { 
  
  } 
  
  max() { 
  
  } 
  }

module.exports = {
  BinarySearchTree
};
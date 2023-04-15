const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node { 
  constructor(data) { 
  this.data = data; 
  this.left = null; 
  this.right = null; 
  } 
  } 
class BinarySearchTree { 
  constructor() { 
  this.root = null; 
  } 
  
  root() { 
  return this.root 
  } 
  
  add(data) { 

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
    let currNode = this.root; 
    while (currNode !== null) { 
    if (currNode.data === data) { 
    
    return true; 
    } else if (data < currNode.data) { 
    currNode = currNode.left; 
    } else { 
    currNode = currNode.right; 
    } 
    } 
    return false; 
    } 
  
  find(data, node = this.root) { 

    if (node === null) { 
    return null; 
    } else if (data < node.data) { 
    return this.search(data, node.left); 
    } else if (data > node.data) { 
    return this.search(data, node.right); 
    } else { 
    return node; 
    } 
    }
  
  
  
    remove(data) { 
      this.root = this.removeNode(this.root, data); 
      } 
      removeNode(node, data) { 
      if (node === null) { 
      return null; 
      } else if (data < node.data) { 
      node.left = this.removeNode(node.left, data); 
      return node; 
      } else if (data > node.data) { 
      node.right = this.removeNode(node.right, data); 
      return node; 
      } else { 
      if (node.left === null && node.right === null) { 
      node = null; 
      return node; 
      } 
      if (node.left === null) { 
      node = node.right; 
      return node; 
      } else if(node.right === null) { 
      node = node.left; 
      return node; 
      } 
      let newNode = this.min(node.right); 
      node.data = newNode.data; 
      node.right = this.removeNode(node.right, newNode.data); 
      return node; 
      } 
      }
  

  
  min(node = this.root) { 
  if(node.left === null){
    return node;
  }else{
    return this.min(node.left);
  }
  } 
  
  max(node = this.root) { 
    if(node.right === null){
      return node;
    }else{
      return this.max(node.right);
    }
  } 
  }
module.exports = {
  BinarySearchTree
};
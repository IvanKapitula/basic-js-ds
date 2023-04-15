const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree { 
  constructor() { 
  this.value = null; 
  } 
  
  root() { 
  return this.value 
  } 
  
  add(data) { 

  let nodeNew = new Node(data); 
  
  if (this.value=== null) { 
    this.value = nodeNew; 
  } else { 
  this.addNode(this.value, nodeNew); 
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
    let currNode = this.value; 
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
  
  find(data, node = this.value) { 

    if (node === null) { 
    return null; 
    } else if (data < node.data) { 
    return this.find(data, node.left); 
    } else if (data > node.data) { 
    return this.find(data, node.right); 
    } else { 
    return node; 
    } 
    }
  
  
  
    remove(data) { 
      this.value = this.removeNode(this.value, data); 
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
  

  
  min(node = this.value) { 
  if(node.left === null){
    return node.data;
  }else{
    return this.min(node.left);
  }
  } 
  
  max(node = this.value) { 
    if(node.right === null){
      return node.data;
    }else{
      return this.max(node.right);
    }
  } 
  }
module.exports = {
  BinarySearchTree
};
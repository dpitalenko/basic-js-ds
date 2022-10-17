const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  root() {
    return !this.root ? null : this.root;
  }

  add(data) {
    this.root = addItem(this.root, data);

    function addItem(node, data) {
      if(!node) return new Node(data); //если нет узла, то создаем его

      if(node.data == data) return node; // если узел есть и его значени равно новому, то ничего не делаем

      if(data < node.data) node.left = addItem(node.left, data); // если новое значение меньше чем, значение в текущем узле, то отпраляем значение в левый узел
      else node.rigth = addItem(node.rigth, data); // иначе в правый

      return node;
    }
  }

  has(data) {
    return search(this.root, data);

    function search(node, data) {
      if(!node) return false; //если узла нет, то возвращаем false

      if(node.data == data) return true; //если нашла нужный узел, то возвращаем ttur

      return data < node.data ? search(node.left, data) : search(node.rigth, data); //если искомое значение меньше, чем текущий узел, то ищем в левом узле, иначе в правом
    }
  }

  find(data) {
    return search(this.root, data);

    function search(node, data) {
      if(!node) return null;

      if(node.data == data) return node;

      return data < node.data ? search(node.left, data) : search(node.rigth, data); 
    }
  }

  remove(data) {
    this.root = removeNode(this.root, data)

    function removeNode(node, data) {
      if(!node) return null; //если нет узла, то возвращаем null

      if(data < node.data) { //определяем в какую сторону идти
        node.left = removeNode(node.left, data);
        return node;
      } else if(data > node.data) {
        node.rigth = removeNode(node.rigth, data);
        return node;
      } else {
        if(!node.left && !node.rigth) return null;

        if(!node.left) {
          //node = node.rigth;
          return node.rigth;
        }

        if(!node.rigth) {
          //node = node.left;
          return node.left;
        }

        let minRigth = node.rigth;
        while(minRigth.left) {
          minRigth = minRigth.left;
        }
        node.data = minRigth.data;

        node.rigth = removeNode(node.rigth, minRigth.data);

        return node;
      }
    }
  }

  min() {
    if(!this.root) return;

    let node = this.root;
    while(node.left) node = node.left;

    return node.data;
  }

  max() {
    if(!this.root) return;

    let node = this.root;
    while(node.rigth) node = node.rigth;

    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};
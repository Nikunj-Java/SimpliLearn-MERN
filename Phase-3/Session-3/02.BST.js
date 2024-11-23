
class  Node{

    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}


class  BinaryTree{

    constructor(){
        this.root=null;
    }


    //in-Order Traversal
    inorderTraversal(node){
        if(node){
            this.inorderTraversal(node.left);
            console.log("Visited Root node");
            console.log(node.data);
            this.inorderTraversal(node.right);
        }


    }

}


const tree=new BinaryTree();

//create Binary Tree;
tree.root= new Node(1);
tree.root.left=new Node(2);
tree.root.right=new Node(3);
tree.root.left.left=new Node(4);
tree.root.left.right=new Node(5); 


console.log("In order traversal");

tree.inorderTraversal(tree.root);

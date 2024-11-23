
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
            this.inorderTraversal(node.left);  //left
            console.log("Visited Root node");
            console.log(node.data);            //root node
            this.inorderTraversal(node.right); //right node
        }
    }
    //pre-order traversal
    preOrderTraversal(node){
        if(node){
            console.log(node.data);          //root node
            console.log("Visited Root node");
            this.preOrderTraversal(node.left); //left node
            this.preOrderTraversal(node.right);//right node
        }
    }

    //post  order traversal
    postOrderTraversal(node){
        if(node){
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.data);
            console.log("Visited Root Node");
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


                             //1
                //           /  \
                //          2     3
                //         /  \
                //        4    5
console.log("Pre-Order Traversal");
tree.preOrderTraversal(tree.root);

console.log("Post-order Traversal");
tree.postOrderTraversal(tree.root);

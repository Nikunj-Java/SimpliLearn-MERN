

class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
        this.height=1;
    }
}

class AVLTree{

    constructor(){
        this.root=null;
    }

    getHeight(node){
        return node ? node.height : 0;
    }

    //get the Balance Factor
    getbalanceFactor(node){
        return node? this.getHeight(node.left)-this.getHeight(node.right): 0
    }

    //rigth rotate
    rightRotate(y){
        const x = y.left;
        const T = x.right; //preserved node without rotation 

        x.right = y;
        y.left = T;

        //update the height 
        y.height= Math.max(this.getHeight(y.left),this.getHeight(y.right)+1);
        x.height= Math.max(this.getHeight(x.left),this.getHeight(x.right)+1);

        return x;

    }


    //left rotate
    leftRotate(x){
        const y = x.right;
        const T = y.left;

         
        y.left=x;
        x.right=T;

        //update the height 
        x.height= Math.max(this.getHeight(x.left),this.getHeight(x.right)+1);
        y.height= Math.max(this.getHeight(y.left),this.getHeight(y.right)+1);
        

        return y;

    }


    //insert data

    insert(node,data){
        if(node===null){
            return new Node(data);
        }
        if(data<node.data){
            node.left=this.insert(node.left,data);
        }else if(data>node.data){
            node.right=this.insert(node.right,data);
        }else{
            return node;
        }
        //update the hieght of node
    node.height=1 +Math.max(this.getHeight(node.left),this.getHeight(node.right));

        //get the balance factor
        const balance= this.getbalanceFactor(node);

        //left left case
        if(balance>1 && data <node.left.data){
            return this.rightRotate(node);
        }

        //right right case
        if(balance < -1 && data > node.right.data){
            return this.leftRotate(node);
        }

        //left right case
        if(balance >1  && data > node.left.data){
            node.left=this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        //right left case
        if(balance < -1  && data < node.right.data){
            node.right=this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }

    //wrapper for insertion
    insertNode(data){
        this.root=this.insert(this.root,data);
    }


    printTree(node,space=0,levelGap=5){
        if(node===null) return;

        space +=levelGap;

        this.printTree(node.right,space);


        console.log(" ".repeat(space -levelGap)+node.data);

        //left child
        this.printTree(node.left,space);
    }

}


//driver method
const avl=new AVLTree();

avl.insertNode(10);
avl.insertNode(20);
avl.insertNode(30);
avl.insertNode(40);
avl.insertNode(50);
avl.insertNode(25);

console.log("AVL Tree Structure: ");
avl.printTree(avl.root);

//Node Class with Previous and Next Value to Store the Address
class Node{
    constructor(data){
        this.data=data;
        this.next=null; //points to next node
        this.prev=null; //points to previous Node
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null; //list is empty
        this.tail=null; //list is empty
    }
    //insertion of data
    append(data){
        const newNode= new Node(data);
        //if the list is empty , the new node is head and tail
        if(this.head===null){
            this.head=this.tail=newNode;
        }else{
            //if the list is not empty add the node to the end
            this.tail.next=newNode //tail's next points to the new node
            newNode.prev=this.tail //newnode's prev point to current tail
            this.tail=newNode; //updated thetail to the new node
        }

    }

    //printing Forward
    printListForward(){
        let current= this.head;
        let result=[];

        while(current !=null){
            result.push(current.data);
            current=current.next;
        }
        console.log(result.join('->'));

    }

    //printing Backward
    printListBackward(){
        let current= this.tail;
        let result=[];

        while(current !=null){
            result.push(current.data);
            current=current.prev;
        }
        console.log(result.join('->'));

    }
}

const doubleList=new DoublyLinkedList();
doubleList.append(10);
doubleList.append(20);
doubleList.append(30);
doubleList.append(40);

console.log("List in Forward: ");
doubleList.printListForward();  //output===>>> 10->20->30->40
console.log("List in Backward: ");
doubleList.printListBackward();  //output===>>> 10<-20<-30<-40

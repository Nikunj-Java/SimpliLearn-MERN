class Node{
    constructor(data){
        this.data=data; //value of the node
        this.next=null; //link to the next node
    }
}

class LinkedList{
    constructor(){
        this.head=null; //starting point of the list is Head

    }

    //append the data with a given data in the list

    append(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode; //if the list is empty the new node is the head
        }else{
            let current=this.head;
            while(current.next){
                //traverse to the last node
                current=current.next;
            }
            current.next=newNode;
        }
    }

    //delete Data in Linked List

    delete(data){
        if(this.head===null){
            console.log("The List is Empty");
            return;
        }

        //delete the node is Head node
        if(this.head.data===data){
            this.head=this.head.next;
            return;
        }

        let current=this.head;
        //traverse the list to find the node before the one to delete
        while(current.next !==null && current.next.data !==data){
            current=current.next;
        }

        if(current.next === null){
            console.log("Data Found in the List");
            return;
        }

        //delete the node by skipping it
        current.next=current.next.next;

    }
    printList(){
        let current=this.head;
        let result=[];
        while(current){
            result.push(current.data); // adding each node data to result aaray
            current=current.next; //move to the next node
        }
        console.log(result.join('->')); //printing the  list
    }

}

//main method

const list=new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

console.log("Before Deletion");
list.printList();

list.delete(20);

console.log("After Deletion");
list.printList();

list.delete(100);

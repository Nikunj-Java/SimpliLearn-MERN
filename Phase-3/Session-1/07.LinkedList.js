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

list.printList();


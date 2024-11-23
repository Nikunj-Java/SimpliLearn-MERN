class Queue{

    constructor(){
        this.items=[];
    }

    //add an element
    enqueue(element){
        this.items.push(element);
    }

    //remove an element
    dequeue(){
        if(this.isEmpty()){
            return "Queue is Empty";
        }
        return this.items.shift();
    }

    //first element in a queue
    front(){
        if(this.isEmpty()){
            return "Queue is Empty";
        }
        return this.items[0];
    }

    size(){
        return this.items.length;
    }

    printQueue(){
        return this.items.join("-");
    }

    isEmpty(){
        return this.items.length===0;  ///returns you true if the queue is empty
    }
}


//driver method 


const queue= new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log("queue: ",queue.printQueue()); //10-20-30-40

console.log("Dequeue: ",queue.dequeue()); //delete 10

console.log("Front: ",queue.front()); //20-30-40

console.log("Is Empty: ",queue.isEmpty()); //false

console.log("Queue Size: ",queue.size()); //3

console.log("queue: ",queue.printQueue()); //20-30-40
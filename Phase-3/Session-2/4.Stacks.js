class Stack{
    constructor(){
        this.items=[];
    }

    //push method
    push(item){
        this.items.push(item);
    }

    //pop method
    pop(){
        if(this.isEmpty()){
            console.log("Stack is Empty");
            return null;
        }
        return this.items.pop();
    }

    //peek method
    peek(){
        if(this.isEmpty()){
            console.log("Stack is Empty");
            return null;
        }

        return this.items[this.items.length-1];
    }

    //check is stack is empty
    isEmpty(){
        return this.items.length === 0;
    }

    //return the size of stack
    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.join('<-'));
    }
}

const stack = new Stack();

//insert some elements
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

//print the stack
console.log("Stack after pushes: ");
stack.print();


console.log("Peek at the top item: ",stack.peek());

console.log("Popped item: ",stack.pop());

console.log("Stack after Pop: ");
stack.print();


console.log("Size of stack: ",stack.size());


console.log("Is the Stack is Empty?",stack.isEmpty());


stack.pop();
stack.pop();
stack.pop();

console.log("Is the Stack is Empty?",stack.isEmpty());


 
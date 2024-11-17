class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyCircularLinkedList {
    constructor() {
        this.head = null;
    }

    // Adding new node to the end of the given list
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            // If the list is empty
            this.head = newNode;
            newNode.next = this.head; // creating Circular link
            newNode.prev = this.head; // creating Circular link
        } else {
            const last = this.head.prev;

            // Update links
            last.next = newNode;
            newNode.prev = last;
            newNode.next = this.head;
            this.head.prev = newNode;
        }
    }

    // Display the list (forwards)
    display() {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }

    // Display the list (backwards)
    displayReverse() {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        let current = this.head.prev; // Start from the last node
        const start = this.head.prev;
        do {
            console.log(current.data);
            current = current.prev;
        } while (current !== start);
    }
}

// Example usage
const list = new DoublyCircularLinkedList();
list.append(10);
list.append(20);
list.append(30);

console.log("List in forward order:");
list.display();

console.log("List in reverse order:");
list.displayReverse();

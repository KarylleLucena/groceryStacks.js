class Stack {
    constructor(maxSize = 5) {
        this.items = [];
        this.maxSize = maxSize;
    }

    push(item) {
        if (this.items.length >= this.maxSize) {
            console.log("Stack is full!");
            return;
        }
        this.items.push(item);
        this.print();
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return null;
        }
        let poppedItem = this.items.pop();
        this.print();
        return poppedItem;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log("Stack:", this.items);
    }
}

let groceryStack = new Stack();

// Get 5 grocery items from the user
for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item ${i + 1}:`);
    if (item) {
        groceryStack.push(item);
    } else {
        console.log("Invalid input. Skipping this item.");
    }
}

// Example operations
console.log("Top item:", groceryStack.peek());
groceryStack.pop();
groceryStack.push("Milk");
  

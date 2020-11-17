class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode - tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }

        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            } else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item) {
        //is the list empty?
        if (!this.head) {
            return null;
        }
        //is the item to remove the first item?
        if (this.head === item) {
            this.head = this.head.next;
            return;
        }

        //set the currentNode as the first node
        let currentNode = this.head;
        let previousNode = this.head;

        while (currentNode !== null && currentNode.value !== item) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode === null) {
            console.log("Item not found");
            return;
        }
        previousNode.next = currentNode.next;
    }
}

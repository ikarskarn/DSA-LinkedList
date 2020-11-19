class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        //insert into first node if empty
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = new _Node(item, null);
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
        if (!this.head) {
            console.log("No Such Item");
            return;
        }

        if (this.head === item) {
            this.head = this.head.next;
            return;
        }

        let currentNode = this.head;
        let previousNode = null;

        while (currentNode.value !== item && currentNode.next !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode.next === null) {
            console.log("no such item");
            return;
        }
        previousNode.next = currentNode.next;
    }
}

module.exports = LinkedList;

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

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
        }
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = new _Node(item, null);
    }

    insertBefore(itemFind, item) {
        if (!this.head) {
            return "There is nothing in the list";
        } else if (this.head.value === itemFind) {
            this.insertFirst(item);
        }

        let currentNode = this.head;
        let previousNode = null;
        while (currentNode.next.value !== itemFind) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        currentNode.next = new _Node(item, currentNode.next);
    }

    insertAfter(itemFind, item) {
        if (!this.head) {
            return "There is nothing in the list";
        } else if (this.head.value === itemFind) {
            this.head.next = new _Node(item, this.head.next.next);
        }

        let currentNode = this.head;
        while (currentNode.value !== itemFind) {
            currentNode = currentNode.next;
        }
        currentNode.next = new _Node(item, currentNode.next);
    }

    insertAt(nodeNum, item) {
        if (!this.head) {
            return null;
        }

        if (nodeNum === 1) {
            this.insertFirst(item);
            return;
        }

        let currentNode = this.head;
        let currentNum = 1;
        while (currentNum < nodeNum) {
            if (currentNode.next === null && currentNum + 1 !== nodeNum) {
                return console.log("list is not that long");
            }
            currentNode = currentNode.next;
            currentNum++;
        }

        this.insertBefore(currentNode.value, item);
        return;
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
            previousNode.next = null;
        } else {
            previousNode.next = currentNode.next;
        }
        return;
    }

    deleteDuplicates() {
        if (!this.head) {
            console.log("No list");
            return;
        }

        let currentNode = this.head;
        while (currentNode.next !== null) {
            if (currentNode.value === currentNode.next.value) {
                let nxt = currentNode.next;
                currentNode.next = nxt.next;
            }
            if (currentNode.next !== null) currentNode = currentNode.next;
        }
        return;
    }
}

function main() {
    let LL = new LinkedList();
    LL.insertFirst("Marc");
    LL.insertLast("Joe");
    LL.insertLast("Joe");
    LL.insertFirst("Marc");
    LL.insertBefore("Joe", "Bob");
    LL.insertAfter("Bob", "Jan");
    LL.deleteDuplicates();
    display(LL);
}

function display(LL) {
    let lst = LL.head;
    while (lst !== null) {
        console.log(lst.value);
        lst = lst.next;
    }
}

main();

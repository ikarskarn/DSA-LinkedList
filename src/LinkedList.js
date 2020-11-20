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

    insertBefore(itemFind, item) {
        if (!this.head) {
            console.log("No Such Item");
            return;
        }

        if (this.head.value === itemFind) {
            this.insertFirst(item);
            return;
        }

        let currentNode = this.head;
        while (currentNode.next.value !== itemFind && currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        return (currentNode.next = new _Node(item, currentNode.next));
    }

    insertAfter(itemFind, item) {
        if (!this.head) {
            console.log("No Such Item");
            return;
        }

        let currentNode = this.head;
        while (currentNode.value !== itemFind) {
            if (currentNode.next === null) {
                console.log("no such item");
                return;
            }
            currentNode = currentNode.next;
        }

        return (currentNode.next = new _Node(item, currentNode.next));
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
            previousNode.next = null;
        } else {
            previousNode.next = currentNode.next;
        }
        return;
    }
}
function createList(SLL) {
    console.log("CREATING LIST...");
    SLL.insertFirst("Apollo");
    SLL.insertLast("Boomer");
    SLL.insertLast("Helo");
    SLL.insertLast("Husker");
    SLL.insertLast("Starbuck");
    SLL.insertLast("Tauhida");

    SLL.remove("Husker");

    SLL.insertBefore("Boomer", "Athena");

    SLL.insertAfter("Helo", "Hotdog");

    SLL.insertAt(3, "Kat");

    SLL.remove("Tauhida");
    console.log("LIST CREATED!");
}

function display(SLL) {
    console.log("DISPLAY LIST");
    let c = SLL.head;
    while (c !== null) {
        console.log(c.value);
        c = c.next;
    }
}

function size(SLL) {
    let num = 1;
    let currentNode = SLL.head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
        num++;
    }
    return num;
}

function isEmpty(SLL) {
    if (SLL.head === null) {
        return "Empty";
    } else {
        return "Not Empty";
    }
}

function findPreviousItem(SLL, item) {
    if (SLL.head.value === item) {
        return "No value before" + item;
    }

    let currentNode = SLL.head;
    while (currentNode.next.value !== item) {
        currentNode = currentNode.next;
    }

    return currentNode.value;
}

function findLastItem(SLL) {
    let currentNode = SLL.head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
    }
    return currentNode.value;
}

//REVERSE LIST

//3rd from last
function thirdFromLast(SLL) {
    let length = size(SLL);
    let target = length - 3;

    if (target === 1) {
        return SLL.head.value;
    }

    let currentNode = SLL.head;
    let currentNum = 1;
    while (currentNum < target) {
        currentNode = currentNode.next;
        currentNum++;
    }

    return currentNode.next.value;
}

//middle of list
function middleOfList(SLL) {}

function main() {
    let SLL = new LinkedList();
    console.log("THE LIST IS", isEmpty(SLL));
    createList(SLL);
    display(SLL);
    console.log("SIZE: ", size(SLL));
    console.log("THE LIST IS", isEmpty(SLL));
    console.log("THE ITEM BEFORE BOOMER IS", findPreviousItem(SLL, "Boomer"));
    console.log("THE LAST ITEM IS", findLastItem(SLL));
    console.log("REVERSE LIST");
    console.log("3rd from last:", thirdFromLast(SLL));
}

main();

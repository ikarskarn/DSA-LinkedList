class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }

        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }

        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

function main() {
    console.log("START QUEUE");
    let starTrekQ = new Queue();
    isEmpty(starTrekQ);
    createInit(starTrekQ);
    peek(starTrekQ);
    isEmpty(starTrekQ);
    display(starTrekQ);
    starTrekQ.dequeue();
    display(starTrekQ);
}

function peek(que) {
    console.log(que.first);
}

function isEmpty(que) {
    if (!que.first) {
        console.log("Is Empty");
    } else {
        console.log("Is NOT Empty");
    }
}

function display(que) {
    console.log(que.first.value);
}

function createInit(que) {
    que.enqueue("Kirk");
    que.enqueue("Spock");
    que.enqueue("Uhura");
    que.enqueue("Sulu");
    que.enqueue("Checkov");
}

main();

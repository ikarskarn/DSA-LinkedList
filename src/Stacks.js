class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function main() {
    console.log("STACK START");
    let starTrek = new Stack();

    isEmpty(starTrek);
    starTrek.push("Kirk");
    starTrek.push("Spock");
    starTrek.push("McCoy");
    starTrek.push("Scotty");

    peek(starTrek);
    isEmpty(starTrek);
    display(starTrek);

    starTrek.pop();
    console.log("REMOVING TOP OF STACK...");
    display(starTrek);

    is_palindrome("A man, a plan, a canal: Panama");
}

function peek(stk) {
    console.log("PEEK:", stk.top);
}

function isEmpty(stk) {
    if (!stk.top) {
        console.log("IS EMPTY: Empty");
    } else {
        console.log("IS EMPTY: Not Empty");
    }
}

function display(stk) {
    console.log("DISPLAY:", stk.top.data);
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let stk = new Stack();
    // Your code goes here
    console.log("First Pass: ", s);
    for (let j = 0; j < s.length; j++) {
        stk.push(s[j]);
    }
    for (let i = 0; i < s.length; i++) {
        display(stk);
        stk.pop();
    }
}

main();

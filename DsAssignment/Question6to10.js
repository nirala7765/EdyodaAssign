
console.log("*****************************Question6*************************************************")

function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}

function postfixToPrefix(postfix) {
    const stack = [];

    for (let char of postfix) {
        if (!isOperator(char)) {
            stack.push(char);
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const expression = char + operand1 + operand2;
            stack.push(expression);
        }
    }

    return stack.pop();
}

const postfixExpression = "23*5+";
const prefixExpression = postfixToPrefix(postfixExpression);

console.log(`Postfix expression: ${postfixExpression}`);
console.log(`Prefix expression: ${prefixExpression}`);



console.log("*****************************Question7*************************************************")

function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}

function prefixToInfix(prefix) {
    const stack = [];

    for (let i = prefix.length - 1; i >= 0; i--) {
        const char = prefix[i];
        if (!isOperator(char)) {
            stack.push(char);
        } else {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const expression = `(${operand1}${char}${operand2})`;
            stack.push(expression);
        }
    }

    return stack.pop();
}

const prefixExpression1 = "+*23+45";
const infixExpression = prefixToInfix(prefixExpression1);

console.log(`Prefix expression: ${prefixExpression1}`);
console.log(`Infix expression: ${infixExpression}`);




console.log("*****************************Question8*************************************************")

function areBracketsClosed(code) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    
    for (let char of code) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastOpeningBracket = stack.pop();
            const correspondingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
            
            if (lastOpeningBracket !== correspondingOpeningBracket) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

const codeSnippet = "function myFunction() { return [1, 2, (3 + 4)]; }";
const result = areBracketsClosed(codeSnippet);

if (result) {
    console.log("All brackets are closed properly.");
} else {
    console.log("Brackets are not closed properly.");
}






console.log("*****************************Question9*************************************************")


class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

function reverseStack(stack) {
    const auxStack = new Stack();

    while (!stack.isEmpty()) {
        auxStack.push(stack.pop());
    }

    return auxStack;
}

const originalStack = new Stack();
originalStack.push(1);
originalStack.push(2);
originalStack.push(3);
originalStack.push(4);

console.log("Original stack:", originalStack.items);

const reversedStack = reverseStack(originalStack);

console.log("Reversed stack:", reversedStack.items);








console.log("*****************************Question10*************************************************")
class Stack1 {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

class MinStack {
    constructor() {
        this.stack = new Stack1();
        this.minStack = new Stack1();
    }

    push(item) {
        this.stack.push(item);

        if (this.minStack.isEmpty() || item <= this.minStack.peek()) {
            this.minStack.push(item);
        }
    }

    pop() {
        if (!this.stack1.isEmpty()) {
            const poppedItem = this.stack1.pop();

            if (poppedItem === this.minStack.peek()) {
                this.minStack.pop();
            }

            return poppedItem;
        }
    }

    getMin() {
        if (!this.minStack.isEmpty()) {
            return this.minStack.peek();
        }
    }
}

const minStack = new MinStack();
minStack.push(4);
minStack.push(2);
minStack.push(6);
minStack.push(-988);
minStack.push(-93);
minStack.push(0);

console.log("Smallest number:", minStack.getMin());

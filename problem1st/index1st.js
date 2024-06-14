function calculate(num1, num2) {
    function operation(n1, n2, callback) {
        return callback(n1, n2);
    }

    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }

    const additionResult = operation(num1, num2, add);
    const multiplicationResult = operation(num1, num2, multiply);

    console.log(`Addition of ${num1} and ${num2} is: ${additionResult}`);
    console.log(`Multiplication of ${num1} and ${num2} is: ${multiplicationResult}`);
}

// Test the program with different numbers
calculate(8, 3);


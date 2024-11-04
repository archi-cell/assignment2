let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = currentInput;
}

function calculateResult() {
    try {
        const result = eval(currentInput); // Use eval with caution
        currentInput = result.toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}

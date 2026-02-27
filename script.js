let currentInput = '0';
let calculationDone = false;

const displayElement = document.getElementById('current-op');
const scientificKeys = document.getElementById('scientific-keys');

function updateDisplay() {
    displayElement.innerText = currentInput;
}

function appendNumber(num) {
    if (currentInput === '0' || calculationDone) {
        currentInput = num;
        calculationDone = false;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

function appendOperator(op) {
    calculationDone = false;
    currentInput += op;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function deleteDigit() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') currentInput = '0';
    updateDisplay();
}

function toggleScientific() {
    scientificKeys.classList.toggle('hidden');
    scientificKeys.classList.toggle('scientific-active');
}

// Funções Especiais
function appendFunction(fn) {
    currentInput = `${fn}(${currentInput})`;
    calculate();
}

function percentage() {
    currentInput = (eval(currentInput) / 100).toString();
    updateDisplay();
}

function factorial() {
    let n = parseInt(currentInput);
    if (n < 0) return currentInput = "Erro";
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    currentInput = res.toString();
    updateDisplay();
}

function calculate() {
    try {
        // Substitui caracteres para que o eval entenda
        let result = eval(currentInput);
        currentInput = Number.isInteger(result) ? result.toString() : result.toFixed(4).toString();
        calculationDone = true;
        updateDisplay();
    } catch (e) {
        currentInput = "Erro";
        updateDisplay();
    }
}
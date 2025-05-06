const display = document.getElementById("display");

// Function to add numbers or operators to the display
function append(value) {
  display.value += value;
}

// Function to clear the entire display
function clearDisplay() {
  display.value = "";
}

function square() {
  try {
    const currentValue = eval(display.value); 
    const squaredValue = currentValue * currentValue;
    display.value = squaredValue;
  } catch (error) {
    alert("Oops! That input can't be squared.");
    clearDisplay();
  }
}

function calculate() {
  try {
    const result = eval(display.value); 
    display.value = result;
  } catch (error) {
    alert("Invalid math expression. Please try again!");
    clearDisplay();
  }
}

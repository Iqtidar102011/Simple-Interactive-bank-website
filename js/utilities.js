// // get the element by id
// get the value from the Element
// convert string value to a number
function getInputValue(inputId) {
    const InputField = document.getElementById(inputId);
    const inputFieldValueString = InputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    InputField.value = '';
    return inputFieldValue;
}

// get value of previous amounts
function getPreviousAmounts(elementId) {
    const element = document.getElementById(elementId);
    const previousAmountsString = element.innerText;
    const previousAmounts = parseFloat(previousAmountsString);
    return previousAmounts;

}
// set new values 
function setNewAmountsById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
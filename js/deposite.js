
document.getElementById("btn-deposite").addEventListener('click', function () {
    // // get the element by id
    // get the value from the Element
    // convert string value to a number
    const newDeposite = getInputValue("deposite")
    // get value of previous deposite amounts
    const previousDeposite = getPreviousAmounts("deposite_total");

    const totalDeposite = newDeposite + previousDeposite;

    // set the values
    const newDepositeAmount = setNewAmountsById("deposite_total", totalDeposite);

    // get previous balance
    const previousBalance = getPreviousAmounts("balance_total")
    const newBalance = newDeposite + previousBalance;

    // set new balance values
    const newBalanceAmount = setNewAmountsById("balance_total", newBalance);

})
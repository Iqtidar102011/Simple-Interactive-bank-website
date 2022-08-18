document.getElementById("btn-withdraw").addEventListener('click', function () {
    // // get the element by id
    // get the value from the Element
    // convert string value to a number
    const newWithdraw = getInputValue("withdraw");
    // get value of previous withdraw amounts
    const previousWithdraw = getPreviousAmounts("withdraw_total");

    const totalWithdraw = newWithdraw + previousWithdraw;
    // set the values
    const newWithdrawAmount = setNewAmountsById("withdraw_total", totalWithdraw);
    // get previous balance

    const previousBalance = getPreviousAmounts("balance_total")
    if (newWithdraw > previousBalance) {
        alert('not enough balance , please deposite first');
        return;
    }
    const newBalanceTotal = previousBalance - newWithdraw;

    // set new balance
    const newBalanceAmount = setNewAmountsById("balance_total", newBalanceTotal);

})
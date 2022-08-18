// step-1: add event listener to the submit button
document.getElementById("btn-submit").addEventListener('click', function () {
    // step2 : get the email address from the email input field and password 
    const emailInput = document.getElementById("user_email").value;
    const passwordInput = document.getElementById('user_password').value;

    // normally do not verify email password in the client side .. normally its to be done in server side(will learn later)
    if (emailInput === 'simple@bank.com' && passwordInput === 'simplebank') {
        window.location.href = 'bank.html';
    }
    else {
        alert('email and password does not match')
    }



})

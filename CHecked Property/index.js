

// .checked = property that determines the checked state of an HTML
//  checkbox or radio button element.

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn")
const mastercardBtn = document.getElementById("mastercardBtn")
const paypalBtn = document.getElementById("paypalBtn")
const mySubmit = document.getElementById("mySubmit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")


mySubmit.onclick = function() {
    if(myCheckBox.checked) {
        subResult.textContent = `You are Subscribed`
    }
    else {
        subResult.textContent = `You are not Subscribed`
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You Are Paying with Visa`
    }
    else if (mastercardBtn.checked) {
        paymentResult.textContent = `You Are Paying with MasterCard`
    }
    else if (paypalBtn.checked) {
        paymentResult.textContent = `You Are Paying with Paypal`
    }
    else {
        paymentResult.textContent = `You Must select a payment type`
    }

}

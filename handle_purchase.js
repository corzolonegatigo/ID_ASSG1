function handleInput() {
    const form_items = ["email", "phone", "country", "address", "city", "state", "first-name", "last-name", "card"];
    for (let i = 0; i < form_items.length; i++) {
        usrinput = document.getElementById(form_items[i]).value
        if (usrinput != "") {
            /* item specific validation (i know its not the best to loop 3 ifs)*/
            if (i === 0) {
                regex = /@/;
                
                if (regex.test(usrinput) != true) {
                    alert("Please enter a valid email");
                    return null;
                }
            }

        } else {
            alert(`Please enter your ${form_items[i]}`);
            return null;
        }
    }
    return 0
}

const cart_items = JSON.parse(localStorage.getItem("cart-items"));
var sum = 0;
for (let i = 0; i < cart_items.length; i++) {
    sum += cart_items[i].amount * cart_items[i].price;
}

const total_payable_text = document.getElementById("total-payable");
total_payable_text.innerText = `Total Amount Payable: ${sum.toString()}`

const form = document.getElementById("payment-details-form");
form.addEventListener('submit', function(e) {
    valid_input = handleInput();
    if (valid_input === 0) {
        window.location.href = "/index.html";
        alert("Payment Successful");
        
    }
})

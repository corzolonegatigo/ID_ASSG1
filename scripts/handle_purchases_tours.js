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

const place = localStorage.getItem("location");
const location_txt = document.getElementById("location-payment");
location_txt.innerText = `Booking tickets at: ${place}`;

const total_payable_text = document.getElementById("total-payable");
const seat_category = document.getElementById('seat-cat');
seat_category.addEventListener('change', function(e) {
    const category = this.value;
    var cost = 0;
    if (category === 'Tier 1') {
        cost = 268;
    } else if (category === 'Tier 2') {
        cost = 188;
    } else {
        cost = 98;
    }
    total_payable_text.innerText = `Total Amount Payable: $ ${cost.toString()}`
})


const form = document.getElementById("payment-details-form");
form.addEventListener('submit', function(e) {
    valid_input = handleInput();
    if (valid_input === 0) {
        window.location.href = "./index.html";
        alert("Payment Successful");
        
    }
})

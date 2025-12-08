const tour_items = document.querySelectorAll(".tour-item");
tour_items.forEach((content) => {
    const location = content.querySelector('.tour-item-location').innerText;
    const button = content.querySelector(".tour-item-book-ticket");
    console.log(button)
    button.addEventListener('click', function(event) {
        localStorage.setItem("location", location);
        window.location.href = "./payment_tours.html";
    });

});
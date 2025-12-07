var shop_items = [
        {
            id: 1,
            title: "God Does Like Ugly Vinyl",
            price: 30,
            amount: 0,
            img: "/assets/shop_items/gdlu_normal_album_vinyl.jpg",
        },
        {
            id: 2,
            title: "God Does Like Ugly Shirt",
            price: 30,
            amount: 0,
            img: "/assets/shop_items/gdlu_shirt_front.webp",
        },
        {
            id: 3,
            title: "God Does Like Ugly Vinyl",
            price: 30,
            amount: 0,
            img: "/assets/shop_items/JIDvinylstrd.webp",
        }
    ];

if (localStorage.getItem("cart-items") !== null) {
    shop_items = JSON.parse(localStorage.getItem("cart-items"));
};



const add_to_cart_selector = document.querySelectorAll(".add-to-cart");
console.log(add_to_cart_selector)
add_to_cart_selector.forEach((button) => {
    const plus = button.querySelector(".plus-item");
    const minus = button.querySelector(".minus-item");
    const number = button.querySelector(".item-num");
    number.innerText = shop_items[button.id-1].amount;
    
    plus.addEventListener('click', function(event) {
        shop_items[button.id-1].amount++;
        localStorage.setItem("cart-items", JSON.stringify(shop_items));
        console.log(number);
        number.innerText = shop_items[button.id-1].amount;
        console.log(button.id)
    });

    minus.addEventListener('click', function(event) {
        if (shop_items[button.id-1].amount > 0) {
            shop_items[button.id-1].amount--;
            localStorage.setItem("cart-items", JSON.stringify(shop_items));
            number.innerText = shop_items[button.id-1].amount;
        }
        
    });
});

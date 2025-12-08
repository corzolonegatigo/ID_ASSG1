if (localStorage.getItem("cart-items") !== null) {
    var shop_items = JSON.parse(localStorage.getItem("cart-items"));
} else {
    var shop_items = [
        {
            id: 1,
            title: "God Does Like Ugly Vinyl",
            price: 30,
            amount: 0,
            img: "./assets/shop_items/gdlu_normal_album_vinyl.jpg",
        },
        {
            id: 2,
            title: "God Does Like Ugly Shirt",
            price: 20,
            amount: 0,
            img: "./assets/shop_items/gdlu_shirt_front.webp",
        },
        {
            id: 3,
            title: "God Does Like Ugly Vinyl",
            price: 10,
            amount: 0,
            img: "./assets/shop_items/JIDvinylstrd.webp",
        }
    ];
};



function load_cart_item(item) {
    if (item.amount > 0 ) {

    
        const shop_item = document.createElement("div");
        shop_item.id = item.id;
        shop_item.className = "cart-item";
        
        const shop_item_img = document.createElement('img');
        shop_item_img.src = item.img;
        shop_item_img.className = "cart-item-img";

        shop_item.appendChild(shop_item_img);

        const shop_item_details = document.createElement("div");
        shop_item_details.id = item.title;
        shop_item_details.className = "cart-item-desc";

        const shop_item_name = document.createElement("h2");
        shop_item_name.className = "cart-item-name";
        shop_item_name.innerText = item.title;

        const shop_item_price = document.createElement("h3");
        shop_item_price.className = "cart-item-price";
        console.log(item.price)
        shop_item_price.innerText = "$" + item.price.toString();

        shop_item_details.appendChild(shop_item_name);
        shop_item_details.appendChild(shop_item_price);

        const shop_item_quantity_button = document.createElement('div');
        shop_item_quantity_button.className = "add-to-cart";
        shop_item_quantity_button.id = "cart-amount-buttons";

        const plus = document.createElement('button');
        plus.className = "plus-item";
        plus.innerText = "+"
        const qty = document.createElement('h4');
        qty.className = "item-num";
        const minus = document.createElement('button');
        minus.className = "minus-item";
        minus.innerText = "-"

        qty.innerText = item.amount;
        console.log('hi')

        plus.addEventListener('click', function(event) {
            item.amount++;
            localStorage.setItem("cart-items", JSON.stringify(item));
            qty.innerText = item.amount;
            saveAndRender()
        });

        minus.addEventListener('click', function(event) {
            if (item.amount > 0) {
                item.amount--;
                localStorage.setItem("cart-items", JSON.stringify(shop_items));
                qty.innerText = item.amount;
                saveAndRender()
            }
            
    });


        shop_item_quantity_button.appendChild(minus);
        shop_item_quantity_button.appendChild(qty);
        shop_item_quantity_button.appendChild(plus);
        shop_item_details.appendChild(shop_item_quantity_button)
        
        shop_item.appendChild(shop_item_details);

        return shop_item
    }

    return 0
}




function render() {
    const container = document.getElementById("cart-items")
    container.innerHTML = '';
    shop_items.forEach(item => {
        
        if (item.amount > 0) {
            const cart_item_container = load_cart_item(item);
            container.appendChild(cart_item_container)
        }

        
    });


    const hide_no_items = document.getElementById('hide-no-items');
    const hide_with_items = document.getElementById('hide-with-items');
    console.log(hide_no_items)
    if (container.innerHTML === '') {
       

        hide_no_items.style.display = "none";
        hide_with_items.style.display = "block";
    } else {
        hide_no_items.style.display = "block";
        hide_with_items.style.display = "none";
    }

}

function saveAndRender() {
    localStorage.setItem("cart-items", JSON.stringify(shop_items));
    render()
}

render()
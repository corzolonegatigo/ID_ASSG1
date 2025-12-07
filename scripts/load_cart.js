if (localStorage.getItem("cart-items") !== null) {
    var shop_items = JSON.parse(localStorage.getItem("cart-items"));
} else {
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
            price: 20,
            amount: 0,
            img: "/assets/shop_items/gdlu_shirt_front.webp",
        },
        {
            id: 3,
            title: "God Does Like Ugly Vinyl",
            price: 10,
            amount: 0,
            img: "/assets/shop_items/JIDvinylstrd.webp",
        }
    ];
};

const container = document.getElementById("cart-items")

for (let i = 0; i < shop_items.length; i++) {
    if (shop_items[i].amount > 0 ) {

    
    const shop_item = document.createElement("div");
    shop_item.id = shop_items[i].id;
    shop_item.className = "cart-item";
    
    const shop_item_img = document.createElement('img');
    shop_item_img.src = shop_items[i].img;
    shop_item_img.className = "cart-item-img";

    shop_item.appendChild(shop_item_img);

    const shop_item_details = document.createElement("div");
    shop_item_details.id = shop_items[i].id;
    shop_item_details.className = "cart-item-desc";

    const shop_item_name = document.createElement("h2");
    shop_item_name.className = "cart-item-name";
    shop_item_name.innerText = shop_items[i].title;

    const shop_item_price = document.createElement("h3");
    shop_item_price.className = "cart-item-price";
    console.log(shop_items[i].price)
    shop_item_price.innerText = "$" + shop_items[i].price.toString();

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

    qty.innerText = shop_items[i].amount;
    console.log('hi')
    plus.addEventListener('click', function(event) {
        shop_items[i].amount++;
        localStorage.setItem("cart-items", JSON.stringify(shop_items));
        qty.innerText = shop_items[i].amount;
        if (qty === 0) {
            shop_item.remove();
            window.location.reload();
        }
    });

    minus.addEventListener('click', function(event) {
        if (shop_items[i].amount > 0) {
            shop_items[i].amount--;
            localStorage.setItem("cart-items", JSON.stringify(shop_items));
            qty.innerText = shop_items[i].amount;
        }

        if (qty === 0) {
            shop_item.remove();
            window.location.reload();
        }
        
    });

    shop_item_quantity_button.appendChild(minus);
    shop_item_quantity_button.appendChild(qty);
    shop_item_quantity_button.appendChild(plus);
    shop_item_details.appendChild(shop_item_quantity_button)
    
    shop_item.appendChild(shop_item_details);
    container.appendChild(shop_item);
    }
}



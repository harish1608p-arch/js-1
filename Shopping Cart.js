let products = [];
let cart = [];

let productContainer = document.getElementById("productContainer");
let cartContainer = document.getElementById("cart");
let cartCount = document.getElementById("cartCount");

// Fetch Products
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts(products);
    });

// Display Products
function displayProducts(productArray) {

    productContainer.innerHTML = "";

    productArray.forEach(product => {

        productContainer.innerHTML += `
            <div class="card">

                <img src="${product.image}" alt="${product.title}">

                <h3>${product.title}</h3>

                <h4>₹${product.price}</h4>

                <button onclick="addToCart(${product.id})">
                    Add To Cart
                </button>

            </div>
        `;

    });

}

// Add To Cart
function addToCart(id) {

    let product = products.find(item => item.id === id);

    let existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {

        // Increase quantity if already in cart
        existingProduct.quantity++;

    } else {

        // Add new product
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1
        });

    }

    displayCart();

}

// Display Cart
function displayCart() {

    // Total quantity of all items
    let totalItems = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    cartCount.textContent = totalItems;

    let html = `
        <table>

            <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
    `;

    cart.forEach(item => {

        html += `
            <tr>

                <td>${item.title}</td>

                <td>${item.quantity}</td>

                <td>₹${(item.price * item.quantity).toFixed(2)}</td>

            </tr>
        `;

    });

    let grandTotal = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    html += `
        <tr>

            <td colspan="2"><strong>Grand Total</strong></td>

            <td><strong>₹${grandTotal.toFixed(2)}</strong></td>

        </tr>

        </table>
    `;

    cartContainer.innerHTML = html;

}
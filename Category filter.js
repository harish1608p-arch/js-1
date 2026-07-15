// Product Array
let products = [
    { title: "T-Shirt", category: "Men's Clothing" },
    { title: "Jeans", category: "Men's Clothing" },
    { title: "Dress", category: "Women's Clothing" },
    { title: "Handbag", category: "Women's Clothing" },
    { title: "Gold Ring", category: "Jewelery" },
    { title: "Silver Chain", category: "Jewelery" },
    { title: "Laptop", category: "Electronics" },
    { title: "Mobile", category: "Electronics" }
];

let productList = document.getElementById("productList");

// Display Products
function displayProducts(productArray) {

    productList.innerHTML = "";

    productArray.forEach(product => {

        let p = document.createElement("p");
        p.textContent = `${product.title} - ${product.category}`;

        productList.appendChild(p);

    });

}

// Show All Products Initially
displayProducts(products);

// Filter Function
function filterCategory(category) {

    if (category === "All") {
        displayProducts(products);
    } else {

        let filteredProducts = products.filter(product =>
            product.category === category
        );

        displayProducts(filteredProducts);

    }

}  
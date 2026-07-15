// Product Array
let products = [
    { title: "Laptop" },
    { title: "Mobile" },
    { title: "Headphones" },
    { title: "Keyboard" },
    { title: "Mouse" }
];

let searchInput = document.getElementById("searchInput");
let productList = document.getElementById("productList");

// Function to display products
function displayProducts(productArray) {
    productList.innerHTML = "";

    if (productArray.length === 0) {
        productList.innerHTML = "<h3>No Products Found</h3>";
        return;
    }

    productArray.forEach(product => {
        let p = document.createElement("p");
        p.textContent = product.title;
        productList.appendChild(p);
    });
}

// Display all products initially
displayProducts(products);

// Search
searchInput.addEventListener("input", function () {

    let searchText = searchInput.value.toLowerCase();

    let filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchText)
    );

    displayProducts(filteredProducts);

});
// Product Data
let products = [
    { title: "Laptop", price: 55000 },
    { title: "Mobile", price: 20000 },
    { title: "Headphones", price: 3000 },
    { title: "Keyboard", price: 1500 },
    { title: "Mouse", price: 800 }
];

let productContainer = document.getElementById("products");


function displayProducts(productArray) {

    productContainer.innerHTML = "";

    productArray.forEach(product => {

        let p = document.createElement("p");

        p.innerHTML = `${product.title} - ₹${product.price}`;

        productContainer.appendChild(p);

    });

}


displayProducts(products);


document.getElementById("low").addEventListener("click", () => {

    let sortedProducts = [...products].sort((a, b) => a.price - b.price);

    displayProducts(sortedProducts);

});


document.getElementById("high").addEventListener("click", () => {

    let sortedProducts = [...products].sort((a, b) => b.price - a.price);

    displayProducts(sortedProducts);

});
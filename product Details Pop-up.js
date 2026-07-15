let products = [];

let productContainer = document.getElementById("productContainer");
let modal = document.getElementById("modal");
let modalBody = document.getElementById("modalBody");


fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

        products = data;

        displayProducts(products);

    });


function displayProducts(productArray) {

    productContainer.innerHTML = "";

    productArray.forEach(product => {

        productContainer.innerHTML += `
            <div class="card">

                <img src="${product.image}" data-id="${product.id}">

                <h3>${product.title}</h3>

                <h4>₹${product.price}</h4>

            </div>
        `;

    });

}


productContainer.addEventListener("click", (event) => {

    if (event.target.tagName === "IMG") {

        let id = event.target.dataset.id;

        let product = products.find(item => item.id == id);

        modalBody.innerHTML = `
            <img src="${product.image}">

            <h2>${product.title}</h2>

            <p><strong>Description:</strong> ${product.description}</p>

            <h3>Price: ₹${product.price}</h3>

            <p><strong>Rating:</strong> ⭐ ${product.rating.rate}</p>

            <p><strong>Category:</strong> ${product.category}</p>
        `;

        modal.style.display = "block";
    }

});


document.getElementById("close").addEventListener("click", () => {

    modal.style.display = "none";

});


window.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});
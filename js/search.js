// ===============================
// PRODUCT SEARCH
// ===============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchValue = this.value.toLowerCase().trim();

        const products = document.querySelectorAll(".product-card");

        products.forEach(function (product) {

            const productName = product
                .querySelector("h3")
                .textContent
                .toLowerCase();

            if (productName.includes(searchValue)) {

                product.style.display = "";

            } else {

                product.style.display = "none";

            }

        });

    });

}
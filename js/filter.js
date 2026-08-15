// ===============================
// CATEGORY FILTER
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const category = this.getAttribute("data-category");


        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        this.classList.add("active");


        productCards.forEach(function (product) {

            const productCategory =
                product.getAttribute("data-category");


            if (
                category === "all" ||
                productCategory === category
            ) {

                product.style.display = "";

            } else {

                product.style.display = "none";

            }

        });

    });

});
//===============================
// MOBILE MENU
//===============================


////const menuBtn = document.querySelector(".menu-btn");

//const navLinks = document.querySelector(".nav-links");


//if(menuBtn){

//menuBtn.addEventListener("click",()=>{

//navLinks.classList.toggle("active");

  // });
//}

//const menuToggle = document.getElementById("menuToggle");
////const navbar = document.getElementById("navbar");
//menuToggle.addEventListener("click",function(){
     //navbar.classList.toString("active")
//})

// ================================
// MAIN MOBILE MENU
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("show");
    });




    // ================================
    // CATEGORY DROPDOWN
    // ================================

    const categoryBtn = document.getElementById("categoryBtn");
    const categoryMenu = document.getElementById("categoryMenu");

    categoryBtn.addEventListener("click", function () {
        categoryMenu.classList.toggle("hide");
    });
})

   
//=============================
// BIGGER IMAGE EFFECT
//=============================
//const IMAGE = document. querySelectorAll(".product-image");
//const modal = document.getElementById("imageModal");
//const largeimage = document.getElementById("largeImage");
//const closeModal = document.getElementById("closeModal");

//Images.forEach(function(image){
//    image.addEventListener("click", function() {
    
       // largeimage.src = image.src;
        //modal.classList.add(show);
  //  });
//});
//closeModal.addEventListener("click",function() {
  //  modal.classList.remove("show");
//});


function openImage(image) {
    window.open(image.src, "_blank");
}


// ===============================
// CLOSE MOBILE MENU WHEN CLICKING LINK
// ===============================


const links = document.querySelectorAll(".nav-links a");


links.forEach(link=>{


    link.addEventListener("click",()=>{


        if(navLinks){

            navLinks.classList.remove("active");

        }


    });


});








// ===============================
// PRODUCT SEARCH
// ===============================


const searchInput = document.getElementById("searchInput");


if(searchInput){



searchInput.addEventListener("keyup",function(){


    let searchValue = this.value.toLowerCase();



    const products = document.querySelectorAll(".product-card");



    products.forEach(product=>{


        let productName = product
        .querySelector("h3")
        .textContent
        .toLowerCase();



        if(productName.includes(searchValue)){


            product.style.display="block";


        }else{


            product.style.display="none";


        }



    });



});



}








// ===============================
// SCROLL ANIMATION
// ===============================


const cards = document.querySelectorAll(
".product-card, .category-card, .value-card"
);



window.addEventListener("scroll",()=>{


cards.forEach(card=>{


let position = card.getBoundingClientRect().top;


let screenHeight = window.innerHeight;



if(position < screenHeight - 100){


card.style.opacity="1";

card.style.transform="translateY(0)";


}



});


});







// ===============================
// CURRENT YEAR FOOTER
// ===============================


const year = document.querySelector(".copyright");


if(year){


year.innerHTML = 
`
© ${new Date().getFullYear()} E&P Shipping & Logistics. All Rights Reserved.
`;


}
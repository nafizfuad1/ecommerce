const products = [
  {
    id: 1,
    imageurl: "https://i.ibb.co.com/QFfPL93Z/Rectangle.png",
    type: "Summer essentials",
    title: "Earl-Grey Cotton-Cashmere",
    price: "£275",
    color: "More Colours Available",
  },
  {
    id: 2,
    imageurl: "https://i.ibb.co.com/LWyN8CC/Rectangle-1.png",
    type: "Summer essentials",
    title: "Orange-Gloss Open Polo Neck",
    price: "£156",
    color: "More Colours Available",
  },
  {
    id: 3,
    imageurl: "https://i.ibb.co.com/RpwbB7Mx/Rectangle-2.png",
    type: "Summer essentials",
    title: "Maroon Cotton-Cashmere Dress",
    price: "",
    color: "More Colours Available",
  },
  {
    id: 4,
    imageurl: "https://i.ibb.co.com/ZRLh3JCC/Rectangle-3.png",
    type: "Summer essentials",
    title: "Earl-Red Slouchy Cashmere",
    price: "£405",
    color: "More Colours Available",
  },
  {
    id: 5,
    imageurl: "https://i.ibb.co.com/zWPZkbbL/Rectangle-4.png",
    type: "Summer essentials",
    title: "White Open Neck",
    price: "£125",
    color: "More Colours Available",
  },
  {
    id: 6,
    imageurl: "https://i.ibb.co.com/PGrGyZkP/Rectangle-5.png",
    type: "Summer essentials",
    title: "Earl-Black Open Polo Neck",
    price: "",
    color: "More Colours Available",
  },
  {
    id: 7,
    imageurl: "https://i.ibb.co.com/7tGqK9XR/Rectangle-6.png",
    type: "Summer essentials",
    title: "Black-Gloss Cotton-Cashmere Dress",
    price: "£265",
    color: "More Colours Available",
  },
  {
    id: 8,
    imageurl: "https://i.ibb.co.com/gM3ndkgT/Rectangle-7.png",
    type: "Summer essentials",
    title: "Earl-Silver Cotton-Cashmere Shorts",
    price: "£175",
    color: "More Colours Available",
  },
  {
    id: 9,
    imageurl: "https://i.ibb.co.com/V0YT4CR6/Rectangle-8.png",
    type: "Summer essentials",
    title: "Cotton-Cashmere Tank Top",
    price: "",
    color: "More Colours Available",
  },
  {
    id: 10,
    imageurl: "https://i.ibb.co.com/RGNGc4NS/Rectangle-9.png",
    type: "Summer essentials",
    title: "Black-Gloss Cotton-Cashmere",
    price: "£212",
    color: "More Colours Available",
  },
  {
    id: 11,
    imageurl: "https://i.ibb.co.com/GfQrGWCn/Rectangle-10.png",
    type: "Summer essentials",
    title: "Blue Cotton-Cashmere T-Shirt",
    price: "£275",
    color: "More Colours Available",
  },
  {
    id: 12,
    imageurl: "https://i.ibb.co.com/yKgnMYV/Rectangle-11.png",
    type: "Summer essentials",
    title: "Black-Gloss Slouchy Cashmere",
    price: "",
    color: "More Colours Available",
  },
  {
    id: 13,
    imageurl: "https://i.ibb.co.com/bg1R1Prg/Rectangle-13.png",
    type: "Summer essentials",
    title: "Blue Cotton-Cashmere Shorts",
    price: "£175",
    color: "More Colours Available",
  },
  {
    id: 14,
    imageurl: "https://i.ibb.co.com/chHWFLQr/Rectangle-14.png",
    type: "Summer essentials",
    title: "Blue-Yellow Cashmere-Cotton",
    price: "£215",
    color: "More Colours Available",
  },
  {
    id: 15,
    imageurl: "https://i.ibb.co.com/3bFYnp9/Rectangle-15.png",
    type: "Summer essentials",
    title: "Earl-Black Cotton-Cashmere",
    price: "",
    color: "",
  },
  {
    id: 16,
    imageurl: "https://i.ibb.co.com/7NW1CXM5/Rectangle-16.png",
    type: "Summer essentials",
    title: "Cream Care Bears Sun Burst Wool",
    price: "£275",
    color: "",
  },
  {
    id: 17,
    imageurl: "https://i.ibb.co.com/QF0wG03L/Rectangle-17.png",
    type: "Summer essentials",
    title: "Green Care-A-Lot Wool-Cashmere",
    price: "£125",
    color: "",
  },
  {
    id: 18,
    imageurl: "https://i.ibb.co.com/zTfFphck/Rectangle-18.png",
    type: "Summer essentials",
    title: "Sun Flower Wool-Cashmere",
    price: "",
    color: "",
  },
  {
    id: 19,
    imageurl: "https://i.ibb.co.com/HptcGYDL/Rectangle-19.png",
    type: "Summer essentials",
    title: "White Funshine Bear Wool-Cashmere",
    price: "£125",
    color: "",
  },
  {
    id: 20,
    imageurl: "https://i.ibb.co.com/VcQ8XdRX/Rectangle-20.png",
    type: "Summer essentials",
    title: "White Wool-Cashmere Track",
    price: "£365",
    color: "",
  },
  {
    id: 21,
    imageurl: "https://i.ibb.co.com/CpfHM43h/Rectangle-21.png",
    type: "Summer essentials",
    title: "White Cheer Bear Pocket Wool",
    price: "£120",
    color: "",
  },
  {
    id: 22,
    imageurl: "https://i.ibb.co.com/s9QFsFkn/Rectangle-22.png",
    type: "Summer essentials",
    title: "Red Good Vibes Care Bear",
    price: "£235",
    color: "",
  },
  {
    id: 23,
    imageurl: "https://i.ibb.co.com/gL0yYsZT/Rectangle-23.png",
    type: "Summer essentials",
    title: "White Grumpy Bear Striped",
    price: "",
    color: "",
  },
  {
    id: 24,
    imageurl: "https://i.ibb.co.com/GfQrGWCn/Rectangle-10.png",
    type: "Summer essentials",
    title: "White Funshine Bear Wool-Cashmere",
    price: "",
    color: "",
  },
];

// menu active class
const menuLinks = document.querySelectorAll(".menu ul li a");

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menuLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// slider swiper
const swiper = new Swiper(".slider-container", {
  speed: 1300,
  // loop: true,
  autoplay: { deplay: 4000 },
  navigation: {
    prevEl: "#button-prev",
    nextEl: "#button-next",
  },
});

// collection card
new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // responsiveness
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// product card code
function showProducts() {
  for (let product of products) {
    // console.log(product);
    const productCard = document.createElement("div");
    productCard.innerHTML = `
    <div class="product-card">
              <div class="card-image">
                <img
                  src="${product.imageurl}"
                  alt="product img"
                  class="main-img"
                />

                <div class="badge">${product.type}</div>

                <div class="wishlist">
                  <img src="./img/heart.png" alt="wishlist" />
                </div>
              </div>

              <div class="card-content">
                <div class="title-price">
                  <p class="product-title">${product.title}</p>
                  <p class="price">${product.price}</p>
                </div>
                <p class="more-colors">${product.color}</p>
              </div>
            </div>
    `;
    document.getElementById("card-container").append(productCard);
  }
}

showProducts();

// section wise content code

// home page
document
  .getElementById("new-home-button")
  .addEventListener("click", function (e) {
    const existingSection = document.getElementsByClassName("existing");
    console.log(existingSection);
    for (let section of existingSection) {
      section.style.display = "none";
    }
    document.getElementById("home").style.display = "block";
  });
// product shop page
document.getElementById("shop-button").addEventListener("click", function (e) {
  const existingSection = document.getElementsByClassName("existing");
  console.log(existingSection);
  for (let section of existingSection) {
    section.style.display = "none";
  }
  document.getElementById("shop").style.display = "block";
});
// cashmere details page
document
  .getElementById("cashmere-button")
  .addEventListener("click", function (e) {
    const existingSection = document.getElementsByClassName("existing");
    console.log(existingSection);
    for (let section of existingSection) {
      section.style.display = "none";
    }
    document.getElementById("details").style.display = "block";
  });

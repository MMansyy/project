const slidesContainer = document.querySelector('.slides');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const productsContainer = document.getElementById('products-container');
const homeSection = document.getElementById('home-page');
const detailsSection = document.getElementById('product-details');


let data = [];
let currentIndex = 0;

const fetchData = () => {
    let connection = new XMLHttpRequest();
    connection.open("GET", "https://dummyjson.com/products");
    connection.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            data = response.products;
            renderSlides();
            renderCards();
        }
    };
    connection.send();
}

const renderSlides = () => {
    data.forEach((product) => {
        const slideHTML = `
            <div class="slide">
                <img src="${product.thumbnail}" class="" alt="${product.title}">
                <div class="caption text-center text-white bg-dark bg-opacity-50 p-2 position-absolute bottom-0 w-100">
                    <h5>${product.title}</h5>
                </div>
            </div>
        `;
        slidesContainer.innerHTML += slideHTML;
    });
}

const updateSliderPosition = () => {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex === data.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSliderPosition();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = data.length - 1;
    } else {
        currentIndex--;
    }
    updateSliderPosition();
});


const renderCards = () => {
    data.forEach((product, i) => {
        const cardHTML = `
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card h-100 mb-3">
                    <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-center">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <button data-id=${i} class="btn btn-outline-dark w-100 mt-auto">Show details</button>
                    </div>
                </div>
            </div>
        `;
        productsContainer.innerHTML += cardHTML;
    });
}

productsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        const productId = event.target.getAttribute('data-id');
        showProductDetails(productId);
        console.log(productId);
    }
})

const sectionToggle = () => {
    homeSection.classList.toggle('d-none');
    detailsSection.classList.toggle('d-none');
}

const showProductDetails = (productId) => {
    const product = data[productId];

    if (!product) return;

    detailsSection.innerHTML = `
        <div class="container py-4">
            <button id="back-btn" class="btn btn-light mb-4 shadow-sm border rounded-pill px-4">
                <i class="fa-solid fa-angle-left me-2"></i>Back to Products
            </button>

            <div class="card product-details-card">
                <div class="row g-0">
                    <div class="col-md-5 product-image-container">
                        <img src="${product.thumbnail}" class="img-fluid" alt="${product.title}">
                    </div>
                    
                    <div class="col-md-7 p-4 p-md-5">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="badge bg-secondary text-uppercase">${product.category}</span>
                            <span class="text-success fw-bold small">
                                ${product.availabilityStatus}
                            </span>
                        </div>

                        <h2 class="display-6 fw-bold mb-2">${product.title}</h2>
                        
                        <div class="mb-3 d-flex align-items-center gap-2">
                            <span class="text-muted small">(${product.reviews.length} reviews)</span>
                        </div>
                        <div class="my-2">
                            ${product.tags.map(tag => `<span class="badge bg-light text-dark border me-1">#${tag}</span>`).join('')}
                        </div>
                        <div class="mb-4">
                            <span class="display-5 fw-bold text-dark">$${product.price}</span>
                            <span class="badge bg-danger ms-2">-${product.discountPercentage}% OFF</span>
                        </div>
                        <p class="text-muted lead fs-6 mb-4">${product.description}</p>
                        <div class="row g-2 mb-4">
                            <div class="col-6 col-sm-4 flex-grow-1">
                                <div class="spec-box">
                                    <small>Brand</small>
                                    <span>${product.brand || 'Generic'}</span>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 flex-grow-1">
                                <div class="spec-box">
                                    <small>Weight</small>
                                    <span>${product.weight} grams</span>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 flex-grow-1">
                                <div class="spec-box">
                                    <small>Stock</small>
                                    <span>${product.stock} items</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', sectionToggle);
    sectionToggle();
}

fetchData();
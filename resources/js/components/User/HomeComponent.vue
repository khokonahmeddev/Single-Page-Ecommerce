<template>
    <div>
        <main>
            <section class="banner-area mb-4">
                <div class="row">
                    <div class="col-12 col-sm-3">
                        <div class="category-sidebar h-100">
                            <nav class="category-sidenav accordion" id="sidenavAccordion">
                                <div class="category-sidenav-menu">
                                    <div class="nav">
                                        <a class="nav-link collapsed"
                                           href="#"
                                           data-toggle="collapse"
                                           data-target="#fruitsAndVegetables"
                                           aria-expanded="false"
                                           aria-controls="fruitsAndVegetables">
                                            <div class="category-sidenav-link-icon">
                                                <i class="icofont-fruits"/>
                                            </div>
                                            Fruits & Vegetables
                                        </a>
                                        <div class="collapse"
                                             id="fruitsAndVegetables"
                                             aria-labelledby="headingOne"
                                             data-parent="#sidenavAccordion">
                                            <nav class="category-sidenav-menu-nested nav">
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Fruits
                                                </a>
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Vegetables
                                                </a>
                                            </nav>
                                        </div>

                                        <a class="nav-link collapsed"
                                           href="#"
                                           data-toggle="collapse"
                                           data-target="#meatAndFish"
                                           aria-expanded="false"
                                           aria-controls="meatAndFish">
                                            <div class="category-sidenav-link-icon">
                                                <i class="icofont-fish-5"/>
                                            </div>
                                            Meat & Fish
                                        </a>
                                        <div class="collapse"
                                             id="meatAndFish"
                                             aria-labelledby="headingOne"
                                             data-parent="#sidenavAccordion">
                                            <nav class="category-sidenav-menu-nested nav">
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Meat
                                                </a>
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Fish
                                                </a>
                                            </nav>
                                        </div>

                                        <a class="nav-link collapsed"
                                           href="#"
                                           data-toggle="collapse"
                                           data-target="#snacks"
                                           aria-expanded="false"
                                           aria-controls="snacks">
                                            <div class="category-sidenav-link-icon">
                                                <i class="icofont-bread"/>
                                            </div>
                                            Snacks
                                        </a>
                                        <div class="collapse"
                                             id="snacks"
                                             aria-labelledby="headingOne"
                                             data-parent="#sidenavAccordion">
                                            <nav class="category-sidenav-menu-nested nav">
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Biscuits
                                                </a>
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Chocolates
                                                </a>
                                            </nav>
                                        </div>

                                        <a class="nav-link collapsed"
                                           href="#"
                                           data-toggle="collapse"
                                           data-target="#petCare"
                                           aria-expanded="false"
                                           aria-controls="petCare">
                                            <div class="category-sidenav-link-icon">
                                                <i class="icofont-cat-alt-3"/>
                                            </div>
                                            Pet Care
                                        </a>
                                        <div class="collapse"
                                             id="petCare"
                                             aria-labelledby="headingOne"
                                             data-parent="#sidenavAccordion">
                                            <nav class="category-sidenav-menu-nested nav">
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Meat
                                                </a>
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Fish
                                                </a>
                                            </nav>
                                        </div>

                                        <a class="nav-link collapsed"
                                           href="#"
                                           data-toggle="collapse"
                                           data-target="#homeAndCleaning"
                                           aria-expanded="false"
                                           aria-controls="homeAndCleaning">
                                            <div class="category-sidenav-link-icon">
                                                <i class="icofont-paint-brush"/>
                                            </div>
                                            Home & Cleaning
                                        </a>
                                        <div class="collapse"
                                             id="homeAndCleaning"
                                             aria-labelledby="headingOne"
                                             data-parent="#sidenavAccordion">
                                            <nav class="category-sidenav-menu-nested nav">
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Meat
                                                </a>
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Fish
                                                </a>
                                            </nav>
                                        </div>

                                        <a class="nav-link collapsed"
                                           href="#"
                                           data-toggle="collapse"
                                           data-target="#dairy"
                                           aria-expanded="false"
                                           aria-controls="dairy">
                                            <div class="category-sidenav-link-icon">
                                                <i class="icofont-milk"/>
                                            </div>
                                            Dairy
                                        </a>
                                        <div class="collapse"
                                             id="dairy"
                                             aria-labelledby="headingOne"
                                             data-parent="#sidenavAccordion">
                                            <nav class="category-sidenav-menu-nested nav">
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Meat
                                                </a>
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Fish
                                                </a>
                                            </nav>
                                        </div>

                                        <a class="nav-link collapsed"
                                           href="#"
                                           data-toggle="collapse"
                                           data-target="#cooking"
                                           aria-expanded="false"
                                           aria-controls="cooking">
                                            <div class="category-sidenav-link-icon">
                                                <i class="icofont-muffin"/>
                                            </div>
                                            Cooking
                                        </a>
                                        <div class="collapse"
                                             id="cooking"
                                             aria-labelledby="headingOne"
                                             data-parent="#sidenavAccordion">
                                            <nav class="category-sidenav-menu-nested nav">
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Meat
                                                </a>
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Fish
                                                </a>
                                            </nav>
                                        </div>

                                        <a class="nav-link collapsed"
                                           href="#"
                                           data-toggle="collapse"
                                           data-target="#breakfast"
                                           aria-expanded="false"
                                           aria-controls="breakfast">
                                            <div class="category-sidenav-link-icon">
                                                <i class="icofont-fast-food"/>
                                            </div>
                                            Breakfast
                                        </a>
                                        <div class="collapse"
                                             id="breakfast"
                                             aria-labelledby="headingOne"
                                             data-parent="#sidenavAccordion">
                                            <nav class="category-sidenav-menu-nested nav">
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Meat
                                                </a>
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Fish
                                                </a>
                                            </nav>
                                        </div>

                                        <a class="nav-link collapsed"
                                           href="#"
                                           data-toggle="collapse"
                                           data-target="#beverage"
                                           aria-expanded="false"
                                           aria-controls="beverage">
                                            <div class="category-sidenav-link-icon">
                                                <i class="icofont-soft-drinks"/>
                                            </div>
                                            Beverage
                                        </a>
                                        <div class="collapse"
                                             id="beverage"
                                             aria-labelledby="headingOne"
                                             data-parent="#sidenavAccordion">
                                            <nav class="category-sidenav-menu-nested nav">
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Meat
                                                </a>
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Fish
                                                </a>
                                            </nav>
                                        </div>

                                        <a class="nav-link collapsed"
                                           href="#"
                                           data-toggle="collapse"
                                           data-target="#beautyAndHealth"
                                           aria-expanded="false"
                                           aria-controls="beautyAndHealth">
                                            <div class="category-sidenav-link-icon">
                                                <i class="icofont-heart-beat-alt"/>
                                            </div>
                                            Beauty & Health
                                        </a>
                                        <div class="collapse"
                                             id="beautyAndHealth"
                                             aria-labelledby="headingOne"
                                             data-parent="#sidenavAccordion">
                                            <nav class="category-sidenav-menu-nested nav">
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Meat
                                                </a>
                                                <a class="nav-link" href="/">
                                                    <i class="icofont-minus"/> Fish
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div class="col-12 col-sm-9">
                        <div class="main-slider">
                            <div id="carouselExampleIndicators2" class="carousel slide"
                                 data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img
                                            src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                            class="img-fluid rounded"
                                            alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                            src="https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                            class="img-fluid rounded"
                                            alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                            src="https://images.pexels.com/photos/2893635/pexels-photo-2893635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                            class="img-fluid rounded"
                                            alt="...">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="promotional-ads">
                            <swiper class="swiper" :options="swiperOption">
                                <swiper-slide>
                                    <img
                                        src="https://shop.redq.now.sh/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png"
                                        class="img-fluid" alt="">
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        src="https://shop.redq.now.sh/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png"
                                        class="img-fluid" alt="">
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        src="https://shop.redq.now.sh/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png"
                                        class="img-fluid" alt="">
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        src="https://shop.redq.now.sh/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png"
                                        class="img-fluid" alt="">
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        src="https://shop.redq.now.sh/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png"
                                        class="img-fluid" alt="">
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        src="https://shop.redq.now.sh/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png"
                                        class="img-fluid" alt="">
                                </swiper-slide>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                        </div>
                    </div>
                </div>
            </section>

            <section class="products-area" id="productsArea">
                <div class="products-group-title">
                    <h4 class="mb-0">
                        <span>
                            Groceries
                        </span>
                    </h4>
                </div>
                <div class="all-products">
                    <div class="product-card" v-for="(product, index) in products" :key="index">
                        <div class="bg-white">
                            <a href="#" data-toggle="modal" data-target="#productDetailsModal">
                                <div class="product-image-wrapper">
                                    <img :src="product.img"
                                         class="img-fluid"
                                         :alt="product.name">
                                </div>
                            </a>
                            <div class="product-info-wrapper">
                                <a href="#" class="d-block" data-toggle="modal" data-target="#productDetailsModal">
                                    <h3 class="product-title">{{ product.name }}</h3>
                                    <span class="product-weight">{{ product.weight }}</span>
                                </a>
                                <div class="product-meta">
                                    <div class="product-price-wrapper">
                                        <span class="product-price">{{ product.price }}</span>
                                    </div>
                                    <button v-if="product.isItemAddToCart === false" type="button"
                                            class="add-cart-button"
                                            @click.prevent="addToCart(product)">
                                        <span class="btn-icon">
                                            <i class="icofont-basket"/>
                                        </span>
                                        <span class="btn-text">Cart</span>
                                    </button>
                                    <div v-else class="d-flex align-items-center product-counter">
                                        <a href="#">
                                            <i class="icofont-plus"/>
                                        </a>
                                        <span class="mx-3">1</span>
                                        <a href="#">
                                            <i class="icofont-minus"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center w-100">
                        <button class="btn bg-white text-brand-color" type="button">
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                            Load More
                        </button>
                    </div>
                </div>
            </section>
        </main>

        <!--Authentication Modal-->
        <login-register-modal/>

        <!--Product Details Modal-->
        <div class="modal fade product-details-modal" id="productDetailsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <div class="row no-gutters">
                            <div class="col-12 col-sm-6 border-right">
                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg" class="img-fluid" alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg" class="img-fluid" alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg" class="img-fluid" alt="...">
                                        </div>
                                    </div>
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                                            <img src="https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg"
                                                 width="50"
                                                 alt="">
                                        </li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1">
                                            <img src="https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg"
                                                 width="50"
                                                 alt="">
                                        </li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2">
                                            <img src="https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg"
                                                 width="50"
                                                 alt="">
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="product-details-wrapper">
                                    <h5 class="font-weight-bold text-dark">Lemon</h5>
                                    <p class="text-muted font-size-80 mb-4">12pc(s)</p>
                                    <p class="mb-5">
                                        The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.
                                    </p>
                                    <button type="button" class="add-cart-button mb-4">
                                            <span class="btn-icon">
                                                <i class="icofont-basket"/>
                                            </span>
                                        <span class="btn-text">Cart</span>
                                    </button>
                                    <div>
                                        <a class="btn btn-light mr-2">Fruits & Vegetables</a>
                                        <a class="btn btn-light mr-2">Vegetables</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeComponent",
        data() {
            return {
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        }
                    }
                },
                swiperOptionMainSlider: {
                    direction: 'vertical',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                },
                products: [
                    {
                        id: 1,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',
                        name: 'Lime',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 2,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg',
                        name: 'Lemon',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 3,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/RedCherries_zylnoo.jpg',
                        name: 'Cherry',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 4,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/CelerySticks_ulljfz.jpg',
                        name: 'Celery Stick',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 5,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BabySpinach_xronqz.jpg',
                        name: 'Baby Spinach',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 6,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/VeggiePlatter_ztcg0m.jpg',
                        name: 'Mix Vegetable Platter',
                        weight: '12 pc(s)',
                        price: '$1.6',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 7,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg',
                        name: 'Lemon',
                        weight: '12 pc(s)',
                        price: '$4',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 8,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/FrenchGreenBeans_azivow.jpg',
                        name: 'French Green Beans',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 9,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Corn_dlrtbv.jpg',
                        name: 'Sweet Corn',
                        weight: '12 pc(s)',
                        price: '$2',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 10,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Cucumber_w6hlxr.jpg',
                        name: 'Cucumber',
                        weight: '12 pc(s)',
                        price: '$2.3',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 11,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/MiniPeppers_iydh8m.jpg',
                        name: 'Pepper',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 12,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenBeans_fwddsr.jpg',
                        name: 'Green Beans',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 13,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BrusselsSprouts_adwhet.jpg',
                        name: 'Brussels Sprout',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 14,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Peeled_Carrots_xx7mjo.jpg',
                        name: 'Peeled Baby Carrot',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 15,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/strawberry_d4lzfz.jpg',
                        name: 'Strawberry',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 16,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614570/pickbazar/grocery/blueberries_relyfn.jpg',
                        name: 'Blueberries',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 17,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/clementines_h74qrp.jpg',
                        name: 'Clementines',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 18,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg',
                        name: 'Lemon',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 19,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg',
                        name: 'Lemon',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    },
                    {
                        id: 20,
                        img: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg',
                        name: 'Lemon',
                        weight: '12 pc(s)',
                        price: '$1.5',
                        category: 'grocery',
                        isItemAddToCart: false,
                    }
                ],
                shoppingCart: []
            }
        },
        methods: {
            addToCart(itemToAdd) {
                console.log(itemToAdd);
                itemToAdd.isItemAddToCart = true;
                this.shoppingCart.push(itemToAdd);
                console.log(this.shoppingCart)
            }
        }
    }
</script>

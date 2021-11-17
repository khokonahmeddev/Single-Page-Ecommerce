<template>
    <div>
        <div id="cartNav" class="cart-nav">
            <div class="cart-header">
                <div class="text-brand-color font-weight-bold d-flex align-items-center">
                    <i class="icofont-cart-alt mr-2"/> 2 Items
                </div>
                <a href="#" class="text-secondary-color" @click.prevent="closeNav">
                    <i class="icofont-close-line"/>
                </a>
            </div>
            <div class="cart-body custom-scrollbar">
                <div class="product-row">
                    <div class="row">
                        <div class="col-2">
                            <div class="product-counter">
                                <a href="#">
                                    <i class="icofont-plus"/>
                                </a>
                                <span>2</span>
                                <a href="#">
                                    <i class="icofont-minus"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="product-image">
                                <img src="http://s3.amazonaws.com/redqteam.com/pickbazar/belmont_custard_cream.jpg" width="55" alt="">
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="product-information">
                                <p class="product-name mb-1">Belmont Custard Cream</p>
                                <h6 class="text-brand-color font-weight-bold mb-1">$4.5</h6>
                                <small class="text-muted">2 x .50 lb</small>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="product-total-price">
                                $9.00
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="cancel-product-button">
                                <a href="#" class="text-secondary-color">
                                    <i class="icofont-close-line"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-row">
                    <div class="row">
                        <div class="col-2">
                            <div class="product-counter">
                                <a href="#">
                                    <i class="icofont-plus"/>
                                </a>
                                <span>2</span>
                                <a href="#">
                                    <i class="icofont-minus"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="product-image">
                                <img src="http://s3.amazonaws.com/redqteam.com/pickbazar/belmont_custard_cream.jpg" width="55" alt="">
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="product-information">
                                <p class="product-name mb-1">Belmont Custard Cream</p>
                                <h6 class="text-brand-color font-weight-bold mb-1">$4.5</h6>
                                <small class="text-muted">2 x .50 lb</small>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="product-total-price">
                                $9.00
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="cancel-product-button">
                                <a href="#" class="text-secondary-color">
                                    <i class="icofont-close-line"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-footer">
                <div class="text-center mb-3">
                    <a v-if="!showVoucherInput" href="#"
                       @click.prevent="openVoucherInput"
                       class="text-brand-color">
                        Do you have a voucher?
                    </a>
                    <div v-else class="input-group">
                        <input type="text"
                               class="form-control"
                               placeholder="Enter voucher code here">
                        <div class="input-group-append">
                            <button class="btn btn-light" type="button">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
                <div class="checkout-button">
                    <a href="/checkout" class="btn-block px-3">
                        Checkout
                    </a>
                    <span class="price-tag">$1.50</span>
                </div>
            </div>
        </div>
        <a href="#" type="button" class="sticky-cart-button" @click.prevent="openNav">
            <div class="text-white mb-3 font-weight-bold text-center">
                <i class="icofont-cart-alt"/>
                0 Items
            </div>
            <div class="bg-white py-1 px-3 text-center font-weight-bold text-brand-color rounded">
                $00.00
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        props: ['cart_items'],
        data() {
            return {
                showVoucherInput: false
            }
        },
        watch: {
            cart_items: function () {
                console.log(this.cart_items, 'cart');
            }
        },
        methods: {
            openNav() {
                if (window.innerWidth > 576) {
                    document.getElementById("cartNav").style.width = "420px";
                } else {
                    document.getElementById("cartNav").style.width = "100%";
                }
            },
            closeNav() {
                document.getElementById("cartNav").style.width = "0";
            },
            openVoucherInput() {
                this.showVoucherInput = true
            }
        }
    }
</script>

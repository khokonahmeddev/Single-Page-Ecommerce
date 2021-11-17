<template>
    <div>
        <main>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-8">
                        <div class="checkout-information-wrapper">
                            <div class="card bg-white shadow border-0 mb-3">
                                <div class="card-header d-flex align-items-center justify-content-between bg-transparent border-0">
                                    <div class="d-flex align-items-center information-number">
                                        <span class="mr-3">1</span>
                                        <h4 class="font-weight-lighter mb-0">Delivery Address</h4>
                                    </div>
                                    <a href="#"
                                       class="text-brand-color d-flex align-items-center font-weight-bold"
                                       data-toggle="modal"
                                       data-target="#addressAddEditModal">
                                        <i class="icofont-plus mr-1"/> Add New
                                    </a>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-6 col-sm-4">
                                            <div class="list">
                                                <h6 class="font-weight-bold">Home</h6>
                                                27 Street, 2569 <br>
                                                Heritage Road Visalia, <br>
                                                CA 93291
                                                <div class="list-action">
                                                    <a href="#" class="edit" @click.prevent="">
                                                        <i class="icofont-edit-alt"/>
                                                    </a>
                                                    <a href="#" class="delete" @click.prevent="">
                                                        <i class="icofont-close-line"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4">
                                            <div class="list active">
                                                <h6 class="font-weight-bold">Office</h6>
                                                27 Street, 2569 <br>
                                                Heritage Road Visalia, <br>
                                                CA 93291
                                                <div class="list-action">
                                                    <a href="#" class="edit" @click.prevent="">
                                                        <i class="icofont-edit-alt"/>
                                                    </a>
                                                    <a href="#" class="delete" @click.prevent="">
                                                        <i class="icofont-close-line"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card bg-white shadow border-0 mb-3">
                                <div class="card-header d-flex align-items-center justify-content-between bg-transparent border-0">
                                    <div class="d-flex align-items-center information-number">
                                        <span class="mr-3">2</span>
                                        <h4 class="font-weight-lighter mb-0">Delivery Schedule</h4>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-6 col-sm-4 mb-3">
                                            <div class="list active h-100">
                                                <h6 class="font-weight-bold">Express-Delivery</h6>
                                                90 min express delivery
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4 mb-3">
                                            <div class="list h-100">
                                                <h6 class="font-weight-bold">8am-11am</h6>
                                                8.00 AM - 11.00 AM
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4 mb-3">
                                            <div class="list h-100">
                                                <h6 class="font-weight-bold">11am-2pm</h6>
                                                11.00 AM - 2.00 PM
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4">
                                            <div class="list h-100">
                                                <h6 class="font-weight-bold">2pm-5pm</h6>
                                                2.00 PM - 5.00 PM
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4">
                                            <div class="list h-100">
                                                <h6 class="font-weight-bold">5pm-8pm</h6>
                                                5.00 PM - 8.00 PM
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4">
                                            <div class="list">
                                                <h6 class="font-weight-bold">Nextday</h6>
                                                Next Day
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card bg-white shadow border-0 mb-3">
                                <div class="card-header d-flex align-items-center justify-content-between bg-transparent border-0">
                                    <div class="d-flex align-items-center information-number">
                                        <span class="mr-3">3</span>
                                        <h4 class="font-weight-lighter mb-0">Contact Number</h4>
                                    </div>
                                    <a href="#"
                                       class="text-brand-color d-flex align-items-center font-weight-bold"
                                       data-toggle="modal"
                                       data-target="#contactAddEditModal">
                                        <i class="icofont-plus mr-1"/> Add Contact
                                    </a>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-6 col-sm-4">
                                            <div class="list active">
                                                <h6 class="font-weight-bold">Primary</h6>
                                                202-555-0191
                                                <div class="list-action">
                                                    <a href="#" class="edit" @click.prevent="">
                                                        <i class="icofont-edit-alt"/>
                                                    </a>
                                                    <a href="#" class="delete" @click.prevent="">
                                                        <i class="icofont-close-line"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4">
                                            <div class="list">
                                                <h6 class="font-weight-bold">Secondary</h6>
                                                202-555-0701
                                                <div class="list-action">
                                                    <a href="#" class="edit" @click.prevent="">
                                                        <i class="icofont-edit-alt"/>
                                                    </a>
                                                    <a href="#" class="delete" @click.prevent="">
                                                        <i class="icofont-close-line"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card bg-white shadow border-0 mb-5 payment-option-card">
                                <div class="card-header d-flex align-items-center justify-content-between bg-transparent border-0">
                                    <div class="d-flex align-items-center information-number">
                                        <span class="mr-3">4</span>
                                        <h4 class="font-weight-lighter mb-0">Payment Option</h4>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-4">
                                        <div class="text-brand-color font-weight-bold">
                                            Saved Cards
                                        </div>
                                        <a href="#"
                                           class="text-brand-color d-flex align-items-center font-weight-bold"
                                           data-toggle="modal"
                                           data-target="#paymentInfoCard">
                                            <i class="icofont-plus mr-1"/> Add Contact
                                        </a>
                                    </div>
                                    <div class="mb-4">
                                        <swiper class="swiper" :options="swiperOption">
                                            <swiper-slide>
                                                <div class="list active">
                                                    <img :src="'/images/mastercard.png'" class="mb-2" alt="">
                                                    <p class="text-muted font-size-80">Card number</p>
                                                    <p class="font-size-80">
                                                        ****
                                                        ****
                                                        ****
                                                        8724
                                                    </p>
                                                    <h6 class="font-weight-bold font-size-80 mb-0">Jhon Doe Smith</h6>
                                                    <div class="list-action">
                                                        <a href="#" class="delete" @click.prevent="">
                                                            <i class="icofont-close-line"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="list">
                                                    <img :src="'/images/visa.png'" class="mb-2" alt="">
                                                    <p class="text-muted font-size-80">Card number</p>
                                                    <p class="font-size-80">
                                                        ****
                                                        ****
                                                        ****
                                                        8724
                                                    </p>
                                                    <h6 class="font-weight-bold font-size-80 mb-0">Jhon Doe Smith</h6>
                                                    <div class="list-action">
                                                        <a href="#" class="delete" @click.prevent="">
                                                            <i class="icofont-close-line"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="list">
                                                    <img :src="'/images/visa.png'" class="mb-2" alt="">
                                                    <p class="text-muted font-size-80">Card number</p>
                                                    <p class="font-size-80">
                                                        ****
                                                        ****
                                                        ****
                                                        8724
                                                    </p>
                                                    <h6 class="font-weight-bold font-size-80 mb-0">Jhon Doe Smith</h6>
                                                    <div class="list-action">
                                                        <a href="#" class="delete" @click.prevent="">
                                                            <i class="icofont-close-line"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="list">
                                                    <img :src="'/images/mastercard.png'" class="mb-2" alt="">
                                                    <p class="text-muted font-size-80">Card number</p>
                                                    <p class="font-size-80">
                                                        ****
                                                        ****
                                                        ****
                                                        8724
                                                    </p>
                                                    <h6 class="font-weight-bold font-size-80 mb-0">Jhon Doe Smith</h6>
                                                    <div class="list-action">
                                                        <a href="#" class="delete" @click.prevent="">
                                                            <i class="icofont-close-line"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <div class="swiper-button-prev" slot="button-prev"></div>
                                            <div class="swiper-button-next" slot="button-next"></div>
                                        </swiper>
                                        <div class="col-6 col-sm-4">

                                        </div>
                                    </div>
                                    <h6>
                                        <a href="#" class="text-brand-color">
                                            Do you have a voucher?
                                        </a>
                                    </h6>
                                    <div class="text-muted font-size-80 mb-4">
                                        By making this purchase you agree to our
                                        <a href="#">terms and conditions.</a>
                                    </div>
                                    <a href="/order-details" class="btn btn-lg btn-block btn-brand">
                                        Proceed to Checkout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-4">
                        <div class="order-items-table">
                            <h6 class="text-center text-muted font-weight-bold">Your Order</h6>
                            <table class="table">
                                <tbody class="border-bottom">
                                    <tr>
                                        <th class="font-weight-bold border-0">1</th>
                                        <td class="text-muted border-0">x</td>
                                        <td class="text-muted border-0">Lime | 12 pc(s)</td>
                                        <td class="text-muted border-0">$1.50</td>
                                    </tr>
                                    <tr>
                                        <th class="font-weight-bold border-0">1</th>
                                        <td class="text-muted border-0">x</td>
                                        <td class="text-muted border-0">Lime | 12 pc(s)</td>
                                        <td class="text-muted border-0">$1.50</td>
                                    </tr>
                                    <tr>
                                        <th class="font-weight-bold border-0">1</th>
                                        <td class="text-muted border-0">x</td>
                                        <td class="text-muted border-0">Lime | 12 pc(s)</td>
                                        <td class="text-muted border-0">$1.50</td>
                                    </tr>
                                    <tr>
                                        <th class="font-weight-bold border-0">1</th>
                                        <td class="text-muted border-0">x</td>
                                        <td class="text-muted border-0">Lime | 12 pc(s)</td>
                                        <td class="text-muted border-0">$1.50</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td class="text-muted border-0 py-1" colspan="3">Sub Total</td>
                                        <td class="text-muted border-0 py-1">$5.00</td>
                                    </tr>
                                    <tr>
                                        <td class="text-muted border-0 py-1" colspan="3">Delivery Fee</td>
                                        <td class="text-muted border-0 py-1">$5.00</td>
                                    </tr>
                                    <tr>
                                        <td class="text-muted border-0 py-1" colspan="3">Sub Total</td>
                                        <td class="text-muted border-0 py-1">$0.00</td>
                                    </tr>
                                    <tr>
                                        <td class="text-muted border-0 py-1" colspan="3">Discount</td>
                                        <td class="text-muted border-0 py-1">$0.00</td>
                                    </tr>
                                    <tr>
                                        <td class="text-muted border-0 py-1 font-weight-bold" colspan="3">Total (Inc. VAT)</td>
                                        <td class="text-muted border-0 py-1">$5.70</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!--Add New Address Modal-->
        <div class="modal fade" id="addressAddEditModal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content p-3 border-0">
                    <div class="modal-body">
                        <form action="">
                            <h5>Add New Address</h5>
                            <div class="form-group">
                                <input type="text" class="form-control custom-form-control" placeholder="Enter Title">
                            </div>
                            <div class="form-group">
                                <textarea rows="5" class="form-control custom-form-control"></textarea>
                            </div>
                            <div class="form-group mb-0">
                                <button type="button" class="btn btn-brand btn-block btn-custom-padding">Save Address</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!--Add New Contact-->
        <div class="modal fade" id="contactAddEditModal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content p-3 border-0">
                    <div class="modal-body">
                        <form action="">
                            <h5>Add New Contact</h5>
                            <div class="form-group">
                                <input type="text" class="form-control custom-form-control" placeholder="Enter a phone number">
                            </div>
                            <div class="form-group mb-0">
                                <button type="button" class="btn btn-brand btn-block btn-custom-padding">Save Contact</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!--Payment Info Modal-->
        <div class="modal fade" id="paymentInfoCard">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content p-3 border-0">
                    <div class="modal-body">
                        <form action="">
                            <h5>Enter card info</h5>
                            <div class="form-group">
                                <input type="text" class="form-control custom-form-control" placeholder="Card number">
                            </div>
                            <div class="form-group mb-0">
                                <button type="button" class="btn btn-brand btn-block btn-custom-padding">Pay Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Checkout",
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
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        }
                    }
                }
            }
        }
    }
</script>

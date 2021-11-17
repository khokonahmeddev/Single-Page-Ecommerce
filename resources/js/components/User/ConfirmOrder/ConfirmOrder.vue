<template>
    <div>
        <main>
            <div class="container">
                <div class="card border-0 bg-white rounded mb-5">
                    <div class="card-header p-3 text-right bg-transparent border-0">
                        <a href="#" class="btn btn-outline-secondary">
                            Back to Home
                        </a>
                    </div>
                    <div class="card-body p-5">
                        <div class="mb-4">
                            <h4 class="font-weight-bold mb-4">Order Received</h4>
                            <p class="mb-4">Thank you. Your order has been received</p>
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="font-weight-bold">Order Number</h6>
                                    <p class="text-muted">1444</p>
                                </div>
                                <div class="col-sm-3">
                                    <h6 class="font-weight-bold">Date</h6>
                                    <p class="text-muted">March 14, 2019</p>
                                </div>
                                <div class="col-sm-3">
                                    <h6 class="font-weight-bold">Total</h6>
                                    <p class="text-muted">$10,944.00</p>
                                </div>
                                <div class="col-sm-3">
                                    <h6 class="font-weight-bold">Payment Method</h6>
                                    <p class="text-muted">Cash on delivery</p>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <h4 class="font-weight-bold mb-4">Order Details</h4>
                            <table class="table">
                                <tbody>
                                <tr>
                                    <th class="font-weight-bold border-0 pl-0">Total Item</th>
                                    <td class="border-0">:</td>
                                    <td class="text-muted border-0">6 Items</td>
                                </tr>
                                <tr>
                                    <th class="font-weight-bold border-0 pl-0">Order Time</th>
                                    <td class="border-0">:</td>
                                    <td class="text-muted border-0">1.00pm 10/12/19</td>
                                </tr>
                                <tr>
                                    <th class="font-weight-bold border-0 pl-0">Delivery Time</th>
                                    <td class="border-0">:</td>
                                    <td class="text-muted border-0">90 Minute Express Delivery</td>
                                </tr>
                                <tr>
                                    <th class="font-weight-bold border-0 pl-0">Delivery Location</th>
                                    <td class="border-0">:</td>
                                    <td class="text-muted border-0">1st Floor, House 149, Road-22, Mohakhali DOHS, Dhaka - North</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h4 class="font-weight-bold mb-4">Total Amount</h4>
                            <table class="table">
                                <tbody>
                                <tr>
                                    <th class="font-weight-bold border-0 pl-0">Sub Total</th>
                                    <td class="border-0">:</td>
                                    <td class="text-muted border-0">$10,864.00</td>
                                </tr>
                                <tr>
                                    <th class="font-weight-bold border-0 pl-0">Payment Method</th>
                                    <td class="border-0">:</td>
                                    <td class="text-muted border-0">Cash On Delivery</td>
                                </tr>
                                <tr>
                                    <th class="font-weight-bold border-0 pl-0">Cash on delivery</th>
                                    <td class="border-0">:</td>
                                    <td class="text-muted border-0">10</td>
                                </tr>
                                <tr>
                                    <th class="font-weight-bold border-0 pl-0">Total</th>
                                    <td class="border-0">:</td>
                                    <td class="text-muted border-0">$10,874.00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "ConfirmOrder"
    }
</script>

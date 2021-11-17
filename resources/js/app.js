/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('home-component', require('./components/User/HomeComponent').default);
Vue.component('login-register-modal', require('./components/User/Auth/LoginRegisterModal').default);
Vue.component('navbar-component', require('./components/User/Layout/Navbar').default);
Vue.component('cart-component', require('./components/User/Cart/Cart').default);
Vue.component('checkout-component', require('./components/User/Checkout/Checkout').default);
Vue.component('order-confirm-component', require('./components/User/ConfirmOrder/ConfirmOrder').default);
Vue.component('offer-component', require('./components/User/Offer/Offer').default);
Vue.component('help-component', require('./components/User/Help/Help').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

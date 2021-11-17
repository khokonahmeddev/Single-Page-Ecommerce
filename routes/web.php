<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('user.home.index');
});
Route::get('/checkout', function () {
    return view('user.checkout.checkout');
});
Route::get('/order-details', function () {
    return view('user.order.order-details');
});
Route::get('/offer', function () {
    return view('user.offer.offer');
});
Route::get('/help', function () {
    return view('user.help.help');
});

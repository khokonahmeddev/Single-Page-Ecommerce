$(document).scroll(function (e) {
    let scrollTop = $(document).scrollTop();
    if (scrollTop > 0) {
        $('.navbar-home').addClass('navbar-fixed-top');
    } else {
        $('.navbar-home').removeClass('navbar-fixed-top');
    }
});

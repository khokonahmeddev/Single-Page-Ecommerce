<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <a class="navbar-brand" href="/">
            <img :src="'/img/logo.svg'" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="icofont-navigation-menu text-brand-color"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="row w-100">
                <div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
                    <ul class="navbar-nav justify-content-center">
                        <li class="nav-item dropdown rounded">
                            <a class="nav-link dropdown-toggle text-brand-color d-flex align-items-center"
                               href="#"
                               id="navbarDropdown"
                               role="button"
                               data-toggle="dropdown"
                               aria-haspopup="true"
                               aria-expanded="false">
                                <i class="icofont-fruits mr-1"/> Grocery
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item active" href="#">
                                    <i class="icofont-fruits mr-3"/>Grocery
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="icofont-fruits mr-3"/>Makeup
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="icofont-bag-alt mr-3"/>Bags
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="icofont-baby-cloth mr-3"/>Clothing
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="icofont-chair mr-3"/>Furniture
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="icofont-book mr-3"/>Book
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="icofont-medicine mr-3"/>Medicine
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="icofont-fast-food mr-3"/>Foods
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-6">
                    <form class="navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search for...">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                                    <i class="icofont-search-2"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 pr-lg-0">
                    <ul class="navbar-nav justify-content-end navbar-nav-right">
                        <li class="nav-item">
                            <a class="nav-link" href="/offer">
                                Offer
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/help">
                                <i class="icofont-question-circle"/> Need Help
                            </a>
                        </li>
                        <li class="nav-item dropdown rounded">
                            <a class="nav-link dropdown-toggle text-brand-color d-flex align-items-center"
                               href="#"
                               id="navbarDropdownLanguage"
                               role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://image.flaticon.com/icons/svg/2060/2060619.svg" width="20" class="mr-1" alt="English"> English
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownLanguage">
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <img src="https://image.flaticon.com/icons/svg/2060/2060646.svg" width="20" class="mr-3" alt="Arabic">Arabic
                                </a>
                                <div class="dropdown-divider m-0"/>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <img src="https://image.flaticon.com/icons/svg/2060/2060632.svg" width="20" class="mr-3" alt="Chinese">Chinese
                                </a>
                                <div class="dropdown-divider m-0"/>
                                <a class="dropdown-item d-flex align-items-center active" href="#">
                                    <img src="https://image.flaticon.com/icons/svg/2060/2060619.svg" width="20" class="mr-3" alt="English">English
                                </a>
                                <div class="dropdown-divider m-0"/>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <img src="https://image.flaticon.com/icons/svg/2060/2060636.svg" width="20" class="mr-3" alt="German">German
                                </a>
                                <div class="dropdown-divider m-0"/>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <img src="https://image.flaticon.com/icons/svg/2060/2060647.svg" width="20" class="mr-3" alt="Hebrew">Hebrew
                                </a>
                                <div class="dropdown-divider m-0"/>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <img src="https://image.flaticon.com/icons/svg/2060/2060630.svg" width="20" class="mr-3" alt="Spanish">Spanish
                                </a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn btn-brand px-3" href="#" data-toggle="modal" data-target="#authenticationModal">
                                Join
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
    }
</script>

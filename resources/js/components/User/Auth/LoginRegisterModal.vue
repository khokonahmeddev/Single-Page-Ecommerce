<template>
    <div class="modal fade authentication-modal" id="authenticationModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body p-5">
                    <form class="m-0 text-center authentication-form" action="">
                        <div v-if="isSignUpActive" class="sign-up">
                            <h4 class="text-brand-color font-weight-bold">Sign Up</h4>
                            <p class="text-secondary font-weight-light">By signing up, you agree to Pickbazar's</p>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="demo@demo.com">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="demo">
                            </div>
                            <p class="text-secondary font-size-80">By signing up you are agreed to Pickbazar's <a href="">Terms & Condition</a></p>
                            <button type="button" class="btn btn-brand btn-block">Continue</button>
                            <div class="or-divider"><span>or</span></div>
                            <a href="#" class="btn btn-facebook btn-block">
                                <i class="icofont-facebook"/> Continue with facebook
                            </a>
                            <a href="#" class="btn btn-google btn-block mb-3">
                                <i class="icofont-google-plus"/> Continue with google
                            </a>
                            <p class="mb-0">Already have an account? <a href="#" class="font-weight-bold" @click.prevent="toggleSignInSignUp">Login</a></p>
                        </div>
                        <div v-else class="sign-in">
                            <h4 class="text-brand-color font-weight-bold">Welcome Back</h4>
                            <p class="text-secondary font-weight-light">Login with your email & password</p>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="demo@demo.com">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="demo">
                            </div>
                            <button type="button" class="btn btn-brand btn-block">Continue</button>
                            <div class="or-divider"><span>or</span></div>
                            <a href="#" class="btn btn-facebook btn-block">
                                <i class="icofont-facebook"/> Continue with facebook
                            </a>
                            <a href="#" class="btn btn-google btn-block mb-3">
                                <i class="icofont-google-plus"/> Continue with google
                            </a>
                            <p>Don't have an account? <a href="#" class="font-weight-bold" @click.prevent="toggleSignInSignUp">Sign up</a></p>
                            <p class="mb-0 text-brand-color">Forgot your password? <a href="#" class="font-weight-bold text-brand-color">Reset It</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginRegisterModal",
        data() {
            return {
                isSignUpActive: true
            }
        },
        methods: {
            toggleSignInSignUp() {
                this.isSignUpActive = !this.isSignUpActive;
            }
        }
    }
</script>

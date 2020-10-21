<title xmlns="http://www.w3.org/1999/html">mulu</title>
<template>
    <div id="Login">
        <div id="page">
            <div class="page-inner">
                <nav class="gtco-nav" role="navigation">
                    <div class="gtco-container">
                        <div class="row">
                            <div class="col-sm-4 col-xs-12">
                                <div id="gtco-logo"><a href="static/index.html">Splash<em>.</em></a></div>
                            </div>
                            <div class="col-xs-8 text-right menu-1">
                                <ul>
                                    <li><a href="features.html">首页</a></li>
                                    <li><a href="tour.html">通知</a></li>
                                    <li class="has-dropdown">
                                        <a href="#">公共资源</a>
                                        <ul class="dropdown">
                                            <li><a href="#">Web Design</a></li>
                                            <li><a href="#">eCommerce</a></li>
                                            <li><a href="#">Branding</a></li>
                                            <li><a href="#">API</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">关于</a></li>
                                    <li class="btn-cta"><a href="#"><span>Get started</span></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </nav>
                <header id="gtco-header" class="gtco-cover" role="banner"
                        :style="{backgroundImage: 'url(' + MainPage + ')' }">
                    <div class="overlay"></div>
                    <div class="gtco-container">
                        <div class="row">
                            <div class="col-md-12 col-md-offset-0 text-left">
                                <div class="row row-mt-15em">
                                    <div class="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">
                                        <span class="intro-text-small">Welcome to OurWebSite</span>
                                        <h1>西安理工大学.</h1>
                                    </div>
                                    <div class="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
                                        <div class="form-wrap">
                                            <div class="tab">
                                                <ul class="tab-menu">
                                                    <li v-bind:class="marktap1" @click="function(){marktap1='active gtco-first';marktap2='gtco-second';markcontent1='tab-content-inner active';markcontent2='tab-content-inner';}"><a href="#" data-tab="signup">学生</a></li>
                                                    <li v-bind:class="marktap2" @click="function(){marktap1='gtco-first';marktap2='active gtco-second';markcontent1='tab-content-inner';markcontent2='tab-content-inner active';}"><a href="#" data-tab="login">教师</a></li>
                                                </ul>
                                                <div class="tab-content">
                                                    <div v-bind:class="markcontent1" data-content="signup">
                                                        <form action="#" >
                                                            <div class="row form-group">
                                                                <div class="col-md-12">
                                                                    <label for="usernamestu">用户名</label>
                                                                    <input type="text" class="form-control"
                                                                           id="usernamestu" v-model="usernamestu">
<!--                                                                    <el-form-item label="用户名" prop="usernamestu">-->
<!--                                                                        <el-input v-model="usernamestu" class="form-control"></el-input>-->
<!--                                                                    </el-form-item>-->
                                                                </div>
                                                            </div>
                                                            <div class="row form-group">
                                                                <div class="col-md-12">
                                                                    <label for="passwordstu">密码</label>
                                                                    <input type="password" class="form-control"
                                                                           id="passwordstu" v-model="passwordstu">
                                                                </div>
                                                            </div>
                                                            <div class="row form-group">
                                                                <div class="col-md-5">
                                                                    <label for="verifycodestu">验证码</label>
                                                                    <input type="text" class="form-control" id="verifycodestu" v-model="verifyCode1temp">
                                                                </div>
                                                                <div class="col-md-5" style="float: right;top: 30px">
                                                                    <div id="v_container1" style="float: right"></div>
                                                                </div>
                                                            </div>

                                                            <div class="row form-group">
                                                                <div class="col-md-12">
                                                                    <input class="btn btn-primary"
                                                                           value="登录" @click="submitstu()">
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>

                                                    <div v-bind:class="markcontent2" data-content="login">
                                                        <form action="#">
                                                            <div class="row form-group">
                                                                <div class="col-md-12">
                                                                    <label for="usernametea">用户名</label>
                                                                    <input type="text" class="form-control"
                                                                           id="usernametea" v-model="usernametea">
                                                                </div>
                                                            </div>
                                                            <div class="row form-group">
                                                                <div class="col-md-12">
                                                                    <label for="passwordtea">密码</label>
                                                                    <input type="password" class="form-control"
                                                                           id="passwordtea" v-model="passwordtea">
                                                                </div>
                                                            </div>
                                                            <div class="row form-group">
                                                                <div class="col-md-5">
                                                                    <label for="verifycodetea">验证码</label>
                                                                    <input type="text" class="form-control" id="verifycodetea" v-model="verifyCode2temp">
                                                                </div>
                                                                <div class="col-md-5" style="float: right;top: 30px">
                                                                    <div id="v_container2" style="float: right;"></div>
                                                                </div>
                                                            </div>
                                                            <div class="row form-group">
                                                                <div class="col-md-12">
                                                                    <input  class="btn btn-primary"
                                                                           value="登录" @click="submittea()">
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>



                <footer id="gtco-footer" role="contentinfo">
                    <div class="gtco-container">
                        <div class="row copyright">
                            <div class="col-md-12">
                                <p class="pull-left">
                                    <small class="block">Copyright &copy; 2016.Company name All rights reserved.<a target="_blank" href="http://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a></small>
                                </p>
                                <p class="pull-right">
                                <ul class="gtco-social-icons pull-right">
                                    <li><a href="#"><i class="icon-twitter"></i></a></li>
                                    <li><a href="#"><i class="icon-facebook"></i></a></li>
                                    <li><a href="#"><i class="icon-linkedin"></i></a></li>
                                    <li><a href="#"><i class="icon-dribbble"></i></a></li>
                                </ul>
                                </p>
                            </div>
                        </div>

                    </div>
                </footer>

            </div>
        </div>

    </div>
</template>

<script>
    import { GVerify } from '@/static/js/verifyCode'
    import MainPage from '@/assets/LogPage/MainPage.jpg'
    export default {
        name: "Login",
        data() {
            return{
                MainPage: MainPage,
                marktap1: 'active gtco-first', marktap2: 'gtco-second', markcontent1: 'tab-content-inner active', markcontent2: 'tab-content-inner',
                usernamestu:'', passwordstu:'', usernametea:'', passwordtea:'',
                verifyCode1: null, verifyCode2: null, verifyCode1temp: null, verifyCode2temp: null,
            }
        },
        methods:{
            submitstu(){
                var ax = this
                this.$axios({
                    method: "POST",
                    url: "http://localhost:8081/loginstu",
                    data: {
                        stu_name: ax.usernamestu,
                        stu_password: ax.passwordstu
                    }
                }).then(function (response) {
                    console.log(response.data)
                    ax.$store.commit("updataStu", response.data);
                    ax.$router.push("/StuHome");
                })
                var verifyCode = this.verifyCode1temp
                var verifyFlag = this.verifyCode1.validate(verifyCode)
                if (!verifyFlag) {
                    this.$alert('验证码错误，请重新输入！', '提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        center: true
                    }).then(() => {
                        this.verifyCode1temp=null
                        this.usernamestu=""
                        this.passwordstu=""
                    })
                    return;
                } else {
                    ax.$notify({
                        title: '系统提示',
                        message: '验证码输入正确',
                        type: 'success'
                    })
                }
            },
            submittea(){
                var ax = this
                this.$axios({
                    method: "POST",
                    url: "http://localhost:8081/logintea",
                    data: {
                        tea_name: ax.usernametea,
                        tea_password: ax.passwordtea
                    }
                }).then(function (response) {
                    ax.$message(response);
                })

                var verifyCode = this.verifyCode2temp
                var verifyFlag = this.verifyCode2.validate(verifyCode)
                if (!verifyFlag) {
                    this.$alert('验证码错误，请重新输入！', '提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        center: true
                    }).then(() => {
                        this.verifyCode2temp=null
                        this.usernametea=""
                        this.passwordtea=""
                    })
                    return;
                } else {
                    ax.$notify({
                        title: '系统提示',
                        message: '验证码输入正确',
                        type: 'success'
                    })
                }
            }
        },
        mounted () {
            this.verifyCode1 = new GVerify('v_container1')
            this.verifyCode2 = new GVerify('v_container2')
        }

    }
</script>


<style scoped>
@import "../static/css/bootstrap.css";
@import "../static/css/animate.css";
@import "../static/css/icomoon.css";
@import "../static/css/magnific-popup.css";
@import "../static/css/owl.carousel.min.css";
@import "../static/css/owl.theme.default.min.css";
@import "../static/css/style.css";
@import "../static/css/themify-icons.css";
</style>
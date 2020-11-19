<title xmlns="http://www.w3.org/1999/html">mulu</title>
<template>
    <div id="Login">
        <div id="page">
            <div class="page-inner" style="max-width:2000px">
                <nav class="gtco-nav" role="navigation">
                    <div class="gtco-container">
                        <div class="row">
                            <div class="col-sm-4 col-xs-12">
                                <div id="gtco-logo"><a href="static/index.html">University<em>.</em></a></div>
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
                    <div class="gtco-container" style="width: 100%">
                        <div class="row" style="max-width: 1800px">
                            <div class="col-md-12 col-md-offset-0 text-left">
                                <div class="row row-mt-15em" style="margin-top: 11em">
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
                                                <div class="tab-content"  style="padding-bottom: 5px">
                                                    <div v-bind:class="markcontent1" data-content="signup">
                                                        <form action="#">
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
                                                                <div class="col-md-5" style="float: left;top: 10px">
                                                                    <el-switch v-model = "remember" active-text="记住我" ></el-switch>
                                                                </div>
                                                                <div class="col-md-5" style="float: right">
                                                                    <el-button type="danger" @click="submitstu()" style="float:right;width: 160px">登录</el-button>
                                                                </div>
                                                            </div>
                                                            <div class="row form-group">
                                                                <div class="col-md-2" style="float: right;top:5px">
                                                                    <el-button type="text" style="float:right;" @click = "function(){GetAllId();dialogFormVisible = true}">注册</el-button>
                                                                </div>
                                                                <div class="col-md-2" style="float: right;top:5px;right: 45px">
                                                                    <el-button type="text" style="float:right;">忘记密码?</el-button>
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
                                                                <div class="col-md-5" style="float: left;top: 10px">
                                                                    <el-switch v-model = "remember" active-text="记住我" ></el-switch>
                                                                </div>
                                                                <div class="col-md-5" style="float: right">
                                                                    <el-button type="danger" @click="submittea()" style="float:right;width: 160px">登录</el-button>
                                                                </div>
                                                            </div>
                                                            <div class="row form-group">
                                                                <div class="col-md-5" style="float: right;top:5px">
                                                                    <el-button type="text" style="float:right;">忘记密码?</el-button>                                                                </div>
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
                <el-dialog title="欢迎注册" :visible.sync="dialogFormVisible" style="padding-top: 0px" @close="reset()" >
                    <div style="padding-top: 0px">
                        已有账号?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="text">登录</el-button>
                    </div>
                    <div class="groupRegisterBox">
                        <!-- 内容 -->
                        <div class="container" style="width: 100%">
                            <!-- eui -->
                            <div class="row">
                                <div class="col col-xs-12 col-sm-8 col-sm-offset-2" >
<!--                                    <div class="box-header with-border" >-->
<!--                                        <h3 class="box-title">Join Us</h3>-->
<!--                                    </div>-->
                                    <el-form ref="form1"
                                             :rules="rules1"
                                             :model="postObj"
                                             :size="'small'"
                                             :label-width="'auto'"
                                             :disabled="false">
                                        <el-form-item label="用户名" prop="username">
                                            <el-input  v-model="postObj.username" placeholder="请输入用户名"></el-input>
                                        </el-form-item>
                                        <el-form-item label="密码" prop="password">
                                            <el-input type="password" v-model="postObj.password" placeholder="请输入密码"></el-input>
                                        </el-form-item>
                                        <el-form-item label="确认密码" prop="confirmPassword">
                                            <el-input type="password" v-model="postObj.confirmPassword" placeholder="请确认密码"></el-input>
                                        </el-form-item>
                                        <el-form-item label="所属校/院/班" prop="school">
                                            <el-select
                                                    v-model="postObj.school_id"
                                                    style="width: 30%"
                                                    placeholder="选择学校">
                                                <el-option
                                                        v-for="item in optionsschool"
                                                        :key="item.school_id"
                                                        :label="item.school_name"
                                                        :value="item.school_id">
                                                </el-option>
                                            </el-select>
                                            <el-select
                                                    v-model="postObj.college_id"
                                                    collapse-tags
                                                    style="margin-left: 5%;width: 30%"
                                                    placeholder="选择院系">
                                                <el-option
                                                        v-for="item in optionscollege"
                                                        :key="item.college_id"
                                                        :label="item.college_name"
                                                        :value="item.college_id">
                                                </el-option>
                                            </el-select>
                                            <el-select
                                                    v-model="postObj.class_id"
                                                    collapse-tags
                                                    style="margin-left: 5%;width: 30%"
                                                    placeholder="选择班级">
                                                <el-option
                                                        v-for="item in optionsclass"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="电子邮箱" prop="email">
                                            <el-input v-model="postObj.email" placeholder="请输入邮箱"></el-input>
                                        </el-form-item>
                                        <el-form-item label="手机号" prop="mobile">
                                            <el-input  v-model="postObj.mobile" placeholder="请输入手机号"></el-input>
                                        </el-form-item>
                                    </el-form>
                                    <div style="text-align: center;padding:20px 0 0;overflow:hidden;">
                                        <el-button type="primary" round style="width: 400px" @click="handleSubmit('form1')">注册</el-button>
                                    </div>
                                    <div style="text-align: left;padding:15px 0 0 30px;overflow:hidden;">
                                        <el-checkbox v-model="protocolchecked">阅读并接受</el-checkbox> <el-link type="primary">《Myself用户协议》</el-link>及<el-link type="primary">《Myself隐私权保护声明》</el-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-dialog>



<!--                <footer id="gtco-footer" role="contentinfo">-->
<!--                    <div class="gtco-container">-->
<!--                        <div class="row copyright">-->
<!--                            <div class="col-md-12">-->
<!--                                <p class="pull-left">-->
<!--                                    <small class="block">Copyright &copy; 2016.Company name All rights reserved.<a target="_blank" href="http://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a></small>-->
<!--                                </p>-->
<!--                                <p class="pull-right">-->
<!--                                <ul class="gtco-social-icons pull-right">-->
<!--                                    <li><a href="#"><i class="icon-twitter"></i></a></li>-->
<!--                                    <li><a href="#"><i class="icon-facebook"></i></a></li>-->
<!--                                    <li><a href="#"><i class="icon-linkedin"></i></a></li>-->
<!--                                    <li><a href="#"><i class="icon-dribbble"></i></a></li>-->
<!--                                </ul>-->
<!--                                </p>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    </div>-->
<!--                </footer>-->

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
            var validPhone=(rule, value, callback)=>{
                if(value){
                    if(!(/^1[3456789]\d{9}$/.test(value))){
                        callback(new Error('手机号格式不正确'));
                    }else{
                        callback();
                    }
                }else{
                    callback();
                }
            };
            var validConfirmPassword=(rule, value, callback)=>{
                if(value){
                    if(value != this.postObj.password){
                        callback(new Error('确认密码和密码不一致'));
                    }else{
                        callback();
                    }
                }else{
                    callback();
                }
            }
            var validSchoolCollegeClass=(rule, value, callback)=>{
                    console.log(this.postObj.college_id)
                    if(this.postObj.school_id == '' || this.postObj.college_id == '' || this.postObj.class_id == ''){
                        callback(new Error('请选择完整信息'));
                    }else{
                        callback();
                    }
            }
            return{
                MainPage: MainPage,
                marktap1: 'active gtco-first', marktap2: 'gtco-second', markcontent1: 'tab-content-inner active', markcontent2: 'tab-content-inner',
                usernamestu:'', passwordstu:'', usernametea:'', passwordtea:'',
                verifyCode1: null, verifyCode2: null, verifyCode1temp: null, verifyCode2temp: null,
                remember: false,
                protocolchecked : false,
                dialogFormVisible: false,
                postObj:{
                    username:"",//用户名
                    password:"",//密码
                    confirmPassword:"",//确认密码
                    email:"",//电子邮箱
                    mobile:"",//手机号
                    school_id:"",//学校编号
                    college_id:"",//学院编号
                    class_id:""//班级编号
                },
                rules1:{
                    email:[
                        { required: true, message: '请填写邮箱', trigger: 'change' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ],
                    password:[
                        { required: true, message: '请填写密码', trigger: 'change' },
                    ],
                    confirmPassword:[
                        { required: true, message: '请确认密码', trigger: 'change' },
                        { validator: validConfirmPassword, trigger: 'change' },
                    ],
                    username:[
                        { required: true, message: '请输入用户名', trigger: 'change' }
                    ],
                    mobile:[
                        { required: true, message: '请输入手机号', trigger: 'change' },
                        { validator: validPhone, trigger: 'change' }
                    ],
                    school:[
                        {validator: validSchoolCollegeClass, trigger:'change'}

                    ],
                },
                optionsschool:[],
                optionscollege:[],
                optionsclass:[]
            }
        },
        methods:{
            reset(){
                var self=this;
                this.postObj.school_id = ''                     //选项无法由resetFields清空，所以得手动清空选项的值
                this.postObj.college_id = ''
                this.postObj.class_id = ''
                this.$refs['form1'].resetFields();
            },
            handleSubmit(formName){//提交
                var self=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var ax = this
                        this.$axios({
                            method: "POST",
                            url: "http://localhost:8090/signinstu",
                            data: {
                                stu_name: ax.postObj.username,
                                stu_password: ax.postObj.password,
                                stu_email: ax.postObj.email,
                                stu_mobilephone: ax.postObj.mobile,
                                school_id: ax.postObj.school_id,
                                college_id: ax.postObj.college_id,
                                class_id: ax.postObj.class_id,
                            }
                        }).then(function(response) {
                            if(response.data == "success") {
                                ax.$confirm('注册成功', '提示', {
                                    confirmButtonText: '确定',
                                    type: 'warning',
                                    center: true
                                }).then(() => {
                                    ax.$router.go(0)
                                });
                            }
                        })
                    }
                });
            },
            GetAllId(){//提交
                var ax = this
                this.$axios({
                    method: "POST",
                    url: "http://localhost:8090/GetAllId",
                    data: {}
                }).then(function(response) {
                    console.log(response.data)
                    ax.optionsschool = response.data.school
                    ax.optionscollege = response.data.college
                    // ax.optionclass = response.data.class
                    response.data.class.map((temp, index) => {
                        ax.optionsclass.push({value: temp.class_id, label: temp.class_name})
                    })
                })
            },
            submitstu(){
                var ax = this
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
                    return;                                 //因为是async=false,这里验证码错误就会返回，不会执行下面的axios请求
                }
                this.$axios({
                    async: false,
                    method: "POST",
                    url: "http://localhost:8090/loginstu",
                    data: {
                        stu_name: ax.usernamestu,
                        stu_password: ax.passwordstu,
                        remember: ax.remember
                    }
                }).then(function (response) {
                    console.log(response)
                    ax.$store.commit("updataStu", response.data.stu);
                    if (response.data.msg == "success") {
                        ax.$router.push("/StuHome");
                    } else if (response.data.msg == "用户名错误") {
                        ax.$alert('用户名错误，请重新输入！', '提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            center: true
                        }).then(() => {
                            ax.$router.go(0)
                        })
                    }else if(response.data.msg == "密码错误"){
                        ax.$alert('密码错误，请重新输入！', '提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            center: true
                        }).then(() => {
                            ax.$router.go(0)
                        })
                    }
                })

            },
            submittea(){
                var ax = this
                this.$axios({
                    method: "POST",
                    url: "http://localhost:8090/logintea",
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
            },
        },
        created() {

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

/deep/ .el-dialog__body {
    padding-top: 0px;
}
</style>
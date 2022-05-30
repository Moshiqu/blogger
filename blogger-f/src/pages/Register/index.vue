<template>
    <div class="register">
        <div class="register-left">
            <div class="register-left-title">欢迎到来！</div>
            <ul class="register-left-ul">
                <li>
                    <i class="sml-icon"></i>
                    做正确的事情
                </li>
                <li>
                    <i class="sml-icon"></i>
                    实施高效且有效管理
                </li>
                <li>
                    <i class="sml-icon"></i>
                    集中资源解决问题
                </li>
                <li>
                    <i class="sml-icon"></i>
                    培养各级管理人员
                </li>
            </ul>
        </div>
        <div class="register-right animate__animated animate__fadeInLeft">
            <div class="register-right-logo"></div>
            <div class="register-right-register-form">
                <div class="register-right-register-form-item">
                    <el-icon color="#99b9f2" size="20px">
                        <UserFilled />
                    </el-icon>
                    <el-input v-model="registerForm.username" placeholder="请输入用户名" />
                </div>
                <div class="register-right-register-form-item">
                    <el-icon color="#99b9f2" size="20px">
                        <Briefcase />
                    </el-icon>
                    <el-input v-model="registerForm.username" placeholder="请输入邮箱" />
                </div>
                <div class="register-right-register-form-item">
                    <el-icon color="#99b9f2" size="20px">
                        <Iphone />
                    </el-icon>
                    <el-input v-model="registerForm.username" placeholder="请输入手机号" />
                </div>
                <div class="register-right-register-form-item">
                    <el-icon color="#99b9f2" size="20px">
                        <Lock />
                    </el-icon>
                    <el-input v-model="registerForm.password" show-password placeholder="请输入密码" />
                </div>
                <div class="register-right-register-form-item">
                    <div class="register-right-footer">
                        <span @click="toLogin">已有账号?去登录</span>
                    </div>
                </div>
            </div>
            <el-button type="primary" class="register-btn">注册</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { UserFilled, Lock, Iphone, Briefcase } from '@element-plus/icons-vue';
import router from '../../router';

type RegisterForm = {
    username: string,
    password: string
}

const registerForm = reactive<RegisterForm>({
    username: '',
    password: ''
})

const toLogin= ()=>{
    router.push({
        name:'Login'
    })
}
</script>

<style lang="less" scoped>
.register {
    height: 100%;
    width: 100%;
    background: no-repeat url("@/assets/images/register_bg.jpg");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    &-left {
        width: 5.53rem;
        height: 7.02rem;
        font-size: .24rem;
        background: no-repeat url("@/assets/images/logon_imge.png");
        background-size: cover;
        color: rgba(218, 235, 255, 1);
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding-left: 1.3rem;
        padding-top: 2rem;
        z-index: 1;

        &-title {
            font-size: .5rem;
            margin-bottom: .6rem;
        }

        &-ul {
            display: flex;
            flex-direction: column;

            &>li {
                margin-bottom: .2rem;
                display: flex;
                align-items: center;

                &>.sml-icon {
                    height: .12rem;
                    width: .12rem;
                    background-color: rgba(218, 235, 235, 1);
                    margin-right: 0.1rem;
                }
            }
        }
    }

    &-right {
        width: 4.23rem;
        height: 5.62rem;
        background-color: #fff;
        // transform: translateX(-0.3rem);
        margin-left: -30px;
        border-top-right-radius: 0.1rem;
        border-bottom-right-radius: 0.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 0.5rem 0.75rem 0.7rem;
        justify-content: space-between;

        &-logo {
            width: 2.38rem;
            height: 0.39rem;
            background: no-repeat url("@/assets/images/logo.png");
        }

        &-register-form {
            width: 100%;

            &-item {
                display: flex;
                align-items: center;
                margin-bottom: .2rem;

                .register-right-footer {
                    font-size: .12rem;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    width: 100%;
                    color: #668fe8;
                    cursor: pointer;
                }
            }
        }

        .register-btn {
            width: 100%;
            height: .4rem;
            font-size: .2rem;
            box-shadow: 0px 0.1rem 0.15rem 0px rgb(83 128 226 / 35%);
        }
    }
}
</style>

<template>
    <div class="header">
        <div class="container">
            <header class="flex justify-space-between">
                <router-link to="/">
                    <img src="../assets/images/logo.png">
                </router-link>

                <el-menu theme="dark" default-active="1" class="" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">服务中心</el-menu-item>
                    <el-menu-item index="2">用户中心</el-menu-item>
                </el-menu>

                <div>
                    <span>2916466313@qq.com</span>
                    <el-button icon="el-icon-warming">注销</el-button>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>

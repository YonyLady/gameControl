<template>
    <div>
        <h1><router-link to="/">Simpla Admin</router-link></h1>
        <h5>带分组导航栏</h5>
        <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose"  theme="dark">
            <el-menu-item-group title="分组一">
                <el-menu-item index="1">
                    <i class="el-icon-message"></i>
                    <router-link to="/list">列表页面</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-message"></i>
                    <router-link to="/setting">设置</router-link>
                </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组二">
                <el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>
                <el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组三">
                <el-menu-item index="3"><i class="el-icon-message"></i>导航五</el-menu-item>
                <el-menu-item index="4"><i class="el-icon-message"></i>导航六</el-menu-item>
            </el-menu-item-group>
        </el-menu>
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

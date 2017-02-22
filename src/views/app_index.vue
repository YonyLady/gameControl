<template>
    <div class="container app-index">
        <el-row>
            <el-col :span="4">
                <sidebar class="pull-left"></sidebar>
            </el-col>
            <el-col :span="20">
                <div class="main">
                    <h1>Welcome John</h1>
                    <p>What would you like to do?</p>
                    <list></list>
                    <div>
                        <router-link to="/list" type="primary">更多列表</router-link>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import list from "./list"
import sidebar from "../components/sidebar2.vue"
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            list,
            sidebar
        }
    }
</script>

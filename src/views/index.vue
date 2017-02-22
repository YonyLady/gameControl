<template>
    <div class="main">
        <div class="container">
            <aside class="left-aside">
                <figure class="user-info">
                    <img src="../assets/images/user.png">
                    <figcaption>
                        12641465465@qq.com
                    </figcaption>
                </figure>
                <div class="notice">
                    <h3>公告</h3>
                </div>
            </aside>
            <div class="right-nav">
                <el-row>
                    <el-col :span="12">
                        <router-link to='/appIndex'>
                            <el-card :body-style="{ padding:0}" class="enter-list">
                                <div class="info">
                                    <span class="icons i-rank"></span>
                                    <article class="info-item">
                                        <h3>适用于手机APP游戏接入</h3>
                                        <p>分析app游戏的各项运营指标，对游戏生命周期各个环节全方位进行数据监控，</p>
                                        <p>深入了解游戏产品内部道具、任务、关卡、等级、虚拟币等各项数据表现。</p>
                                    </article>
                                </div>
                                <span class="list-title">移动游戏分析平台</span>
                            </el-card>
                        </router-link>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @import '../assets/less/page/index';
</style>

<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>

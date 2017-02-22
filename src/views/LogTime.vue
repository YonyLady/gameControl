<template>
<div class="form-horizontal">
    <div class="form-group">
        <div class="col-sm-6">
            <label>开始日期:</label>
            <el-time-select
                    v-model="date"
                    :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                      }"
                    placeholder="选择时间">
            </el-time-select>
        </div>
        <div class="col-sm-6">
            <label>总时间&nbsp;:</label>
            <input
                    type="number"
                    class="form-control"
                    v-model="totalTime"
                    placeholder="Hours"
            />
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-12">
            <label>备注&nbsp;&nbsp;:</label>
            <input
                    type="text"
                    class="form-control"
                    v-model="comment"
                    placeholder="Comment"
            />
        </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
    <hr>
</div>
</template>
<script>
  export default {
        name : 'LogTime',
        data() {
            return {
                date : '',
                totalTime : '',
                comment : ''
            }
        },
        methods:{
          save() {
            const plan = {
              name : 'Yony',
              avatar : 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
              date : this.date,
              totalTime : this.totalTime,
              comment : this.comment
            };
            this.$store.dispatch('savePlan', plan)
            this.$store.dispatch('addTotalTime', this.totalTime)
            this.$router.go(-1)
          }
        }
    }
</script>

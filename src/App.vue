
<template>
    <div>
        <top-nav></top-nav>
        <router-view></router-view>
    </div>
</template>

<style lang="less">
    @import 'assets/less/common/base.less';
</style>

<script>
  import topNav from './components/header';

  export default {
    components: {
        topNav
     }
  };
</script>

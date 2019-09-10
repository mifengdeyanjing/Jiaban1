<template>
  <div class="header">
    <span @click="goFn">&lt;</span>
    <b>
      加班/休假
      <!-- {{title}} -->
    </b>

    <!-- <span class="icon iconfont icon-dingdan"></span> -->
    <span class="icon iconfont icon-sousuo"></span>    
  </div>
</template>

<script>
export default {
    methods:{
      goFn:function(){
        this.$router.go(-1)
      }
    }
}
</script>

<style scoped>
.header{
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 35px;
  line-height: 35px;
}
</style>
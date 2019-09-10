<template>
  <div class="jiaItembox">
      <li v-for="(item,index) in option" :key="index" @click="godetail(item.applicationNumber,item.list_type)">
           <div class="zuo">
            <span>{{item.applicationNumber}}</span>
            <span>申请人:<b>{{item.nickname}}</b></span>
            <span>加班日期:<b>{{new Date(item.create_at).toLocaleDateString()}}</b></span>
            </div>
            <div class="you">
            <span class="icon iconfont icon-shoucang1" v-if="item.status==0">待审批</span>
            <span class="icon iconfont icon-shoucang1" v-else-if="item.status==1">已发起</span>
            <span class="icon iconfont icon-shoucang1" v-else>已处理</span>

            
            <span v-if="item.type==1">加班类型:<b>工作日加班</b></span>
            <span v-else-if="item.type==2">加班类型:<b>双休日加班</b></span>
            <span v-else>加班类型:<b>假期加班</b></span>

            <span>加班实数:<b>{{((new Date(item.endTime) * 1 - new Date(item.startTime)*1) / 3600 / 60 /60).toFixed(1)}}小时</b></span>
           </div>
      </li> 
   
  </div>
</template>

<script>
export default {
    props:["option"],
    methods:{
      godetail:function(id,type){
        this.$router.push({name:"/detail",params:{id:id,type:type}})
      }
    }
}
</script>

<style scoped>
  .jiaItembox{
    width: 95%;
    margin: 0 auto;
  }
  .jiaItembox li{
    width: 100%;
    /* padding: 5px; */
    border-bottom: 1px solid #ccc;  
    display: flex;
    justify-content: space-around;
    font-size: 14px;  
  }
  .jiaItembox li .zuo{
      width: 50%;
      display: flex;
      flex-direction: column;
    line-height: 35px;
  }
  .jiaItembox li .you{
    width: 50%;
    display: flex;
    flex-direction: column;
    line-height: 35px;
    /* margin-top: 10px; */
    position: relative;
  }
   .jiaItembox li .you span:first-child{
      margin-left: 80px;
   }
</style>
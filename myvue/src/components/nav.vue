<template>
  <div >
    <div class="navbox">
       <li :class="{active:status_active[0]}" @click="changeStatus(0)">
         <span class="icon iconfont icon-shoucang1"></span>
         <span>待处理</span>
      </li>
        <li :class="{active:status_active[1]}" @click="changeStatus(1)">
        <span class="icon iconfont icon-bofang"></span>        
         <span>已发起</span>
      </li>
        <li :class="{active:status_active[2]}" @click="changeStatus(2)">
        <span class="icon iconfont icon-duigou"></span>       
         <span>已处理</span>
      </li>
    </div>
       <div class="sps">
        <div class="qie">
          <li v-for="(item,index) in shu" :key="index" @click="fn1(index)">{{item}}</li>
       
           <!-- <router-link to="/home/jia" tag="li"  class="active1"> 加班</router-link>
           <router-link to="/home/xiu" tag="li" class="active2"> 休假</router-link> -->
        </div>
        <span class="icon iconfont icon-weidenglu"></span>          
        <span class="icon iconfont icon-youjian"></span>
                
      </div>
      <JiaItem :option="list"/>
  </div>
</template>

<script>
import axios from "axios"
import JiaItem from "../components/jiaItem"
export default {
    data(){
      return {
        status_active:[true,false,false],
        list:[],
        shu:["加班","休假"],
        type:"vacation",
        status:0
      }
    },
    components:{JiaItem},
    methods:{
      changeStatus:function(index){
          for(var i=0;i<this.status_active.length;i++){
            if(i==index){
              this.status=i
              this.$set(this.status_active,i,true)
            }else{
              this.$set(this.status_active,i,false)
            }
          }
       
      //请求对应状态的任务列表
          this.zheng(index)
      },
       zheng(){
         axios.defaults.headers.common['token'] = localStorage.getItem('token');
         console.log(this.type)
          axios.get("http://localhost:3000/api/task/list",{params:{status:this.status,type:this.type}}).then((res)=>{
            this.list = res.data.data
            console.log(res.data,"navdata")
          
        })
        
      },
      fn1(index){
        // this.status=index
        if(index!=0){
          this.type="overtime"
        }else{
          this.type="vacation"
        }
         this.zheng()
      }

    },    
}
</script>

<style scoped>
  .navbox{
    width: 100%;
    height: 100px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
 .navbox li{
    width: 100%;
    height: 100%;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .active{
    color: green;
  }
  .sps{
  width: 100%;
  height: 80px;
  background: #ccc;
  margin-top: -20px;
  display: flex;
  justify-content: space-around;
  line-height: 80px;
}

  .qie{
    width: 200px;
    height: 30px;
    display: block;
    border: 1px solid green;
    text-align: center;
    line-height: 30px;
    border-radius: 15px;
    margin-top: 23px;
    display: flex;
    justify-content: space-around;
  }
  .active1{
    background: green;
    color: white;
  }
   .active2{
    background: salmon;
    color: white;
  }
</style>
<template>
  <div class="homebox">
      <MyHeader title="加班/休假"></MyHeader>
      <Nav/>
      <router-view/>

      <div class="dislog" @click="tiao">
          +发起任务
      </div>
      <div class="meng" v-if="flag">
        <div class="xia">
              <li @click="goshen">
              <img src="../assets/img/5.jpg"/>
                <span>加班</span>
            </li>
            <li  @click="goshen">
              <img src="../assets/img/03.png"/>
                <span>休假</span>
            </li>
        </div>
       
      </div>
   
  </div>
</template>

<script>
import Header from "../components/header"
import Nav from "../components/nav"
import Vue from "vue"
Vue.component("MyHeader",Header)
export default {
    data(){
      return {
        flag:false
      }
    },
    components:{Header,Nav},
    methods:{
      tiao:function(){
        this.flag=true
      },
      goshen:function(){
        this.$router.push("/shen")
      }
    }
}
</script>

<style scoped>
/* .sps{
  width: 100%;
  height: 80px;
  background: #ccc;
  margin-top: -20px;
  display: flex;
  justify-content: space-around;
  line-height: 80px;
} */
  /* .qie{
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
  } */
  /* .active{
    background: green;
    color: white;
  }
   .active1{
    background: salmon;
    color: white;
  } */
 
  li{
    list-style: none;
    width: 50%;
    border-radius: 15px;
  }
  .dislog{
    width: 100px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    background: green;
    color: white;
    border-radius: 20px;
    position: fixed;
    bottom: 20px;
    right: 10px;
  }
  .meng{
    width: 100%;
    height: 100%;
    background: black;
    opacity: .8;
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
  }
  .meng .xia{
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    justify-content: space-around;
  }
  .meng .xia li{
      width: 50%;
      display: flex;
      flex-direction: column;
      color: white;
      font-weight: bold;
  }
  .meng .xia li img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0 auto;
  }
  .meng .xia li span{
   text-align: center;  
  }
</style>
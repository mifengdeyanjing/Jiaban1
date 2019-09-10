<template>
  <div class="shenbox">
    <div class="shang">
      <div class="spss">
         <!-- <span class="sp1">&lt;</span>
         <span class="sp1">办公室加班申请表</span> -->
         <MyHeader title="办公室加班申请表"></MyHeader>
      </div>
      <div class="tu">
        <span>
           <img src="../assets/img/5.jpg"/>
        </span>
        <span>
          <b>申请人姓名 刘宇</b>
          <b>直接主管 刘玲玲</b>
        </span>
        <span>&gt;</span>
      </div>
    </div>
    <div class="content">
        <div class="div1">
          <h3>申请信息</h3>
          <li>
            <span>加班日期*</span>
            <span></span> 
          </li>
          <li>  
            <span>加班类型*</span>
            <select name="" id="" v-model="type">
              <option value="1">工作日加班</option>
              <option value="2">双休日加班</option>
              <option value="3">假期加班</option>
            </select>
          </li>
          <li>
            <span>加班起始时间*</span>
            <input type="text" v-model="startTime" @click="$refs.startTimePicker.open()"/>
          </li>
          <li>
              <span>加班截止时间*</span> 
              <input type="text" v-model="endTime" @click="$refs.endTimePicker.open()"/>
          </li>
          <li>
              <span>共计时数</span>
              <input type="text"/>
          </li>

        </div>
        <div class="div2">
            <span>加班事由</span>
            <input type="text" v-model="desc"/>
        </div>
    </div>
    <div class="di">
      <span class="span1" @click="gohomejia">取消</span>
      <span class="span2 active" @click="submit_overtime">提交</span>
    </div>
      <!-- 演示 datetime-picker组件的使用 -->
        <mt-datetime-picker ref="startTimePicker" @confirm="getStartTime"></mt-datetime-picker>
        <mt-datetime-picker ref="endTimePicker" @confirm="getEndTime"></mt-datetime-picker>
  </div>
</template>

<script>
import axios from "axios"
import Header from "../components/header"
export default {
    data(){
      return {
        startTime:"",
        endTime:"",
        type:1,
        desc:""
      }
    },
    methods:{
      gohomejia:function(){
        this.$router.push("/home/jia")
      },
      getStartTime:function(date){
          //console.log(date.toLocaleDateString());
          this.startTime = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      },
      getEndTime:function(date){
        //console.log(date.toLocaleDateString());
        this.endTime = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      },
      submit_overtime:function(){
          axios.post("http://localhost:3000/api/apply/overtime",{
            annex:"",
            describe:this.desc,
            startTime:this.startTime,
            endTime:this.endTime,
            type:this.type
          }).then((res)=>{
            console.log(res.data,"data")
          })
      }


    },
    components:{Header}
}
</script>

<style scoped>
.shenbox{
  width: 100%;
  height: 100%;
  /* background: #ccc;
  overflow: hidden; */
}
.shang{
  width: 100%;
  height: 200px;
  background: green;
  color: white;
  border-radius: 0px 0px 35px 35px;
}
.content{
  width: 90%;
  margin: -15px auto;
  background: white;
  border-radius: 10px;
}
.div1 h3{
  border-bottom: 1px solid #ccc;
  height: 30px;
  line-height: 30px;
}
.div1 li{
  width: 100%;
  height: 35px;
  line-height: 35px;
  justify-content: space-between;
  display: flex;
}
.div2{
  width: 100%;
  margin: 10px auto;
  border-top: 3px solid #ccc;
  display: flex;
  flex-direction: column;
  height: 80px;
}
.div2 span{
    height: 50%;
    line-height: 30px;
  border-radius: 10px;
display: inline-block
    
}
.div2 input{
  width: 50%;
  line-height: 20px;
  
}
.spss{
  width:100%;
  display: flex;
  justify-content: space-around;
  height: 35px;
  line-height: 35px;
}
.tu{
  width: 100%;
  display: flex;
  justify-content: space-around;
  line-height: 30px;
  margin-top: 20px;
}
span{
  display: flex;
  flex-direction: column;
}
img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.di{
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
}
.active{
  background: green;
  color: white;
}
.span1{
  flex: 1;
  text-align: center;
}
.span2{
  flex: 1;
  text-align: center;
}


</style>
<template>
  <div class="login-page">
      <div class="phone">
        <input type="text" v-model="phone" placeholder="手机号码"/>
      </div>
       <div class="password">
        <input type="text" v-model="password" placeholder="密码"/>
      </div>
      <div class="btn">
        <button @click="tohome">登录</button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
        phone:"",
        password:""
      }
    },
    methods:{
      tohome:function(){
        //向服务器发请求（登录请求）
        this.axios.post("http://localhost:3000/api/login",{phone:this.phone,password:this.password}).then((res)=>{
            if(res.data.code==1){
              //立即将获取的token存入localstore
              console.log(res.data,"dat")
              localStorage.setItem("token",res.data.token)
               this.$router.push("/home")
            }
        })
      }
    }
}
</script>

<style scoped>
  .login-page{
    margin: 20px;
  }
  .login-page>div{
    margin-bottom: 20px;
  }
  .login-page input{
    height: 50px;
    border: 0px;
    border-bottom: 1px solid #ccc;
    font-size: 18px;
    width: 100%;
    outline: none;
  }
  .login-page button{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: none;
    color: white;
    background: #999;
    border-radius: 25px;
    outline: none;
  }
</style>
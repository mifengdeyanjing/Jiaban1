<template>
  <div>
    <Jia :option="data"/>
  </div>
</template>

<script>
import axios from "axios"
import Jia from "../components/jiaItem"
export default {
    data(){
      return {
        data:[]
      }
    },
    components:{Jia},
    mounted(){
      // console.log(this.$route.params.id)
      // console.log(this.$route.params.type)
      let id = this.$route.params.id
      let type = this.$route.params.type;
      if(type=="vacation"){
         axios.get("http://localhost:3000/api/apply/vacation",{params:{applicationNumber:this.$route.params.id,header:{token:localStorage.getItem("token")}}}).then((res)=>{
            console.log(res,"vacation")
            this.data=res.data
        })
      }else{
         axios.get("http://localhost:3000/api/apply/overtime",{params:{applicationNumber:this.$route.params.id,header:{token:localStorage.getItem("token")}}}).then((res)=>{
            console.log(res,"overtime")
            this.data=res.data
        })
      }
     
    }
}
</script>

<style>

</style>
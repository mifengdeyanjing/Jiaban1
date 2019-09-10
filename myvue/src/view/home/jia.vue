<template>
  <div>
    <!-- <jiaItem :option="data"/> -->
  </div>
</template>

<script>
import axios from "axios"
import jiaItem from "../../components/jiaItem"
export default {
    data(){
      return {
        data:[]
      }
    },
    components:{jiaItem},
    mounted(){
      axios.get("http://localhost:3000/api/task/list").then(({data})=>{
        this.data=data.data
      })
    }
}
</script>

<style>

</style>
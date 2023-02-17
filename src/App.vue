<script >
// import { RouterLink, RouterView } from 'vue-router'
import Todo from './pages/todo.vue'


export default{
  components:{
    Todo
  }
}
</script>

<template>
  <div class="bg p-10 grid grid-cols-9  ">
   
   <div class="heading col-start-1 col-end-4" >
    <h1 class="font-bold text-6xl">Taskr <span class="ui-higlight">UI</span> </h1>
   </div>

   <div class="col-start-4 col-end-10">
    <Todo/>
   </div>
 
  </div>

  <!-- <RouterLink to="/about">About</RouterLink> -->
  <!-- <RouterView /> -->
</template>

<style scoped>
.bg {
  background: linear-gradient(
    148deg,
    hsla(317, 90%, 88%, 1) 0%,
    hsla(304, 60%, 81%, 1) 20%,
    hsla(240, 100%, 89%, 1) 68%

  );
  height:650px;

}
.heading{
  margin-top: 55%;
}
.ui-higlight{
  color: #9333EA;
}
</style>

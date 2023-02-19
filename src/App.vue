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
  <div class="bg p-10 lg:grid lg:grid-cols-9  ">
   
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


}
.heading{
  margin-top: 55%;
}
.ui-higlight{
  color: #9333EA;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

  .heading{
    margin-top: 5%;
  }
  .bg {
 

height: 660px;
}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {


  .heading{
    margin-top: 5%;
  }
}


/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
 
  .heading{
    margin-top: 55%;
  }
  .bg{
    height: 650px;
  }
}


</style>

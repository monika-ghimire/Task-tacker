<script >
import Newtodo from '../view/newtodo.vue'
import Todayview from '../view/todayview.vue'
import Wether from '../view/wether.vue'

export default{
  components: { Newtodo, Wether, Todayview},

  data(){
  return{
    tab:"todo",
    active: true,
  }
   
  },


}



</script>

<template>
  <div class="p-10 pr-0 todos-content-wrapper">

    <nav class="navBar grid grid-cols-3 pl-5 pt-1 ">

      <div>
        <h1 class="font-bold text-2xl">Taskr.oi</h1>
      </div>

      <div class=" gap-10   flex pl-5">
        <div class="todo-nav  tab"  :class="{ active: tab === 'todo' }" @click="tab ='todo'" >Todo</div>
        <p class=" ">Complete Task</p>
        <!-- @click="tab = 'todo'" -->
      </div>

      <div class=" float-right gap-4">
        <p class="float-right pr-2">dark </p>
        <p class="float-right pr-7">prof</p>
 
      </div>
    </nav>

    <section>
        <div class="grid grid-cols-6">
            <div class="p-5 pl-2 relative font-semibold col-start-1 col-end-3">
                <div class="side-nav tab" :class="{ active: tab == 'today' }" @click="tab = 'today'" >Today </div>
                <div class="side-nav tab" :class="{ active: tab == 'weather' }" @click="tab = 'weather'">weather </div>
                <p class="setting-button  "  v-if="tab ==='todo'">setting</p>
            </div>

            <div class=" content  col-start-3 col-end-7 ">
                
                <div v-if="tab ==='today'">
                    <Todayview/>
                </div>
                <div v-if="tab ==='todo'">
                    <Newtodo/>
                </div>
             
                <div  v-if="tab ==='weather'">
                    <Wether/>
                </div>

             
            </div>

        </div>
    </section>
  </div>

 
</template>


<style scoped>
.todos-content-wrapper{
    margin-top:2%;
}
.navBar {
  background: white;
   height: 40px;
  border-radius: 10px ;
  top:10%;
 
}
.tab.active {
    color: #9333ea;
    font:bold;
    font-size: 1.1em;
    border:5px soild #1d0930;
   

  }
.content{
    background: white;
    margin-top:3%;
    padding:3%;
    padding-top: 1%;
    border-radius: 3%;

}
h1 {
  color: #9333ea;
}
p{
    color: rgb(105, 105, 105);
}
/* .todo-nav{
  color: #9333ea;

}
.todo:hover{
    background: #dfc1fa;;
    color: white;
    border-radius: 10px;
    padding-left: 2%;


}
.todo:hover .title{
    color: #9333ea;
}
.todo:hover .icon-three-dot{
    right: 4%;
    top: 35px;
} */
.side-nav{
    padding: 10px;
    border-radius:5px;
}
.side-nav:hover{
    background: #ca92ff;;
    color: #f9f6fd;
}

.setting-button{
    position: absolute;
    bottom: 10px;
     margin-top: 5%;
    font: bold;
    padding-left: 5px;
}
</style>
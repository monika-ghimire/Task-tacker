
<template>
    <div class="content">
        <div class=" todo   p-10 pt-2 pl-0 relative" v-for="i in  todos" :key="i.id" 
        >

                    <h5 class="heading font-semibold text-2xl  tab" @click="markAsComplete(i.id)">{{ i.heading }}</h5>
                    <p class="title text-slate-400 tab"  :class="{ workDone: tab == i.id }">{{ i.title }}</p>
                    <p class="icon-three-dot">i </p>
                </div>

                <div class="flex">
                     <input placeholder="add todo.."  
                     v-model="text" class="mt-5 p-2 bg-slate-100 rounded w-full"/>
                     <button  class="checkBtn" @click="newtodoAdd(text)">✅</button>
                </div>
          
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from "vuex";
export default{
   
data(){
    return{
        workDone:true,
        tab:0,
       
        sendtodo:[{
            heading:'',
            istaskComplete:false,
            
        }]
    }
},
computed: mapState({
    todos:state=>state.todoList
}),
methods:{
    ...mapActions( ['updateTodo']),
    markAsComplete(id){
        console.log(id)
    },
    newtodoAdd(text){
        this.sendtodo.heading=text
        this.updateTodo(this.sendtodo)

        console.log("data send from componet")
        console.log(this.sendtodo)

        // console.log("data come after sending from component")
        // console.log(this.updateTodo)


    }
}
}
</script>

<style scoped>
.content{
    background: white;
    margin-top:3%;
    padding:3%;
    padding-top: 1%;
    border-radius: 3%;

}



.tab.workDone{
   color: rgb(117, 181, 20);
}

h1 {
  color: #9333ea;
}
p{
    color: rgb(105, 105, 105);
}
.todo-nav{
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
}
.icon-three-dot{
    position: absolute;
    right: 0px;
    top: 22px;
}

</style>
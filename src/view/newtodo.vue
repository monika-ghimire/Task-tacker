
<template>
    <div>
        <div class=" todo p-10 pt-2 pl-0 relative" v-for="i in    todos" :key="i.id">
                    <h5 class="heading font-semibold text-2xl">{{ i.heading }}</h5>
                    <p class="title text-slate-400">{{ i.title }}</p>
                    <p class="icon-three-dot">i </p>
                </div>

                <div>
                    <input placeholder="add todo.."  
                    v-model="message"
                      
                    class="mt-5 p-2 bg-slate-100 rounded w-full"/>
                </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
   
data(){
    return{

    }
},
computed: mapState({
    todos:state=>state.todoList
})
}
</script>

<style scoped>
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